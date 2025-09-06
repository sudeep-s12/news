import React, { useState } from 'react';
import { Filter, MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface JobFiltersProps {
  onFilterChange: (filters: any) => void;
}

const JobFilters: React.FC<JobFiltersProps> = ({ onFilterChange }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    experience: '',
    salary: '',
    category: ''
  });

  const locations = [
    'Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Shimoga'
  ];

  const jobTypes = [
    { value: 'full-time', label: 'Full Time', labelKn: 'ಪೂರ್ಣ ಸಮಯ' },
    { value: 'part-time', label: 'Part Time', labelKn: 'ಅರ್ಧ ಸಮಯ' },
    { value: 'contract', label: 'Contract', labelKn: 'ಒಪ್ಪಂದ' },
    { value: 'internship', label: 'Internship', labelKn: 'ಇಂಟರ್ನ್‌ಶಿಪ್' }
  ];

  const experienceLevels = [
    { value: '0-1', label: '0-1 years', labelKn: '೦-೧ ವರ್ಷಗಳು' },
    { value: '1-3', label: '1-3 years', labelKn: '೧-೩ ವರ್ಷಗಳು' },
    { value: '3-5', label: '3-5 years', labelKn: '೩-೫ ವರ್ಷಗಳು' },
    { value: '5+', label: '5+ years', labelKn: '೫+ ವರ್ಷಗಳು' }
  ];

  const salaryRanges = [
    { value: '0-3', label: '₹0-3 LPA', labelKn: '₹೦-೩ ಲಕ್ಷ' },
    { value: '3-6', label: '₹3-6 LPA', labelKn: '₹೩-೬ ಲಕ್ಷ' },
    { value: '6-10', label: '₹6-10 LPA', labelKn: '₹೬-೧೦ ಲಕ್ಷ' },
    { value: '10+', label: '₹10+ LPA', labelKn: '₹೧೦+ ಲಕ್ಷ' }
  ];

  const categories = [
    { value: 'technology', label: 'Technology', labelKn: 'ತಂತ್ರಜ್ಞಾನ' },
    { value: 'marketing', label: 'Marketing', labelKn: 'ಮಾರ್ಕೆಟಿಂಗ್' },
    { value: 'sales', label: 'Sales', labelKn: 'ಮಾರಾಟ' },
    { value: 'design', label: 'Design', labelKn: 'ವಿನ್ಯಾಸ' },
    { value: 'customer-service', label: 'Customer Service', labelKn: 'ಗ್ರಾಹಕ ಸೇವೆ' },
    { value: 'data-science', label: 'Data Science', labelKn: 'ಡೇಟಾ ಸೈನ್ಸ್' }
  ];

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      location: '',
      jobType: '',
      experience: '',
      salary: '',
      category: ''
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 mb-8">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              {t('filters.title', 'Filter Jobs', 'ಕೆಲಸಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ')}
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {t('filters.clear', 'Clear All', 'ಎಲ್ಲವನ್ನೂ ತೆರವುಗೊಳಿಸಿ')}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
            >
              {isOpen ? t('filters.hide', 'Hide', 'ಮರೆಮಾಡಿ') : t('filters.show', 'Show', 'ತೋರಿಸಿ')}
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-5 gap-4 ${isOpen ? 'block' : 'hidden md:grid'}`}>
          {/* Location Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="h-4 w-4 inline mr-1" />
              {t('filters.location', 'Location', 'ಸ್ಥಳ')}
            </label>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">{t('filters.allLocations', 'All Locations', 'ಎಲ್ಲಾ ಸ್ಥಳಗಳು')}</option>
              {locations.map((location) => (
                <option key={location} value={location.toLowerCase()}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Job Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="h-4 w-4 inline mr-1" />
              {t('filters.jobType', 'Job Type', 'ಕೆಲಸದ ಪ್ರಕಾರ')}
            </label>
            <select
              value={filters.jobType}
              onChange={(e) => handleFilterChange('jobType', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">{t('filters.allTypes', 'All Types', 'ಎಲ್ಲಾ ಪ್ರಕಾರಗಳು')}</option>
              {jobTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {t(`jobType.${type.value}`, type.label, type.labelKn)}
                </option>
              ))}
            </select>
          </div>

          {/* Experience Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="h-4 w-4 inline mr-1" />
              {t('filters.experience', 'Experience', 'ಅನುಭವ')}
            </label>
            <select
              value={filters.experience}
              onChange={(e) => handleFilterChange('experience', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">{t('filters.allExperience', 'All Experience', 'ಎಲ್ಲಾ ಅನುಭವ')}</option>
              {experienceLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {t(`experience.${level.value}`, level.label, level.labelKn)}
                </option>
              ))}
            </select>
          </div>

          {/* Salary Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="h-4 w-4 inline mr-1" />
              {t('filters.salary', 'Salary', 'ಸಂಬಳ')}
            </label>
            <select
              value={filters.salary}
              onChange={(e) => handleFilterChange('salary', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">{t('filters.allSalaries', 'All Salaries', 'ಎಲ್ಲಾ ಸಂಬಳಗಳು')}</option>
              {salaryRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {t(`salary.${range.value}`, range.label, range.labelKn)}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Filter className="h-4 w-4 inline mr-1" />
              {t('filters.category', 'Category', 'ವರ್ಗ')}
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="">{t('filters.allCategories', 'All Categories', 'ಎಲ್ಲಾ ವರ್ಗಗಳು')}</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {t(`category.${category.value}`, category.label, category.labelKn)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;