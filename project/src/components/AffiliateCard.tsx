import React from 'react';
import { Star, ExternalLink, Tag, Users } from 'lucide-react';
import { AffiliateLink } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface AffiliateCardProps {
  affiliate: AffiliateLink;
}

const AffiliateCard: React.FC<AffiliateCardProps> = ({ affiliate }) => {
  const { language, t } = useLanguage();

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'resume':
        return '📄';
      case 'course':
        return '🎓';
      case 'skill':
        return '🚀';
      case 'interview':
        return '💼';
      default:
        return '📚';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'resume':
        return 'bg-blue-100 text-blue-700';
      case 'course':
        return 'bg-green-100 text-green-700';
      case 'skill':
        return 'bg-purple-100 text-purple-700';
      case 'interview':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={affiliate.image}
          alt={language === 'en' ? affiliate.title : affiliate.titleKn}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(affiliate.category)}`}>
          <span className="mr-1">{getCategoryIcon(affiliate.category)}</span>
          {t(`affiliate.category.${affiliate.category}`, affiliate.category, affiliate.category)}
        </div>
        {affiliate.originalPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
            {t('affiliate.sale', 'SALE', 'ಮಾರಾಟ')}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {language === 'en' ? affiliate.title : affiliate.titleKn}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {language === 'en' ? affiliate.description : affiliate.descriptionKn}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(affiliate.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {affiliate.rating} ({affiliate.reviews.toLocaleString()})
            </span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="h-4 w-4 mr-1" />
            <span>{affiliate.reviews.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-2xl font-bold text-green-600">
              {affiliate.price}
            </div>
            {affiliate.originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                {affiliate.originalPrice}
              </div>
            )}
          </div>
          {affiliate.originalPrice && (
            <div className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-medium">
              {Math.round(((parseFloat(affiliate.originalPrice.replace(/[^\d]/g, '')) - parseFloat(affiliate.price.replace(/[^\d]/g, ''))) / parseFloat(affiliate.originalPrice.replace(/[^\d]/g, ''))) * 100)}% {t('affiliate.off', 'OFF', 'ರಿಯಾಯಿತಿ')}
            </div>
          )}
        </div>

        <a
          href={affiliate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
        >
          <span>{t('affiliate.getStarted', 'Get Started', 'ಪ್ರಾರಂಭಿಸಿ')}</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default AffiliateCard;