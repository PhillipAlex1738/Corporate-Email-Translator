import React, { useState } from 'react';
import { Box, TextField, Typography, MenuItem, Paper } from '@mui/material';
import { LoadingButton } from '@mui/lab';

interface TranslatorProps {}

const Translator: React.FC<TranslatorProps> = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [tone, setTone] = useState('formal');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    if (!inputText) {
      setError('Please enter some text to translate');
      return;
    }

    setLoading(true);
    setError('');

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
            <LoadingButton
              onClick={handleCopy}
              variant="outlined"
              color="primary"
              sx={{ mt: 1 }}
            >
              Copy to Clipboard
            </LoadingButton>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Translator;