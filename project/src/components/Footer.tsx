import React from 'react';
import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { name: t('footer.about', 'About Us', 'ನಮ್ಮ ಬಗ್ಗೆ'), href: '#about' },
      { name: t('footer.contact', 'Contact', 'ಸಂಪರ್ಕ'), href: '#contact' },
      { name: t('footer.careers', 'Careers', 'ವೃತ್ತಿಜೀವನ'), href: '#careers' },
      { name: t('footer.blog', 'Blog', 'ಬ್ಲಾಗ್'), href: '#blog' }
    ],
    jobSeekers: [
      { name: t('footer.browseJobs', 'Browse Jobs', 'ಕೆಲಸಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ'), href: '#jobs' },
      { name: t('footer.resources', 'Career Resources', 'ವೃತ್ತಿಜೀವನ ಸಂಪನ್ಮೂಲಗಳು'), href: '#resources' },
      { name: t('footer.resumeBuilder', 'Resume Builder', 'ರೆಸ್ಯೂಮ್ ಬಿಲ್ಡರ್'), href: '#resume' },
      { name: t('footer.interviewTips', 'Interview Tips', 'ಸಂದರ್ಶನ ಸಲಹೆಗಳು'), href: '#tips' }
    ],
    employers: [
      { name: t('footer.postJob', 'Post a Job', 'ಕೆಲಸ ಪೋಸ್ಟ್ ಮಾಡಿ'), href: '#post-job' },
      { name: t('footer.pricing', 'Pricing', 'ಬೆಲೆ'), href: '#pricing' },
      { name: t('footer.solutions', 'HR Solutions', 'ಎಚ್‌ಆರ್ ಪರಿಹಾರಗಳು'), href: '#solutions' },
      { name: t('footer.support', 'Support', 'ಬೆಂಬಲ'), href: '#support' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  {t('siteName', 'Local Job Radar', 'ಲೋಕಲ್ ಜಾಬ್ ರಾಡಾರ್')}
                </h3>
                <p className="text-gray-400 text-sm">
                  {t('tagline', 'Find Your Dream Job', 'ನಿಮ್ಮ ಕನಸಿನ ಕೆಲಸವನ್ನು ಹುಡುಕಿ')}
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description', 
                'Connecting talented professionals with amazing opportunities across Karnataka. Your career journey starts here.',
                'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಪ್ರತಿಭಾವಂತ ವೃತ್ತಿಪರರನ್ನು ಅದ್ಭುತ ಅವಕಾಶಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವುದು. ನಿಮ್ಮ ವೃತ್ತಿಜೀವನದ ಪ್ರಯಾಣ ಇಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.'
              )}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">contact@localjobradar.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+91 80 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">Bangalore, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('footer.company', 'Company', 'ಕಂಪನಿ')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Seekers Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('footer.jobSeekers', 'Job Seekers', 'ಕೆಲಸ ಹುಡುಕುವವರು')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.jobSeekers.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Employers Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('footer.employers', 'Employers', 'ಉದ್ಯೋಗದಾತರು')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.employers.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.privacy', 'Privacy Policy', 'ಗೌಪ್ಯತೆ ನೀತಿ')}
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.terms', 'Terms of Service', 'ಸೇವೆಯ ನಿಯಮಗಳು')}
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  {t('footer.cookies', 'Cookie Policy', 'ಕುಕೀ ನೀತಿ')}
                </a>
              </div>
              <p className="text-sm text-gray-400">
                © 2024 Local Job Radar. {t('footer.rights', 'All rights reserved.', 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;