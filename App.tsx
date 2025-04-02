import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEO />
        <Layout />
        <Analytics />
      </Router>
    </HelmetProvider>
  );
}

export default App;