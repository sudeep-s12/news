import React from 'react';
import { MapPin, Languages, Briefcase, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {t('siteName', 'Local Job Radar', 'ಲೋಕಲ್ ಜಾಬ್ ರಾಡಾರ್')}
              </h1>
              <p className="text-xs text-gray-500">
                {t('tagline', 'Find Your Dream Job', 'ನಿಮ್ಮ ಕನಸಿನ ಕೆಲಸವನ್ನು ಹುಡುಕಿ')}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#jobs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.jobs', 'Jobs', 'ಕೆಲಸಗಳು')}
            </a>
            <a href="#resources" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.resources', 'Resources', 'ಸಂಪನ್ಮೂಲಗಳು')}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t('nav.about', 'About', 'ನಮ್ಮ ಬಗ್ಗೆ')}
            </a>
          </nav>

          {/* Language Toggle & CTA */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Toggle Language"
            >
              <Languages className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
              </span>
            </button>
            
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
              {t('cta.postJob', 'Post Job', 'ಕೆಲಸ ಪೋಸ್ಟ್ ಮಾಡಿ')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;