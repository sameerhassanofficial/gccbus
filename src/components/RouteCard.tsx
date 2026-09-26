import React from 'react';
import { Route } from '../types';
import { Ticket, Moon, Hotel, Calendar, Bus, ArrowRight, Sparkles, Clock, MapPin, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import dohaImage from '../assets/images/doha_skyline_1789557348461.jpg';
import riyadhImage from '../assets/images/riyadh_skyline_1789557367050.jpg';
import luxuryBusImage from '../assets/images/luxury_bus_coach_1789557325875.jpg';

interface RouteCardProps {
  route: Route;
  currency: string;
  onSelectRoute: (route: Route) => void;
}

export const RouteCard: React.FC<RouteCardProps> = ({ route, currency, onSelectRoute }) => {
  // Convert price based on currency multiplier
  let displayPrice = route.price;
  if (currency === 'SAR') {
    const num = parseInt(route.price.replace('$', ''));
    displayPrice = `${Math.round(num * 3.75)} SAR`;
  } else if (currency === 'QAR') {
    const num = parseInt(route.price.replace('$', ''));
    displayPrice = `${Math.round(num * 3.64)} QAR`;
  } else if (currency === 'BHD') {
    const num = parseInt(route.price.replace('$', ''));
    displayPrice = `${Math.round(num * 0.38)} BHD`;
  }

  const isDayTour = route.category === 'day-tour';
  const isCrossCountryDay = route.category === 'cross-country-day';
  const isDayTrip = isDayTour || isCrossCountryDay;

  const getImageForRoute = () => {
    if (route.departCity === 'Doha' || route.endCity === 'Doha') return dohaImage;
    if (route.departCity === 'Riyadh' || route.endCity === 'Riyadh') return riyadhImage;
    return luxuryBusImage;
  };

  return (
    <div 
      className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 group flex flex-col md:flex-row overflow-hidden relative z-10"
    >
      {/* Left Side Image Banner */}
      <div className="w-full md:w-64 shrink-0 relative min-h-[220px] md:min-h-full bg-slate-950 flex flex-col justify-end p-5 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 group-hover:scale-105 transition duration-700">
          <img src={getImageForRoute()} alt={route.title || route.code} className="w-full h-full object-cover opacity-65" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>
        <div className="relative z-10">
          <span className="bg-[#C5A880] text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider mb-2 inline-block shadow-xs">
            {route.code}
          </span>
          <h4 className="text-lg font-black tracking-tight text-white mb-0.5 line-clamp-1">{route.departCity} → {route.endCity}</h4>
          <p className="text-[11px] text-slate-300 line-clamp-1 font-medium">
            {isDayTour ? 'City Day Tour (8h)' : isCrossCountryDay ? 'Cross-Country Express' : `${route.length} Hotel Package`}
          </p>
        </div>
      </div>

      {/* Right Side Content Container */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        {/* Top Tag Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-2">
            {isDayTour ? (
              <span className="bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                <Compass className="w-3 h-3 text-amber-600" /> Day City Tour (8h)
              </span>
            ) : isCrossCountryDay ? (
              <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                <Bus className="w-3 h-3 text-emerald-600" /> Cross-Country Day Trip (9h)
              </span>
            ) : (
              <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                <Moon className="w-3 h-3 text-[#C5A880]" /> {route.length}
              </span>
            )}

            {route.durationHours && (
              <span className="bg-slate-50 text-slate-600 text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" /> {route.durationHours}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>
              Days: <strong className="text-slate-700 font-semibold">{route.departDay}</strong>
              {route.startTime && (
                <span className="ml-1.5 text-[#C5A880] font-bold">({route.startTime} - {route.endTime})</span>
              )}
            </span>
          </div>
        </div>

        {/* Main Interactive Route Section with Animated Bus */}
        <div className="py-4 my-1 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Origin City */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[120px]">
            <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{route.departCity}</span>
            <span className="text-[11px] font-semibold text-slate-400 mt-0.5">
              {isDayTour ? 'City Tour Start' : 'Departure Hub'}
            </span>
          </div>

          {/* Animated Transit Path with Moving Bus Icon */}
          <div className="flex-1 w-full max-w-sm px-2 flex flex-col items-center">
            <div className="w-full relative py-3 flex items-center">
              {/* Background solid track */}
              <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden relative">
                <div className={`absolute inset-0 ${isDayTour ? 'bg-amber-200' : isCrossCountryDay ? 'bg-emerald-200' : 'bg-[#C5A880]/30'}`} />
              </div>

              {/* Start Node */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-white shadow-xs z-10" />

              {/* Moving Bus Animation along track */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none"
                initial={{ left: '5%' }}
                animate={{ left: ['5%', '88%', '5%'] }}
                transition={{
                  duration: 4.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.2
                }}
              >
                <div className={`${isDayTour ? 'bg-amber-600' : isCrossCountryDay ? 'bg-emerald-600' : 'bg-[#C5A880]'} text-slate-950 p-1.5 rounded-xl shadow-md flex items-center justify-center border border-white`}>
                  <Bus className="w-4 h-4 text-slate-950" />
                </div>
              </motion.div>

              {/* End Node */}
              <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full ${isDayTour ? 'bg-amber-600' : isCrossCountryDay ? 'bg-emerald-600' : 'bg-[#C5A880]'} border-2 border-white shadow-xs z-10`} />
            </div>

            <div className="flex items-center justify-between w-full text-[10px] uppercase font-extrabold text-slate-400 tracking-wider pt-0.5">
              <span className={`flex items-center gap-1 ${isDayTour ? 'text-amber-700' : isCrossCountryDay ? 'text-emerald-700' : 'text-[#C5A880]'}`}>
                <Sparkles className="w-3 h-3" /> {isDayTour ? 'Sightseeing Day Tour' : isCrossCountryDay ? 'Same-Day Express' : 'Express Motorcoach'}
              </span>
              <span className="text-slate-400">{isDayTour ? 'Full Day Excursion' : 'Border Fast-Track'}</span>
            </div>
          </div>

          {/* Destination City */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right min-w-[120px]">
            <span className={`text-xl sm:text-2xl font-black ${isDayTour ? 'text-amber-600' : isCrossCountryDay ? 'text-emerald-600' : 'text-slate-900'} tracking-tight`}>
              {route.endCity}
            </span>
            <span className="text-[11px] font-semibold text-slate-400 mt-0.5">
              {isDayTour ? 'Return to City' : 'Destination Hub'}
            </span>
          </div>
        </div>

        {/* Bottom Action and Price Bar */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider truncate">
              {isDayTrip ? 'Per Seat Rate' : 'Total Package'}
            </span>
            <div className="flex items-baseline gap-1 flex-wrap">
              <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight break-all">{displayPrice}</span>
              <span className="text-[11px] font-semibold text-slate-400 shrink-0">/ person</span>
            </div>
          </div>

          <button 
            onClick={() => onSelectRoute(route)}
            className="bg-[#C5A880] hover:bg-[#b0936b] text-slate-950 font-black text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-md transition-all duration-200 flex items-center gap-1.5 shrink-0 transform group-hover:translate-x-0.5 cursor-pointer"
          >
            <span>{isDayTrip ? 'View Day Tour' : 'View Itinerary'}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
