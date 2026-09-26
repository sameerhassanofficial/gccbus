import React from 'react';
import { Filter, RotateCcw, MapPin, Calendar, Clock, ArrowUpDown, X } from 'lucide-react';
import { FilterState } from '../types';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  departCities: string[];
  endCities: string[];
  onReset: () => void;
  totalResults: number;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  filters,
  setFilters,
  departCities,
  endCities,
  onReset,
  totalResults
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-sky-50 text-sky-600 p-2 rounded-xl">
              <Filter className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Filter & Sort Itineraries</h3>
              <p className="text-xs text-slate-500 font-medium">{totalResults} routes match current criteria</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-slate-100 hover:bg-slate-200 text-slate-600 w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Departure City */}
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl hover:border-sky-500 transition">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sky-600" /> From City
            </label>
            <select 
              value={filters.fromCity}
              onChange={(e) => setFilters(prev => ({ ...prev, fromCity: e.target.value }))}
              className="w-full bg-transparent font-medium text-slate-800 focus:outline-none cursor-pointer text-sm"
            >
              <option value="">Any Departure City</option>
              {departCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Destination City */}
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl hover:border-sky-500 transition">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sky-600" /> To City
            </label>
            <select 
              value={filters.toCity}
              onChange={(e) => setFilters(prev => ({ ...prev, toCity: e.target.value }))}
              className="w-full bg-transparent font-medium text-slate-800 focus:outline-none cursor-pointer text-sm"
            >
              <option value="">Any Destination</option>
              {endCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Departure Day */}
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl hover:border-sky-500 transition">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-sky-600" /> Departure Day
            </label>
            <select 
              value={filters.departDay}
              onChange={(e) => setFilters(prev => ({ ...prev, departDay: e.target.value }))}
              className="w-full bg-transparent font-medium text-slate-800 focus:outline-none cursor-pointer text-sm"
            >
              <option value="">Any Day of Week</option>
              <option value="Sat">Saturday</option>
              <option value="Sun">Sunday</option>
              <option value="Mon">Monday</option>
              <option value="Tue">Tuesday</option>
              <option value="Wed">Wednesday</option>
              <option value="Thu">Thursday</option>
              <option value="Fri">Friday</option>
            </select>
          </div>

          {/* Trip Duration */}
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl hover:border-sky-500 transition">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-sky-600" /> Trip Duration
            </label>
            <select 
              value={filters.length}
              onChange={(e) => setFilters(prev => ({ ...prev, length: e.target.value }))}
              className="w-full bg-transparent font-medium text-slate-800 focus:outline-none cursor-pointer text-sm"
            >
              <option value="">Any Length</option>
              <option value="1 Night">1 Night</option>
              <option value="2 Nights">2 Nights</option>
              <option value="3 Nights">3 Nights</option>
              <option value="4 Nights">4 Nights</option>
              <option value="5 Nights">5 Nights</option>
              <option value="6 Nights">6 Nights</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl hover:border-sky-500 transition">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-sky-600" /> Sort By
            </label>
            <select 
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
              className="w-full bg-transparent font-medium text-slate-800 focus:outline-none cursor-pointer text-sm"
            >
              <option value="code">Route Code (Asc)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="duration">Duration</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
          <button 
            onClick={onReset}
            className="text-xs font-semibold text-slate-500 hover:text-sky-600 transition flex items-center gap-1.5 px-4 py-2 bg-slate-100 rounded-xl"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
          </button>
          <button 
            onClick={onClose}
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-md transition"
          >
            Apply Filters ({totalResults})
          </button>
        </div>
      </div>
    </div>
  );
};
