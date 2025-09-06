import React, { useState, useMemo } from 'react';
import { Briefcase, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockJobs } from '../data/mockData';
import JobCard from './JobCard';
import JobFilters from './JobFilters';

const JobSection: React.FC = () => {
  const { t } = useLanguage();
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    experience: '',
    salary: '',
    category: ''
  });

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      if (filters.location && !job.location.toLowerCase().includes(filters.location)) {
        return false;
      }
      if (filters.jobType && job.type !== filters.jobType) {
        return false;
      }
      if (filters.category && !job.category.toLowerCase().includes(filters.category)) {
        return false;
      }
      // Add more filter logic as needed
      return true;
    });
  }, [filters]);

  const featuredJobs = filteredJobs.filter(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  return (
    <section id="jobs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              {t('jobs.title', 'Latest Job Opportunities', 'ಇತ್ತೀಚಿನ ಕೆಲಸದ ಅವಕಾಶಗಳು')}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('jobs.subtitle', 
              'Discover your next career move with handpicked opportunities from top employers across Karnataka.',
              'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಪ್ರಮುಖ ಉದ್ಯೋಗದಾತರಿಂದ ಆಯ್ಕೆಮಾಡಿದ ಅವಕಾಶಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಮುಂದಿನ ವೃತ್ತಿಜೀವನದ ಹೆಜ್ಜೆಯನ್ನು ಅನ್ವೇಷಿಸಿ.'
            )}
          </p>
        </div>

        <JobFilters onFilterChange={setFilters} />

        {/* Featured Jobs */}
        {featuredJobs.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
              <h3 className="text-2xl font-bold text-gray-900">
                {t('jobs.featured', 'Featured Jobs', 'ವೈಶಿಷ್ಟ್ಯಗೊಳಿಸಿದ ಕೆಲಸಗಳು')}
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Jobs */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {t('jobs.all', 'All Jobs', 'ಎಲ್ಲಾ ಕೆಲಸಗಳು')} ({filteredJobs.length})
            </h3>
          </div>
          
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('jobs.noResults', 'No jobs found', 'ಯಾವುದೇ ಕೆಲಸಗಳು ಕಂಡುಬಂದಿಲ್ಲ')}
              </h3>
              <p className="text-gray-600">
                {t('jobs.tryDifferent', 'Try adjusting your filters to see more results.', 'ಹೆಚ್ಚಿನ ಫಲಿತಾಂಶಗಳನ್ನು ನೋಡಲು ನಿಮ್ಮ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಸರಿಹೊಂದಿಸಲು ಪ್ರಯತ್ನಿಸಿ.')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {regularJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobSection;