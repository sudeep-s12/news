import React from 'react';
import { MapPin, Clock, Briefcase, Star, ExternalLink, Share2 } from 'lucide-react';
import { Job } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { language, t } = useLanguage();

  const handleShare = async () => {
    const shareData = {
      title: language === 'en' ? job.title : job.titleKn,
      text: `${language === 'en' ? job.title : job.titleKn} at ${language === 'en' ? job.company : job.companyKn}`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to WhatsApp
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareData.text} - ${shareData.url}`)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      return t('time.today', 'Today', 'ಇಂದು');
    } else if (diffDays <= 7) {
      return t('time.daysAgo', `${diffDays} days ago`, `${diffDays} ದಿನಗಳ ಹಿಂದೆ`);
    } else {
      return date.toLocaleDateString(language === 'en' ? 'en-IN' : 'kn-IN');
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 ${job.featured ? 'ring-2 ring-blue-500 ring-opacity-20' : ''}`}>
      {job.featured && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-4 py-2 rounded-t-xl">
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 fill-current" />
            <span>{t('job.featured', 'Featured Job', 'ವೈಶಿಷ್ಟ್ಯಗೊಳಿಸಿದ ಕೆಲಸ')}</span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
              {language === 'en' ? job.title : job.titleKn}
            </h3>
            <p className="text-lg text-gray-700 font-medium mb-1">
              {language === 'en' ? job.company : job.companyKn}
            </p>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{language === 'en' ? job.location : job.locationKn}</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xl font-bold text-green-600 mb-1">
              {language === 'en' ? job.salary : job.salaryKn}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{formatDate(job.postedDate)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
            <Briefcase className="h-4 w-4 text-blue-600 mr-1" />
            <span className="text-sm text-blue-700 font-medium capitalize">{job.type}</span>
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded-full">
            <span className="text-sm text-gray-700">
              {language === 'en' ? job.experience : job.experienceKn}
            </span>
          </div>
          <div className="bg-purple-50 px-3 py-1 rounded-full">
            <span className="text-sm text-purple-700">
              {language === 'en' ? job.category : job.categoryKn}
            </span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {language === 'en' ? job.description : job.descriptionKn}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            {t('job.skills', 'Required Skills:', 'ಅಗತ್ಯವಿರುವ ಕೌಶಲ್ಯಗಳು:')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {(language === 'en' ? job.requirements : job.requirementsKn).slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {job.requirements.length > 4 && (
              <span className="text-gray-500 text-xs">
                +{job.requirements.length - 4} {t('job.more', 'more', 'ಇನ್ನಷ್ಟು')}
              </span>
            )}
          </div>
        </div>

        <div className="flex space-x-3">
          <a
            href={job.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
          >
            <span>{t('job.apply', 'Apply Now', 'ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ')}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
          
          <button
            onClick={handleShare}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            title={t('job.share', 'Share Job', 'ಕೆಲಸವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ')}
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;