import React, { useState } from 'react';
import { Box, TextField, Typography, MenuItem, Paper, Rating, Snackbar } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

interface TranslatorProps {}

const Translator: React.FC<TranslatorProps> = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [tone, setTone] = useState('formal');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState('');
  const [showFeedbackSuccess, setShowFeedbackSuccess] = useState(false);

  const handleTranslate = async () => {
    if (!inputText) {
      setError('Please enter some text to translate');
      return;
    }

    setLoading(true);
    setError('');
    setRating(null);
    setFeedback('');

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          tone: tone,
        }),
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (err) {
      setError('Failed to translate. Please try again.');
      console.error('Translation error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedbackSubmit = async () => {
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          originalText: inputText,
          translatedText,
          tone,
          rating,
          feedback,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      setShowFeedbackSuccess(true);
      setRating(null);
      setFeedback('');
    } catch (err) {
      console.error('Error submitting feedback:', err);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          AI Email Translator
        </Typography>
        
        <TextField
          select
          label="Tone"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          fullWidth
          margin="normal"
        >
          <MenuItem value="formal">Formal</MenuItem>
          <MenuItem value="diplomatic">Diplomatic</MenuItem>
          <MenuItem value="concise">Concise</MenuItem>
        </TextField>

        <TextField
          label="Enter your message"
          multiline
          rows={4}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          fullWidth
          margin="normal"
          error={!!error}
          helperText={error}
        />

        <Box sx={{ mt: 2, mb: 3 }}>
          <LoadingButton
            onClick={handleTranslate}
            loading={loading}
            variant="contained"
            color="primary"
            fullWidth
          >
            Translate
          </LoadingButton>
        </Box>

        {translatedText && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Translated Email:
            </Typography>
            <TextField
              multiline
              rows={4}
              value={translatedText}
              fullWidth
              margin="normal"
              InputProps={{ readOnly: true }}
            />
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <LoadingButton
                onClick={handleCopy}
                variant="outlined"
                color="primary"
              >
                Copy to Clipboard
              </LoadingButton>
            </Box>

            {/* Feedback Section */}
            <Box sx={{ mt: 4, borderTop: 1, pt: 3, borderColor: 'divider' }}>
              <Typography variant="h6" gutterBottom>
                How was the translation?
              </Typography>
              <Rating
                value={rating}
                onChange={(_, newValue) => setRating(newValue)}
                size="large"
                sx={{ mb: 2 }}
              />
              <TextField
                label="Additional Feedback (optional)"
                multiline
                rows={2}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                fullWidth
                margin="normal"
              />
              <LoadingButton
                onClick={handleFeedbackSubmit}
                variant="contained"
                color="secondary"
                sx={{ mt: 1 }}
                disabled={!rating}
              >
                Submit Feedback
              </LoadingButton>
            </Box>
          </Box>
        )}
      </Paper>

      <Snackbar
        open={showFeedbackSuccess}
        autoHideDuration={6000}
        onClose={() => setShowFeedbackSuccess(false)}
        message="Thank you for your feedback!"
      />
    </Box>
  );
};

export default Translator;