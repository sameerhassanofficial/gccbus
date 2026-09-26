import React from 'react';
import { Clock, Navigation, Landmark, Sparkles, Bus } from 'lucide-react';

interface ScheduleItem {
  day: string;
  activity: string;
  time: string;
  type: 'culture' | 'transit';
}

const BUS_A_SCHEDULE: ScheduleItem[] = [
  { day: 'Saturday', activity: 'Doha Cultural Excursion', time: '13:00–21:00', type: 'culture' },
  { day: 'Sunday', activity: 'Doha → Riyadh (via Hofuf Oasis)', time: '08:00–17:00', type: 'transit' },
  { day: 'Monday', activity: 'Riyadh & Diriyah Discovery', time: '10:00–18:00', type: 'culture' },
  { day: 'Tuesday', activity: 'Riyadh → Bahrain (via Khobar)', time: '08:00–17:00', type: 'transit' },
  { day: 'Wednesday', activity: 'Bahrain Heritage Day Tour', time: '10:00–18:00', type: 'culture' },
  { day: 'Thursday', activity: 'Bahrain → Doha (via Khobar)', time: '08:00–17:00', type: 'transit' },
  { day: 'Friday', activity: 'Doha Souqs & Bay Highlights', time: '13:00–21:00', type: 'culture' },
];

const BUS_B_SCHEDULE: ScheduleItem[] = [
  { day: 'Saturday', activity: 'Doha → Bahrain (via Khobar)', time: '08:00–17:00', type: 'transit' },
  { day: 'Sunday', activity: 'Bahrain Heritage Day Tour', time: '10:00–18:00', type: 'culture' },
  { day: 'Monday', activity: 'Bahrain → Riyadh (via Khobar)', time: '08:00–17:00', type: 'transit' },
  { day: 'Tuesday', activity: 'Riyadh & Diriyah Discovery', time: '10:00–18:00', type: 'culture' },
  { day: 'Wednesday', activity: 'Riyadh → Doha (via Hofuf Oasis)', time: '08:00–17:00', type: 'transit' },
  { day: 'Thursday', activity: 'Doha Souqs & Bay Highlights', time: '13:00–21:00', type: 'culture' },
  { day: 'Friday', activity: 'Doha Cultural Excursion', time: '13:00–21:00', type: 'culture' },
];

export const WeeklySchedule: React.FC = () => {
  const renderScheduleCard = (
    title: string,
    subtitle: string,
    badgeText: string,
    badgeColor: string,
    badgeBg: string,
    schedule: ScheduleItem[],
    loopType: 'clockwise' | 'counter'
  ) => {
    return (
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-slate-200">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                {title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <Navigation className={`w-3.5 h-3.5 text-[#C5A880] ${loopType === 'clockwise' ? 'animate-spin-slow' : 'scale-x-[-1]'}`} />
                <span>{subtitle}</span>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-tight shadow-sm ${badgeColor} ${badgeBg}`}>
              {badgeText}
            </span>
          </div>

          {/* Schedule List */}
          <div className="space-y-3">
            {schedule.map((item, idx) => {
              const isTransit = item.type === 'transit';
              return (
                <div 
                  key={idx} 
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-2xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-slate-100"
                >
                  {/* Left block (Day + Activity details) */}
                  <div className="flex items-center gap-3">
                    {/* Day selector label */}
                    <div className="w-[85px] shrink-0">
                      <span className="inline-block text-xs font-black text-slate-900 bg-slate-100 group-hover:bg-amber-100 group-hover:text-amber-950 px-2.5 py-1 rounded-md transition-all duration-300">
                        {item.day}
                      </span>
                    </div>

                    {/* Activity Title + Micro Tag */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight group-hover:text-slate-950 transition-colors">
                        {item.activity}
                      </span>
                      {isTransit ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                          <Navigation className="w-2.5 h-2.5" />
                          Transit
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-100">
                          <Landmark className="w-2.5 h-2.5" />
                          Leisure
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right block (Time zone) */}
                  <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-800 font-semibold text-xs sm:text-right transition-colors sm:pl-4">
                    <Clock className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#C5A880] transition-colors" />
                    <span>{item.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-slate-50/60 border-y border-slate-100">
      
      {/* Decorative blurred Bus Background Graphic (Top-Right) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-slate-200/40 pointer-events-none select-none filter blur-3xl rounded-full"></div>
      <div className="absolute top-4 right-4 text-slate-900/10 pointer-events-none select-none transform rotate-12 hidden md:block filter blur-[1px]">
        <Bus className="w-[450px] h-[450px] stroke-[0.15]" />
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 bg-amber-100/60 text-amber-950 border border-amber-200/50 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3 h-3 text-[#C5A880]" />
            WEEKLY SCHEDULE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Dual-Bus Circuit
          </h2>
        </div>

        {/* Side-by-Side Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {renderScheduleCard(
            'Bus A — Clockwise Loop',
            'Doha → Riyadh → Bahrain → Doha',
            'Loop Alpha',
            'text-amber-800 border-amber-200',
            'bg-amber-50 border',
            BUS_A_SCHEDULE,
            'clockwise'
          )}

          {renderScheduleCard(
            'Bus B — Counter-Clockwise',
            'Doha → Bahrain → Riyadh → Doha',
            'Loop Bravo',
            'text-slate-800 border-slate-200',
            'bg-slate-50 border',
            BUS_B_SCHEDULE,
            'counter'
          )}
        </div>

      </div>
    </section>
  );
};
