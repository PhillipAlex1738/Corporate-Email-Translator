import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SpeedIcon from '@mui/icons-material/Speed';
import TuneIcon from '@mui/icons-material/Tune';
import DevicesIcon from '@mui/icons-material/Devices';

const benefits = [
  {
    icon: <SpeedIcon sx={{ fontSize: 40 }} />,
    title: 'Instant Professionalism',
    description: 'No more second-guessing your tone or spending time on rewrites',
  },
  {
    icon: <TuneIcon sx={{ fontSize: 40 }} />,
    title: 'Customizable Tone',
    description: 'Choose between Formal, Diplomatic, or Concise styles',
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 40 }} />,
    title: 'Works Everywhere',
    description: 'Perfect for Emails, Slack, and all workplace communication',
  },
];

const Benefits = () => {
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
          Key Benefits
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
