import React, { useState } from 'react';
import { Search, MapPin, Briefcase, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchTerm, 'in', location);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('hero.title', 'Find Your Perfect Job in', 'ನಿಮ್ಮ ಪರಿಪೂರ್ಣ ಕೆಲಸವನ್ನು ಹುಡುಕಿ')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t('hero.location', 'Karnataka', 'ಕರ್ನಾಟಕದಲ್ಲಿ')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle', 
              'Discover thousands of job opportunities from top companies across Karnataka. Your dream career is just a search away.',
              'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಪ್ರಮುಖ ಕಂಪನಿಗಳಿಂದ ಸಾವಿರಾರು ಕೆಲಸದ ಅವಕಾಶಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ನಿಮ್ಮ ಕನಸಿನ ವೃತ್ತಿಜೀವನವು ಕೇವಲ ಒಂದು ಹುಡುಕಾಟದ ದೂರದಲ್ಲಿದೆ.'
            )}
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder={t('search.jobTitle', 'Job title, keywords...', 'ಕೆಲಸದ ಶೀರ್ಷಿಕೆ, ಕೀವರ್ಡ್‌ಗಳು...')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder={t('search.location', 'Location', 'ಸ್ಥಳ')}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {t('search.button', 'Search Jobs', 'ಕೆಲಸಗಳನ್ನು ಹುಡುಕಿ')}
                </button>
              </div>
            </div>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">
                {t('stats.jobs', 'Active Jobs', 'ಸಕ್ರಿಯ ಕೆಲಸಗಳು')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">
                {t('stats.companies', 'Companies', 'ಕಂಪನಿಗಳು')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
              <p className="text-gray-600">
                {t('stats.cities', 'Cities', 'ನಗರಗಳು')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;