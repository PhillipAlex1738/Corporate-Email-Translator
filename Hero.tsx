import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 12,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            component="h1"
            variant="h1"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Turn Any Message Into a Professional Email Instantly
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ mb: 4 }}
          >
            Make your emails sound polished, professional, and corporate-ready with AI.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <Button
            component={RouterLink}
            to="/translator"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              minWidth: 200,
              fontSize: '1.1rem',
            }}
          >
            Try It Now
          </Button>
        </motion.div>

        {/* Example Transformation Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            sx={{
              mt: 6,
              p: 3,
              borderRadius: 2,
              bgcolor: 'background.default',
              boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Before: "Hey, the report's super late and I'm pretty annoyed tbh"
            </Typography>
            <Typography variant="body1" color="primary" sx={{ mt: 2 }}>
              After: "I wanted to follow up regarding the status of the report, as it's currently past the deadline. Could you please provide an update?"
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
