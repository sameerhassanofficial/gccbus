import React from 'react';
import { 
  MapPin, 
  Search, 
  RotateCcw, 
  ArrowRightLeft, 
  Sparkles, 
  Compass, 
  Bus, 
  Moon 
} from 'lucide-react';
import { FilterState } from '../types';

interface RouteSearchFilterProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  departCities: string[];
  endCities: string[];
  onReset: () => void;
  totalResults: number;
  onSearchSubmit: () => void;
  isOverlay?: boolean;
}

const CITIES = [
  { name: 'Doha', country: 'Qatar' },
  { name: 'Bahrain', country: 'Bahrain' },
  { name: 'Riyadh', country: 'Saudi Arabia' }
];

export const RouteSearchFilter: React.FC<RouteSearchFilterProps> = ({
  filters,
  setFilters,
  onReset,
  totalResults,
  onSearchSubmit,
  isOverlay = true
}) => {
  const handleSwapCities = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFilters(prev => ({
      ...prev,
      fromCity: prev.toCity,
      toCity: prev.fromCity
    }));
  };

  const hasActiveFilters = 
    filters.tripType !== 'all' || 
    Boolean(filters.fromCity) || 
    Boolean(filters.toCity) || 
    Boolean(filters.departDay) || 
    Boolean(filters.length) ||
    Boolean(filters.searchQuery);

  return (
    <div className={`max-w-5xl mx-auto px-4 sm:px-6 relative z-25 mb-8 ${isOverlay ? 'mt-4 sm:mt-6' : 'mt-2'}`}>
      {/* Outer Card: 16px radius (rounded-2xl), 16px-20px padding */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200/90">
        
        {/* Top Category Tabs - Active state strictly Black */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 pb-3 border-b border-slate-100">
          {/* Tabs Container: 12px radius, 4px padding */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-100/90 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setFilters(prev => ({ ...prev, tripType: 'all', length: '' }))}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filters.tripType === 'all'
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              All Trips
            </button>
            <button
              type="button"
              onClick={() => setFilters(prev => ({ ...prev, tripType: 'day-tour', length: '' }))}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filters.tripType === 'day-tour'
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              Day Tours
            </button>
            <button
              type="button"
              onClick={() => setFilters(prev => ({ ...prev, tripType: 'cross-country-day', length: '' }))}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filters.tripType === 'cross-country-day'
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              Cross-Country Day
            </button>
            <button
              type="button"
              onClick={() => setFilters(prev => ({ ...prev, tripType: 'multi-day' }))}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filters.tripType === 'multi-day'
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              Multi-Day Packages
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onReset}
                className="text-xs font-bold text-slate-500 hover:text-rose-600 transition flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            )}
            <span className="text-xs font-extrabold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg">
              {totalResults} {totalResults === 1 ? 'Route' : 'Routes'}
            </span>
          </div>
        </div>

        {/* Concise Country Button Selectors with mathematical nested radius (Inner = Outer - Padding) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          
          {/* Origin Section: 12px outer radius (rounded-xl), 8px padding (p-2), children 8px radius (rounded-lg) */}
          <div className="md:col-span-5 bg-slate-50 border border-slate-200/80 rounded-xl p-2">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-700" /> Origin / From
            </span>
            <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
              <button
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, fromCity: '' }))}
                className={`py-2 rounded-lg transition-all text-center cursor-pointer ${
                  !filters.fromCity 
                    ? 'bg-slate-950 text-white shadow-xs' 
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                All
              </button>
              {CITIES.map(c => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, fromCity: prev.fromCity === c.name ? '' : c.name }))}
                  className={`py-2 px-1 rounded-lg transition-all flex items-center justify-center cursor-pointer truncate ${
                    filters.fromCity === c.name
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="truncate">{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Swap Button */}
          <div className="hidden md:flex md:col-span-1 justify-center">
            <button
              type="button"
              onClick={handleSwapCities}
              disabled={!filters.fromCity && !filters.toCity}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2.5 rounded-lg border border-slate-200 transition disabled:opacity-30 cursor-pointer"
              title="Swap From and To"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Destination Section: 12px outer radius, 8px padding, children 8px radius */}
          <div className="md:col-span-4 bg-slate-50 border border-slate-200/80 rounded-xl p-2">
            <span className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-700" /> Destination / To
            </span>
            <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
              <button
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, toCity: '' }))}
                className={`py-2 rounded-lg transition-all text-center cursor-pointer ${
                  !filters.toCity 
                    ? 'bg-slate-950 text-white shadow-xs' 
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                All
              </button>
              {CITIES.map(c => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, toCity: prev.toCity === c.name ? '' : c.name }))}
                  className={`py-2 px-1 rounded-lg transition-all flex items-center justify-center cursor-pointer truncate ${
                    filters.toCity === c.name
                      ? 'bg-slate-950 text-white shadow-xs'
                      : 'bg-white text-slate-800 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className="truncate">{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search Button (Opens dedicated Explorer Page) */}
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={onSearchSubmit}
              className="w-full h-[54px] bg-slate-950 hover:bg-slate-800 active:scale-98 text-white font-extrabold px-3 rounded-xl shadow-md transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </div>
              <span className="text-[10px] text-slate-300 font-semibold">({totalResults} routes)</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
