import React from 'react';
import luxuryBusImage from '../assets/images/luxury_bus_coach_1789557325875.jpg';
import dohaImage from '../assets/images/doha_skyline_1789557348461.jpg';
import riyadhImage from '../assets/images/riyadh_skyline_1789557367050.jpg';
import { ArrowRight, Sparkles } from 'lucide-react';

interface DestinationsGalleryProps {
  onSelectCity: (city: string) => void;
}

export const DestinationsGallery: React.FC<DestinationsGalleryProps> = ({ onSelectCity }) => {
  const destinations = [
    {
      name: "Doha",
      country: "Qatar",
      image: dohaImage,
      description: "Holiday Villa Doha partner stays & express luxury transit routes connecting to Riyadh and Bahrain.",
      cityKey: "Doha"
    },
    {
      name: "Riyadh",
      country: "Saudi Arabia",
      image: riyadhImage,
      description: "Baraira Al Wezarat hotel premium stays & direct high-frequency connections across the Kingdom.",
      cityKey: "Riyadh"
    },
    {
      name: "Bahrain (Manama)",
      country: "Kingdom of Bahrain",
      image: luxuryBusImage,
      description: "Wyndham Garden Manama hotel partner luxury stays & King Fahd Causeway express VIP transits.",
      cityKey: "Bahrain"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50/50">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C5A880] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            EXPLORE CAPITALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured GCC Destinations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl font-medium">
            Connect seamlessly between world-class destinations with our daily scheduled premium express coaches.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div 
              key={dest.name}
              onClick={() => onSelectCity(dest.cityKey)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/40 hover:shadow-2xl hover:shadow-slate-200/50 hover:border-slate-200/70 transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1.5"
            >
              {/* Image Area - Bright, Vibrant, with hover zoom */}
              <div className="relative h-64 overflow-hidden shrink-0">
                <img 
                  src={dest.image} 
                  alt={`${dest.name} Skyline`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {/* Clean, minimalist country badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-950/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-white/10">
                    {dest.country}
                  </span>
                </div>
              </div>

              {/* Text Area - High Contrast, Super Clean, White Background */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2.5 group-hover:text-[#C5A880] transition-colors duration-200">
                    {dest.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A880] group-hover:text-[#C5A880]/80 transition-colors">
                    Explore {dest.cityKey} Routes
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#C5A880] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
