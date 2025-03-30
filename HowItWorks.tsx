import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CreateIcon from '@mui/icons-material/Create';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SendIcon from '@mui/icons-material/Send';

const steps = [
  {
    icon: <CreateIcon sx={{ fontSize: 40 }} />,
    title: 'Paste your message',
    description: 'Simply paste your draft message into our editor',
  },
  {
    icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />,
    title: 'AI rewrites it professionally',
    description: 'Our AI transforms your message into polished corporate language',
  },
  {
    icon: <SendIcon sx={{ fontSize: 40 }} />,
    title: 'Copy & send it instantly',
    description: 'Copy the refined message and send it with confidence',
  },
];

const HowItWorks = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          How It Works
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
