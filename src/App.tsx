import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import Layout from './components/Layout';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import Benefits from './components/Benefits';
import CallToAction from './components/CallToAction';
import Translator from './components/Translator';

const HomePage = () => (
  <>
    <Hero />
    <HowItWorks />
    <TargetAudience />
    <Benefits />
    <CallToAction />
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="translator" element={<Translator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
