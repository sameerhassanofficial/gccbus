import React from 'react';
import { Armchair, Snowflake, Briefcase, Sparkles, Navigation } from 'lucide-react';
import luxuryCabinImage from '../assets/images/luxury_bus_coach_1789557325875.jpg';
import luxuryCoachImage from '../assets/images/gcc_luxury_coach_skyline_1790169789295.jpg';

export const ExecutiveFleetExperience: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#C5A880] mb-3">
            UNCOMPROMISING SOVEREIGN COMFORT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            The Executive Fleet Experience
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Engineered specifically for prolonged regional travel across the Gulf. Meticulously maintained coaches featuring custom leather interiors and advanced climate control.
          </p>
        </div>

        {/* Fleet Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Huge Cabin Interior Showcase (Col Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-end relative rounded-3xl overflow-hidden shadow-2xl group min-h-[380px] sm:min-h-[480px]">
            {/* Image Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={luxuryCabinImage} 
                alt="Luxury Coach Cabin Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>

            {/* Bottom Content Over Image */}
            <div className="relative z-10 p-6 sm:p-10 text-white space-y-2 mt-auto">
              <span className="inline-flex items-center gap-1.5 bg-amber-500/90 text-black text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                <Sparkles className="w-3 h-3 text-black" />
                CABIN INTERIOR
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white">
                Diamond-Quilted Saddle-Tan Recliners
              </h3>
              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-xl font-medium">
                High-contour ergonomic executive seating, generous legroom, and individual AC airflow.
              </p>
            </div>
          </div>

          {/* Right Column: Coach Exterior + 2x2 Feature Grid (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8">
            
            {/* Top Exterior Coach Banner */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group h-48 sm:h-56 shrink-0">
              <img 
                src={luxuryCoachImage} 
                alt="Sovereign VIP Fleet Coach Exterior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Top-right badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-slate-950/80 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm">
                  Sovereign VIP Fleet
                </span>
              </div>
            </div>

            {/* Bottom 2x2 Modern Grid of Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Seating */}
              <div className="bg-slate-50/70 border border-slate-100 p-5 rounded-2xl flex flex-col justify-center transition-all duration-300 hover:shadow-md hover:border-slate-200/60 hover:bg-white group">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#C5A880] flex items-center justify-center mb-3 group-hover:bg-[#C5A880] group-hover:text-white transition-all duration-300">
                  <Armchair className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Diamond Seating
                </h4>
                <p className="text-xs text-slate-500 font-semibold">
                  Deep recline & footrests
                </p>
              </div>

              {/* Climate AC */}
              <div className="bg-slate-50/70 border border-slate-100 p-5 rounded-2xl flex flex-col justify-center transition-all duration-300 hover:shadow-md hover:border-slate-200/60 hover:bg-white group">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-3 group-hover:bg-[#C5A880] group-hover:text-white transition-all duration-300">
                  <Snowflake className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Dual Climate AC
                </h4>
                <p className="text-xs text-slate-500 font-semibold">
                  Engineered for Gulf heat
                </p>
              </div>

              {/* Baggage Holds */}
              <div className="bg-slate-50/70 border border-slate-100 p-5 rounded-2xl flex flex-col justify-center transition-all duration-300 hover:shadow-md hover:border-slate-200/60 hover:bg-white group">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-3 group-hover:bg-[#C5A880] group-hover:text-white transition-all duration-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Baggage Holds
                </h4>
                <p className="text-xs text-slate-500 font-semibold">
                  2 large bags per traveler
                </p>
              </div>

              {/* Restroom */}
              <div className="bg-slate-50/70 border border-slate-100 p-5 rounded-2xl flex flex-col justify-center transition-all duration-300 hover:shadow-md hover:border-slate-200/60 hover:bg-white group">
                <div className="w-10 h-10 rounded-xl bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-3 group-hover:bg-[#C5A880] group-hover:text-white transition-all duration-300">
                  <Navigation className="w-5 h-5 rotate-45" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Clean Restroom
                </h4>
                <p className="text-xs text-slate-500 font-semibold">
                  Onboard convenience
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
