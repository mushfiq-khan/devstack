import React from 'react';
import logo from '../assets/logo-text.png';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 text-slate-600 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Social Links (Spans 2 columns on medium screens) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
                <img 
                src={logo} 
                alt="DevStack Logo" 
                className="h-8 w-auto object-contain" />
            </div>
            
            <p className="text-sm text-slate-500 max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            
            <div className="flex space-x-4 text-sm font-medium text-slate-700 pt-2">
              <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
              <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;