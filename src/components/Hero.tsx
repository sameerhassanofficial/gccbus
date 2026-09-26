import React from 'react';
import { Route as RouteIcon, ArrowRight, MapPin } from 'lucide-react';
import heroImage from '../assets/images/gcc_luxury_coach_skyline_1790169789295.jpg';
import { FilterState } from '../types';

interface HeroProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  departCities: string[];
  endCities: string[];
  onReset: () => void;
  totalResults: number;
  onSearchSubmit: () => void;
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Trips' },
  { id: 'day-tour', label: 'Day Tours' },
  { id: 'cross-country-day', label: 'Cross-Country Day' },
  { id: 'multi-day', label: 'Multi-Day Packages' }
];

export const Hero: React.FC<HeroProps> = ({
  filters,
  setFilters,
  onSearchSubmit
}) => {
  const cities = [
    { value: '', label: 'All' },
    { value: 'Doha', label: 'Doha' },
    { value: 'Bahrain', label: 'Bahrain' },
    { value: 'Riyadh', label: 'Riyadh' }
  ];

  return (
    <section className="relative w-full bg-slate-100/70 py-4 sm:py-8 md:py-10 px-3 sm:px-6 lg:px-8">
      {/* Framed Editorial Hero Showcase Card */}
      <div className="max-w-[1360px] mx-auto relative rounded-[28px] sm:rounded-[36px] md:rounded-[40px] overflow-hidden shadow-2xl border border-slate-800/20 bg-slate-950 text-white min-h-[580px] lg:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 md:p-14">
        
        {/* Cinematic Backdrop Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="The GCC Bus - Luxury Overland Travel" 
            className="w-full h-full object-cover object-center filter brightness-95 scale-[1.02] transform transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Gradients ensuring high WCAG contrast on left text and base */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/30 md:from-slate-950/90 md:via-slate-950/60 md:to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
        </div>

        {/* Top Floating Row Inside Card */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 w-full">
          {/* Scheduled Intercity Service Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900/70 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full shadow-md">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-200">
              SCHEDULED INTERCITY SERVICE
            </span>
          </div>

          {/* Route Markings */}
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C5A880]/90 uppercase drop-shadow-sm">
            DOHA • MANAMA • RIYADH
          </div>
        </div>

        {/* Main Center-Left Typography */}
        <div className="relative z-10 max-w-2xl my-auto py-6 sm:py-8">
          <div className="inline-block text-[#C5A880] font-black text-xs sm:text-sm tracking-widest uppercase mb-3 drop-shadow-sm">
            INTERCITY FIRST CLASS
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.08] mb-4 text-balance drop-shadow-md">
            The Sovereign Way <br className="hidden sm:inline" />
            Across the Gulf.
          </h1>

          <p className="text-sm sm:text-base text-slate-200/95 max-w-xl font-normal leading-relaxed mb-6 drop-shadow-sm">
            Effortless overland journeys connecting Qatar, Saudi Arabia, and Bahrain in executive luxury recliners with seamless border transit.
          </p>
        </div>

        {/* Bottom Unified Card: Category Tabs linked directly to Search Parameters */}
        <div className="relative z-20 w-full max-w-3xl">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col">
            
            {/* Category Pills directly linked at the top with NO spacing and clean rounded border-radius */}
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-1.5 overflow-x-auto scrollbar-none select-none">
              {CATEGORY_TABS.map((tab) => {
                const isActive = filters.tripType === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setFilters(prev => ({ ...prev, tripType: tab.id }))}
                    className={`px-4 py-2 rounded-lg text-xs font-bold tracking-tight whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-slate-950 text-white shadow-sm' 
                        : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Custom Interactive Click UI for Origin & Destination (No Dropdowns!) */}
            <div className="p-4 flex flex-col md:flex-row items-stretch md:items-center gap-5">
              
              {/* Segment 1: SELECT ORIGIN with Tactile Button Pill Group */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                    SELECT ORIGIN
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cities.map((city) => {
                    const isSelected = filters.fromCity === city.value;
                    return (
                      <button
                        key={`origin-${city.value}`}
                        onClick={() => setFilters(prev => ({ ...prev, fromCity: city.value }))}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                          isSelected 
                            ? 'bg-amber-100 text-amber-950 border-amber-300 shadow-sm font-extrabold' 
                            : 'bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100'
                        }`}
                      >
                        {city.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-12 bg-slate-200"></div>

              {/* Segment 2: SELECT DESTINATION with Tactile Button Pill Group */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                    SELECT DESTINATION
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cities.map((city) => {
                    const isSelected = filters.toCity === city.value;
                    return (
                      <button
                        key={`dest-${city.value}`}
                        onClick={() => setFilters(prev => ({ ...prev, toCity: city.value }))}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                          isSelected 
                            ? 'bg-amber-100 text-amber-950 border-amber-300 shadow-sm font-extrabold' 
                            : 'bg-slate-50 text-slate-600 border-slate-200/60 hover:bg-slate-100'
                        }`}
                      >
                        {city.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={onSearchSubmit}
                className="bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-7 py-4 rounded-xl md:rounded-full transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg active:scale-95 group shrink-0 md:self-end mt-2 md:mt-0 cursor-pointer font-sans"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
