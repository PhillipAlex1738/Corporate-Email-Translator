import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Translator from './Translator';
import Blog from './Blog';
import Hero from './Hero';
import SEO from './SEO';

const Layout: React.FC = () => {
  const location = useLocation();

  const getSEOConfig = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'AI Email Translator - Professional Email Communication Made Easy',
          description: 'Transform your business emails with AI-powered translation. Perfect for international teams, professionals, and businesses seeking efficient communication.',
          keywords: 'email translator, business communication, AI email assistant, professional email writing',
        };
      case '/translator':
        return {
          title: 'Email Translator Tool - Write Professional Emails Instantly',
          description: 'Use our AI-powered email translator to write professional, culturally-appropriate business emails in seconds.',
          keywords: 'email translation, professional emails, business writing, AI translator',
        };
      case '/blog':
        return {
          title: 'Business Communication Blog - Email Writing Tips & Insights',
          description: 'Expert advice on business communication, email etiquette, and leveraging AI for better professional correspondence.',
          keywords: 'business communication tips, email writing guide, professional communication',
        };
      default:
        if (location.pathname.startsWith('/blog/')) {
          const blogId = location.pathname.split('/blog/')[1];
          const blogTitle = getBlogTitle(blogId);
          return {
            title: blogTitle,
            description: `Read our detailed guide on ${blogTitle.toLowerCase()}. Expert insights and practical tips for business professionals.`,
            keywords: `${blogId.replace(/-/g, ' ')}, business communication, professional emails`,
            type: 'article',
          };
        }
        return {};
    }
  };

  const getBlogTitle = (blogId: string) => {
    switch (blogId) {
      case 'mastering-cross-cultural-email-etiquette':
        return 'Mastering Cross-Cultural Email Etiquette';
      case 'ai-revolution-in-business-communication':
        return 'The AI Revolution in Business Communication';
      case 'measuring-roi-of-better-email-communication':
        return 'Measuring ROI of Better Email Communication';
      default:
        return 'AI Email Translator Blog';
    }
  };

  const seoConfig = getSEOConfig();

  return (
    <>
      <SEO {...seoConfig} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default Layout;