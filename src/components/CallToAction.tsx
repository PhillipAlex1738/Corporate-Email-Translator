import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const CallToAction = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 6,
              textAlign: 'center',
              bgcolor: 'primary.main',
              color: 'white',
              borderRadius: 4,
            }}
          >
            <Box sx={{ mb: 2 }}>
              <RocketLaunchIcon sx={{ fontSize: 48 }} />
            </Box>
            <Typography variant="h3" component="h2" gutterBottom>
              🚀 Get Early Access!
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Join our waitlist and be the first to try our AI-powered corporate translator.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100',
                },
                minWidth: 200,
                fontSize: '1.1rem',
              }}
            >
              Join Waitlist Now
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CallToAction;
