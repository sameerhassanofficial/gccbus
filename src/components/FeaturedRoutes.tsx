import React from 'react';
import { Route } from '../types';
import { ROUTES_DATA } from '../data/routesData';
import { Clock, MapPin, Building, ArrowRight, ShieldCheck, Star } from 'lucide-react';

interface FeaturedRoutesProps {
  onSelectRoute: (route: Route) => void;
  onViewAll: () => void;
  currency: string;
}

export const FeaturedRoutes: React.FC<FeaturedRoutesProps> = ({ onSelectRoute, onViewAll, currency }) => {
  const featured = ROUTES_DATA.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate-100/70 rounded-3xl my-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Top Recommended</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Featured Cross-Border Itineraries</h2>
          <p className="text-slate-500 text-sm mt-2">Handpicked favorite routes connecting capitals with luxury hotel stays.</p>
        </div>
        <button 
          onClick={onViewAll}
          className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-600 hover:text-sky-700 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200 transition group cursor-pointer"
        >
          <span>View All 120+ Routes</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map(route => {
          const isDayTrip = route.category === 'day-trip' || route.category === 'day-tour' || route.category === 'cross-country-day';
          
          return (
            <div 
              key={route.code}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-sky-50 text-sky-700 font-extrabold text-xs px-3 py-1.5 rounded-xl border border-sky-100">
                    {route.code}
                  </span>
                  <div className="flex items-center text-amber-500 text-xs font-bold gap-1 bg-amber-50 px-2.5 py-1 rounded-xl">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>4.9 (Verified)</span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2 group-hover:text-sky-600 transition">
                  {route.name}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-medium">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{route.departCity} → {route.endCity}</span>
                </div>

                <div className="space-y-2 mb-6 py-3 border-y border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> Duration / Length:
                    </span>
                    <span className="font-bold text-slate-800">{route.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Building className="w-3.5 h-3.5 text-slate-400" /> Accommodation:
                    </span>
                    <span className="font-bold text-slate-800 truncate max-w-[160px]">{route.night1 ? 'Hotel Included' : 'Day Excursion'}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Starting From</span>
                  <span className="text-xl font-black text-slate-900">{route.price}</span>
                </div>
                <button 
                  onClick={() => onSelectRoute(route)}
                  className="bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs px-4 py-3 rounded-2xl shadow transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
