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
        <Analytics
          beforeSend={(event) => {
            // Log events to console in development
            if (process.env.NODE_ENV === 'development') {
              console.log('Analytics Event:', event);
            }
            return event;
          }}
          debug={true} // Enable debug mode
        />
      </Router>
    </HelmetProvider>
  );
}

export default App;