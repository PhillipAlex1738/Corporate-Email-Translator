import { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const toneOptions = [
  { value: 'formal', label: 'Formal' },
  { value: 'diplomatic', label: 'Diplomatic' },
  { value: 'concise', label: 'Concise' },
];

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [tone, setTone] = useState('formal');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          tone: tone,
        }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      
      setOutputText(data.translatedText);
    } catch (error) {
      console.error('Translation error:', error);
      setOutputText('Sorry, there was an error translating your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
  };

  return (
    <Box sx={{ py: 4, minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Email Translator
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Transform your message into professional corporate language
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <FormControl fullWidth>
            <InputLabel>Tone</InputLabel>
            <Select
              value={tone}
              label="Tone"
              onChange={(e) => setTone(e.target.value)}
            >
              {toneOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Paper
            elevation={0}
            sx={{
              flex: 1,
              p: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Your Message
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={8}
              variant="outlined"
              placeholder="Type or paste your message here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </Paper>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              justifyContent: 'center',
              alignItems: 'center',
              py: 2,
            }}
          >
            <LoadingButton
              variant="contained"
              onClick={handleTranslate}
              loading={loading}
              loadingPosition="start"
              startIcon={<SwapVertIcon />}
            >
              Translate
            </LoadingButton>
          </Box>

          <Paper
            elevation={0}
            sx={{
              flex: 1,
              p: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography variant="subtitle1">
                Professional Version
              </Typography>
              {outputText && (
                <Button
                  size="small"
                  startIcon={<ContentCopyIcon />}
                  onClick={handleCopy}
                >
                  Copy
                </Button>
              )}
            </Box>
            <TextField
              fullWidth
              multiline
              rows={8}
              variant="outlined"
              value={outputText}
              placeholder="Your professional message will appear here..."
              InputProps={{
                readOnly: true,
              }}
            />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Translator;
