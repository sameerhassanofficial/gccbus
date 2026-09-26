import React from 'react';
import { Route } from '../types';
import { RouteCard } from './RouteCard';
import { Frown, RotateCcw } from 'lucide-react';

interface RouteListProps {
  routes: Route[];
  currency: string;
  onSelectRoute: (route: Route) => void;
  onResetFilters: () => void;
}

export const RouteList: React.FC<RouteListProps> = ({
  routes,
  currency,
  onSelectRoute,
  onResetFilters
}) => {
  return (
    <section id="routes" className="w-full max-w-[900px]" style={{ width: '100%', maxWidth: '900px', padding: '0px' }}>
      {routes.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 shadow-xs mt-4">
          <div className="bg-amber-50 text-[#C5A880] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
            <Frown className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-1.5">No Matching Routes Found</h3>
          <p className="text-slate-500 text-xs max-w-md mx-auto mb-5">
            Try adjusting your filters, selecting a different departure city or choosing a broader trip duration.
          </p>
          <button 
            onClick={onResetFilters}
            className="bg-slate-900 hover:bg-[#C5A880] text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition shadow-md flex items-center gap-2 mx-auto cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {routes.map((route) => (
            <RouteCard 
              key={route.code} 
              route={route} 
              currency={currency} 
              onSelectRoute={onSelectRoute} 
            />
          ))}
        </div>
      )}
    </section>
  );
};
