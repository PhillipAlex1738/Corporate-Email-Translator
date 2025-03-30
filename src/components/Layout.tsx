import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Box>
      <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'primary.main',
                fontWeight: 700,
              }}
            >
              AI Email Translator
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ color: 'text.primary' }}
              >
                Home
              </Button>
              <Button
                component={RouterLink}
                to="/translator"
                color="inherit"
                sx={{ color: 'text.primary' }}
              >
                Translator
              </Button>
              <Button
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Layout;
