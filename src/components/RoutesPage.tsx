import React from 'react';
import { Route, FilterState } from '../types';
import { RouteList } from './RouteList';
import { ArrowLeft, Compass, Filter, RotateCcw, MapPin, Calendar, Clock, Bus, Moon, Sparkles } from 'lucide-react';

interface RoutesPageProps {
  routes: Route[];
  currency: string;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  departCities: string[];
  endCities: string[];
  onResetFilters: () => void;
  onSelectRoute: (route: Route) => void;
  onBackToHome: () => void;
}

export const RoutesPage: React.FC<RoutesPageProps> = ({
  routes,
  currency,
  filters,
  setFilters,
  departCities,
  endCities,
  onResetFilters,
  onSelectRoute,
  onBackToHome
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[75vh]">
      {/* Category Pills Bar on Top of Results */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-8 bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-slate-400 uppercase px-2 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-slate-700" /> Filter:
          </span>
          <button
            onClick={() => setFilters(prev => ({ ...prev, tripType: 'all', length: '' }))}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filters.tripType === 'all' 
                ? 'bg-slate-950 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
            }`}
          >
            All Options
          </button>
          <button
            onClick={() => setFilters(prev => ({ ...prev, tripType: 'day-trips', length: '' }))}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              filters.tripType === 'day-trips' 
                ? 'bg-slate-950 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
            }`}
          >
            <Compass className="w-3.5 h-3.5" /> All Day Trips
          </button>
          <button
            onClick={() => setFilters(prev => ({ ...prev, tripType: 'day-tour', length: '' }))}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              filters.tripType === 'day-tour' 
                ? 'bg-slate-950 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
            }`}
          >
            City Day Tours
          </button>
          <button
            onClick={() => setFilters(prev => ({ ...prev, tripType: 'cross-country-day', length: '' }))}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              filters.tripType === 'cross-country-day' 
                ? 'bg-slate-950 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
            }`}
          >
            <Bus className="w-3.5 h-3.5" /> Cross-Country Day Trips
          </button>
          <button
            onClick={() => setFilters(prev => ({ ...prev, tripType: 'multi-day' }))}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              filters.tripType === 'multi-day' 
                ? 'bg-slate-950 text-white shadow-xs' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
            }`}
          >
            <Moon className="w-3.5 h-3.5" /> Multi-Day Packages
          </button>
        </div>

        {/* Back to Home Action Button */}
        <button
          onClick={onBackToHome}
          className="ml-auto px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Left Sidebar: Filters */}
        <div className="lg:col-span-1 bg-white rounded-xl p-5 shadow-lg border border-slate-200/80 lg:sticky lg:top-28">
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-5">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-700" /> Filter Options
            </h3>
            <button 
              onClick={onResetFilters}
              className="text-xs font-bold text-slate-400 hover:text-rose-600 transition flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          </div>

          <div className="space-y-5">
            {/* Departure City Chips */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-700" /> Origin / From
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, fromCity: '' }))}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                    !filters.fromCity ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  All Origins
                </button>
                <button
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, fromCity: 'Doha' }))}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                    filters.fromCity === 'Doha' ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Doha
                </button>
                <button
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, fromCity: 'Bahrain' }))}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                    filters.fromCity === 'Bahrain' ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Bahrain
                </button>
                <button
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, fromCity: 'Riyadh' }))}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                    filters.fromCity === 'Riyadh' ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Riyadh
                </button>
              </div>
            </div>

            {/* Destination City Chips */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-700" /> Destination / To
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, toCity: '' }))}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer ${
                    !filters.toCity ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  All Destinations
                </button>
                <button
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, toCity: 'Doha' }))}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                    filters.toCity === 'Doha' ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Doha
                </button>
                <button
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, toCity: 'Bahrain' }))}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                    filters.toCity === 'Bahrain' ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Bahrain
                </button>
                <button
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, toCity: 'Riyadh' }))}
                  className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                    filters.toCity === 'Riyadh' ? 'bg-slate-950 text-white shadow-xs' : 'bg-slate-50 text-slate-800 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Riyadh
                </button>
              </div>
            </div>

            {/* Departure Day */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-700" /> Schedule Day
              </label>
              <select 
                value={filters.departDay}
                onChange={(e) => setFilters(prev => ({ ...prev, departDay: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-lg font-medium text-slate-800 focus:outline-none focus:border-slate-950 text-xs cursor-pointer"
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
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-700" /> Duration / Multi-Day Stays
              </label>
              <select 
                value={filters.length}
                onChange={(e) => setFilters(prev => ({ ...prev, length: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-200 p-2.5 rounded-lg font-medium text-slate-800 focus:outline-none focus:border-slate-950 text-xs cursor-pointer"
              >
                <option value="">Any Duration (All Tours)</option>
                <option value="Day Tour (8h)">City Day Tour (8 Hours)</option>
                <option value="Day Trip (9h)">Cross-Country Day Trip (9 Hours)</option>
                <option value="2D/1N">2D/1N (2 Days, 1 Night Package)</option>
                <option value="3D/2N">3D/2N (3 Days, 2 Nights Package)</option>
                <option value="4D/3N">4D/3N (4 Days, 3 Nights Package)</option>
                <option value="5D/4N">5D/4N (5 Days, 4 Nights Package)</option>
                <option value="6D/5N">6D/5N (6 Days, 5 Nights Package)</option>
                <option value="7D/6N">7D/6N (7 Days, 6 Nights Package)</option>
              </select>
            </div>

            <div className="pt-4 border-t border-slate-100 text-center">
              <span className="text-xs font-bold text-slate-800 bg-slate-100 px-4 py-2 rounded-lg block">
                {routes.length} matching itineraries
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Single Column Itineraries list */}
        <div className="lg:col-span-3">
          <div className="w-full">
            <RouteList 
              routes={routes}
              currency={currency}
              onSelectRoute={onSelectRoute}
              onResetFilters={onResetFilters}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
