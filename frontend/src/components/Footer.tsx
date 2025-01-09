import React from 'react';
import { Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Carbon Grove</h3>
            <p className="text-gray-600">Making the world greener, one tree at a time.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Impact Report
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  onClick={(e) => e.preventDefault()}
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn' },
                { icon: <Facebook size={20} />, label: 'Facebook' },
                { icon: <Mail size={20} />, label: 'Email' }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                  onClick={(e) => e.preventDefault()}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} Carbon Grove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;