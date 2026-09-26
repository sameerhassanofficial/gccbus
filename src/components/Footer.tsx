import React from 'react';
import { Bus, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white py-16 border-t border-slate-900">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img 
              src="https://gccbus.com/wp-content/uploads/2026/06/cropped-image-1.webp" 
              alt="The GCC Bus Logo" 
              className="h-10 sm:h-12 w-auto object-contain filter brightness-200"
            />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            The premier gateway for scheduled highway bus travel and multi-city itineraries across Qatar, Saudi Arabia, and Bahrain.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">Destinations</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><a href="#routes" className="hover:text-white transition">Doha, Qatar</a></li>
            <li><a href="#routes" className="hover:text-white transition">Manama, Bahrain</a></li>
            <li><a href="#routes" className="hover:text-white transition">Riyadh, Saudi Arabia</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><a href="#routes" className="hover:text-white transition">Route Schedules</a></li>
            <li><a href="#fleet" className="hover:text-white transition">Fleet Comfort</a></li>
            <li><a href="#faq" className="hover:text-white transition">Travel FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-4">Stay Updated</h4>
          <p className="text-xs text-slate-400 mb-4">Subscribe to receive schedule updates and special travel promotions.</p>
          <div className="flex items-center space-x-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C5A880] w-full"
            />
            <button 
              onClick={() => alert('Thank you for subscribing to The GCC Bus updates!')}
              className="bg-[#C5A880] hover:bg-[#b0936b] text-slate-950 px-4 py-2.5 rounded-xl font-bold text-sm transition shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 mt-12 border-t border-slate-900 text-center text-xs text-slate-500">
        &copy; 2026 The GCC Bus By Experience Tours. All rights reserved. Route data supplied from verified GCC multi-city itineraries.
      </div>
    </footer>
  );
};
