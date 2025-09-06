import React from 'react';
import { BookOpen, TrendingUp, Award, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { affiliateLinks } from '../data/mockData';
import AffiliateCard from './AffiliateCard';

const ResourcesSection: React.FC = () => {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'resume',
      icon: BookOpen,
      title: t('resources.resume.title', 'Resume Tools', 'ರೆಸ್ಯೂಮ್ ಸಾಧನಗಳು'),
      description: t('resources.resume.desc', 'Professional resume builders and templates', 'ವೃತ್ತಿಪರ ರೆಸ್ಯೂಮ್ ಬಿಲ್ಡರ್‌ಗಳು ಮತ್ತು ಟೆಂಪ್ಲೇಟ್‌ಗಳು'),
      color: 'blue'
    },
    {
      id: 'course',
      icon: TrendingUp,
      title: t('resources.courses.title', 'Skill Courses', 'ಕೌಶಲ್ಯ ಕೋರ್ಸ್‌ಗಳು'),
      description: t('resources.courses.desc', 'Learn new skills to advance your career', 'ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಮುನ್ನಡೆಸಲು ಹೊಸ ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಯಿರಿ'),
      color: 'green'
    },
    {
      id: 'interview',
      icon: Target,
      title: t('resources.interview.title', 'Interview Prep', 'ಸಂದರ್ಶನ ತಯಾರಿ'),
      description: t('resources.interview.desc', 'Ace your interviews with expert guidance', 'ತಜ್ಞರ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ನಿಮ್ಮ ಸಂದರ್ಶನಗಳಲ್ಲಿ ಯಶಸ್ವಿಯಾಗಿ'),
      color: 'orange'
    },
    {
      id: 'skill',
      icon: Award,
      title: t('resources.certification.title', 'Certifications', 'ಪ್ರಮಾಣೀಕರಣಗಳು'),
      description: t('resources.certification.desc', 'Get certified in high-demand skills', 'ಹೆಚ್ಚಿನ ಬೇಡಿಕೆಯಿರುವ ಕೌಶಲ್ಯಗಳಲ್ಲಿ ಪ್ರಮಾಣೀಕರಣ ಪಡೆಯಿರಿ'),
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      orange: 'bg-orange-100 text-orange-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t('resources.title', 'Career Resources', 'ವೃತ್ತಿಜೀವನ ಸಂಪನ್ಮೂಲಗಳು')}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('resources.subtitle', 
              'Boost your career with our curated collection of professional tools, courses, and resources.',
              'ನಮ್ಮ ಆಯ್ಕೆಮಾಡಿದ ವೃತ್ತಿಪರ ಸಾಧನಗಳು, ಕೋರ್ಸ್‌ಗಳು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳ ಸಂಗ್ರಹದೊಂದಿಗೆ ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಹೆಚ್ಚಿಸಿ.'
            )}
          </p>
        </div>

        {/* Category Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 p-6 text-center cursor-pointer transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-full ${getColorClasses(category.color)} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t('resources.featured', 'Featured Resources', 'ವೈಶಿಷ್ಟ್ಯಗೊಳಿಸಿದ ಸಂಪನ್ಮೂಲಗಳು')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {affiliateLinks.map((affiliate) => (
              <AffiliateCard key={affiliate.id} affiliate={affiliate} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            {t('resources.cta.title', 'Ready to Advance Your Career?', 'ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಮುನ್ನಡೆಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?')}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {t('resources.cta.subtitle', 
              'Join thousands of professionals who have transformed their careers with our resources.',
              'ನಮ್ಮ ಸಂಪನ್ಮೂಲಗಳೊಂದಿಗೆ ತಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಪರಿವರ್ತಿಸಿದ ಸಾವಿರಾರು ವೃತ್ತಿಪರರೊಂದಿಗೆ ಸೇರಿ.'
            )}
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            {t('resources.cta.button', 'Explore All Resources', 'ಎಲ್ಲಾ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಅನ್ವೇಷಿಸಿ')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;