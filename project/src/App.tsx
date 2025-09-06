import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import JobSection from './components/JobSection';
import ResourcesSection from './components/ResourcesSection';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <JobSection />
        <ResourcesSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
