import React from 'react';
import { Armchair, Wifi, Coffee, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

export const FleetSection: React.FC = () => {
  return (
    <section id="fleet" className="bg-slate-900 text-white py-24 relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Why Travel With The GCC Bus</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mt-2 mb-4">Unmatched Comfort on Every Route</h2>
          <p className="text-slate-400 text-sm sm:text-base">
            We combine reliable cross-border motorcoach transportation with pre-booked premium hotel accommodations across Doha, Bahrain, and Riyadh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-800/60 border border-slate-700/60 p-8 rounded-3xl backdrop-blur-sm">
            <div className="bg-[#C5A880]/10 text-[#C5A880] w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold mb-6 border border-[#C5A880]/20">
              <Armchair className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Executive Coaches</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Spacious reclining seating with ergonomic leg rests, climate control, high-speed Wi-Fi, and generous luggage capacity for smooth highway transits.
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 p-8 rounded-3xl backdrop-blur-sm">
            <div className="bg-[#C5A880]/10 text-[#C5A880] w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold mb-6 border border-[#C5A880]/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Partner Hotels Included</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enjoy restful nights at top-tier partner establishments like Holiday Villa Doha, Wyndham Garden Manama, and Baraira Al Wezarat Riyadh.
            </p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700/60 p-8 rounded-3xl backdrop-blur-sm">
            <div className="bg-[#C5A880]/10 text-[#C5A880] w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-bold mb-6 border border-[#C5A880]/20">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Streamlined Border Crossings</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expert coordinators assist with border formalities between Qatar, Bahrain, and Saudi Arabia for a hassle-free transnational trip.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
