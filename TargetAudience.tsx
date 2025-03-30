import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TranslateIcon from '@mui/icons-material/Translate';

const audiences = [
  {
    icon: <BusinessIcon sx={{ fontSize: 40 }} />,
    title: 'Employees & Managers',
    description: 'Perfect for maintaining professional communication within your organization',
  },
  {
    icon: <WorkIcon sx={{ fontSize: 40 }} />,
    title: 'Freelancers & Business Owners',
    description: 'Enhance your client communications and maintain professional relationships',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: 'HR & Customer Service',
    description: 'Handle sensitive communications with the right tone and professionalism',
  },
  {
    icon: <TranslateIcon sx={{ fontSize: 40 }} />,
    title: 'Non-Native English Speakers',
    description: 'Communicate confidently in professional English for workplace success',
  },
];

const TargetAudience = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: 'background.paper',
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
          Who Is This For?
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {audiences.map((audience, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    bgcolor: 'background.default',
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {audience.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {audience.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {audience.description}
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

export default TargetAudience;
