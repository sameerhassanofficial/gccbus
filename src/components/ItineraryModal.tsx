import React, { useState } from 'react';
import { Route, Booking } from '../types';
import { X, Ticket, Moon, Hotel, Check, User, Mail, CreditCard, ArrowRight, Clock, MapPin, Compass, Bus, Sparkles, ShieldCheck } from 'lucide-react';
import dohaImage from '../assets/images/doha_skyline_1789557348461.jpg';
import riyadhImage from '../assets/images/riyadh_skyline_1789557367050.jpg';
import luxuryBusImage from '../assets/images/luxury_bus_coach_1789557325875.jpg';

interface ItineraryModalProps {
  route: Route | null;
  currency: string;
  onClose: () => void;
  onBookingComplete: (booking: Booking) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  route,
  currency,
  onClose,
  onBookingComplete
}) => {
  if (!route) return null;

  const [passengerName, setPassengerName] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [step, setStep] = useState<'details' | 'checkout' | 'success'>('details');

  const isDayTour = route.category === 'day-tour';
  const isCrossCountryDay = route.category === 'cross-country-day';
  const isDayTrip = isDayTour || isCrossCountryDay;

  // Convert price
  let displayPrice = route.price;
  let numericPrice = parseInt(route.price.replace('$', ''));
  if (currency === 'SAR') {
    numericPrice = Math.round(numericPrice * 3.75);
    displayPrice = `${numericPrice} SAR`;
  } else if (currency === 'QAR') {
    numericPrice = Math.round(numericPrice * 3.64);
    displayPrice = `${numericPrice} QAR`;
  } else if (currency === 'BHD') {
    numericPrice = Math.round(numericPrice * 0.38);
    displayPrice = `${numericPrice} BHD`;
  }

  const getImageForRoute = () => {
    if (route.departCity === 'Doha' || route.endCity === 'Doha') return dohaImage;
    if (route.departCity === 'Riyadh' || route.endCity === 'Riyadh') return riyadhImage;
    return luxuryBusImage;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName || !passengerEmail || !passportNumber) {
      alert('Please fill in all passenger details.');
      return;
    }

    const newBooking: Booking = {
      id: `GCC-${Math.floor(100000 + Math.random() * 900000)}`,
      routeCode: route.code,
      departCity: route.departCity,
      endCity: route.endCity,
      departDay: route.departDay,
      length: route.length,
      price: displayPrice,
      passengerName,
      passengerEmail,
      passportNumber,
      tourType: route.tourType || (isDayTrip ? 'Day Excursion' : 'Multi-Day Package'),
      timeSlot: route.startTime && route.endTime ? `${route.startTime} - ${route.endTime}` : undefined,
      bookingDate: new Date().toLocaleDateString(),
      status: 'Confirmed'
    };

    onBookingComplete(newBooking);
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header Hero Banner */}
        <div className="relative h-48 sm:h-56 bg-slate-950 flex flex-col justify-end p-6 sm:p-8 text-white overflow-hidden shrink-0">
          <div className="absolute inset-0 z-0">
            <img src={getImageForRoute()} alt={route.title || route.code} className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>

          <div className="absolute top-4 right-4 z-20">
            <button 
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center transition border border-white/20 cursor-pointer shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative z-10 flex flex-col items-start gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#C5A880] text-slate-950 text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Ticket className="w-3.5 h-3.5" /> {route.code}
              </span>
              <span className="bg-white/15 backdrop-blur-md text-white border border-white/25 text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wide flex items-center gap-1.5">
                {isDayTour ? <Compass className="w-3.5 h-3.5 text-[#C5A880]" /> : isCrossCountryDay ? <Bus className="w-3.5 h-3.5 text-emerald-400" /> : <Moon className="w-3.5 h-3.5 text-purple-400" />}
                {isDayTrip ? 'Day Excursion' : 'Multi-Day Package'}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {route.name || `${route.departCity} → ${route.endCity}`}
            </h3>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">

          {/* Step Indicator */}
          {step !== 'success' && (
            <div className="grid grid-cols-2 gap-3 bg-slate-100 p-1.5 rounded-2xl text-xs font-extrabold text-slate-500">
              <div className={`py-2.5 px-4 rounded-xl text-center transition flex items-center justify-center gap-2 ${step === 'details' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'details' ? 'bg-[#C5A880] text-slate-950' : 'bg-slate-200 text-slate-600'}`}>1</span>
                <span>Itinerary & Schedule</span>
              </div>
              <div className={`py-2.5 px-4 rounded-xl text-center transition flex items-center justify-center gap-2 ${step === 'checkout' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 'checkout' ? 'bg-[#C5A880] text-slate-950' : 'bg-slate-200 text-slate-600'}`}>2</span>
                <span>Passenger & Payment</span>
              </div>
            </div>
          )}

          {/* Step 1: Details */}
          {step === 'details' && (
            <div className="space-y-6">
              
              {/* Quick Summary Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">Origin City</span>
                  <p className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880]" /> {route.departCity}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">Schedule Days</span>
                  <p className="font-black text-slate-900 text-sm sm:text-base">{route.departDay}</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">
                    {route.startTime ? 'Timing Slot' : 'Destination'}
                  </span>
                  <p className="font-black text-slate-900 text-sm sm:text-base truncate">
                    {route.startTime && route.endTime ? `${route.startTime} - ${route.endTime}` : route.endCity}
                  </p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">Duration</span>
                  <p className="font-black text-[#C5A880] text-sm sm:text-base flex items-center gap-1">
                    {route.durationHours ? <Clock className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />} 
                    {route.durationHours || route.length}
                  </p>
                </div>
              </div>

              {/* Stops & Sightseeing Highlights */}
              {route.stops && (
                <div className="bg-gradient-to-r from-amber-50 to-amber-50/20 border border-amber-200/80 p-4 sm:p-5 rounded-2xl">
                  <h4 className="text-xs font-black text-amber-950 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C5A880]" /> Included Stops & Landmarks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {route.stops.split(',').map((stop, i) => (
                      <span key={i} className="bg-white text-slate-800 font-bold text-xs px-3.5 py-2 rounded-xl border border-amber-200/90 shadow-xs flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-[#C5A880]" /> {stop.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Day-by-Day Schedule Timeline */}
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-slate-700" /> {isDayTrip ? 'Tour Schedule & Excursion Breakdown' : 'Day-by-Day Itinerary & Luxury Stays'}
                </h4>
                <div className="space-y-3 relative before:absolute before:top-3 before:bottom-3 before:left-4 before:w-0.5 before:bg-slate-200">
                  {[
                    { day: 'Day 1', activity: route.day1, hotel: route.night1 },
                    { day: 'Day 2', activity: route.day2, hotel: route.night2 },
                    { day: 'Day 3', activity: route.day3, hotel: route.night3 },
                    { day: 'Day 4', activity: route.day4, hotel: route.night4 },
                    { day: 'Day 5', activity: route.day5, hotel: route.night5 },
                    { day: 'Day 6', activity: route.day6, hotel: route.night6 },
                    { day: 'Day 7', activity: route.day7, hotel: undefined },
                  ].map((d, idx) => d.activity ? (
                    <div key={idx} className="relative pl-10 flex items-start">
                      <div className="absolute left-1.5 top-1 w-5 h-5 rounded-full bg-slate-900 text-white font-extrabold text-[10px] flex items-center justify-center ring-4 ring-white shadow-md">
                        {idx + 1}
                      </div>
                      <div className="bg-slate-50 hover:bg-slate-100/80 transition p-4 rounded-2xl border border-slate-200/80 w-full shadow-2xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-black text-slate-800 uppercase tracking-wider">
                            {isDayTrip ? `Session / Activity ${idx + 1}` : `Day ${idx + 1} Schedule`}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-slate-900">{d.activity}</p>
                        {d.hotel && (
                          <div className="mt-2.5 inline-flex items-center gap-1.5 bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                            <Hotel className="w-3.5 h-3.5 text-slate-600" /> 
                            <span>Hotel Accommodation:</span> 
                            <strong className="text-slate-900 font-bold">{d.hotel}</strong>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : null)}
                </div>
              </div>

              {/* Pricing breakdown for Multi-day */}
              {!isDayTrip && (route.adultTwinPrice || route.adultSinglePrice) && (
                <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
                  <span className="font-extrabold text-slate-800 text-xs uppercase tracking-wider block mb-3">Package Pricing Tiers (Per Person)</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                    <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Twin / Double</span>
                      <strong className="text-sm font-black text-slate-900">{route.adultTwinPrice || route.price}</strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Single Supp.</span>
                      <strong className="text-sm font-bold text-slate-700">{route.adultSinglePrice || '-'}</strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Child (No Bed)</span>
                      <strong className="text-sm font-extrabold text-emerald-600">{route.child0to5Price || 'FREE'}</strong>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">Child w/ Bed</span>
                      <strong className="text-sm font-bold text-slate-700">{route.child5to12BedPrice || route.child5to12Price || '-'}</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer Total & Proceed Button */}
              <div className="bg-slate-950 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block font-bold">
                    {isDayTrip ? 'Retail Rate / Seat' : 'Total Package Price'}
                  </span>
                  <span className="text-3xl font-black text-white">{displayPrice}</span>
                </div>
                <button 
                  onClick={() => setStep('checkout')}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>{isDayTrip ? 'Book This Day Trip' : 'Proceed to Checkout'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          )}

          {/* Step 2: Passenger Info & Checkout Form */}
          {step === 'checkout' && (
            <form onSubmit={handleBookingSubmit} className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h4 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <User className="w-4 h-4 text-[#C5A880]" /> Passenger Details & Verification
                </h4>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Secure Booking
                </span>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name (As in Passport / ID)</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., Mohammed Al-Mansoori"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:bg-white font-medium transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address (For Instant E-Ticket)</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    required
                    placeholder="e.g., mohammed@example.com"
                    value={passengerEmail}
                    onChange={(e) => setPassengerEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:bg-white font-medium transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Passport / National ID Number</label>
                <div className="relative">
                  <CreditCard className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    required
                    placeholder="e.g., A12345678"
                    value={passportNumber}
                    onChange={(e) => setPassportNumber(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:bg-white font-medium transition"
                  />
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs space-y-1.5 text-slate-700">
                <p className="flex justify-between"><span>Selected Tour:</span> <strong className="text-slate-900">{route.name || `${route.departCity} → ${route.endCity}`} ({route.code})</strong></p>
                <p className="flex justify-between"><span>Schedule:</span> <strong className="text-slate-900">{route.departDay} {route.startTime ? `(${route.startTime} - ${route.endTime})` : ''} • {route.length}</strong></p>
                {route.stops && <p className="flex justify-between"><span>Stops:</span> <strong className="text-slate-900 truncate max-w-[280px]">{route.stops}</strong></p>}
                <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm">
                  <span className="font-extrabold">Total Amount:</span> 
                  <strong className="text-slate-950 font-black text-lg">{displayPrice}</strong>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button 
                  type="button"
                  onClick={() => setStep('details')}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-bold text-sm transition cursor-pointer"
                >
                  Back to Details
                </button>
                <button 
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-8 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2 cursor-pointer"
                >
                  <Check className="w-4 h-4" /> Confirm & Book Now
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Success Confirmation */}
          {step === 'success' && (
            <div className="text-center py-10 space-y-5 animate-in zoom-in-95 duration-300">
              <div className="bg-emerald-100 text-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-3xl shadow-inner">
                <Check className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">Booking Confirmed Successfully!</h4>
                <p className="text-sm text-slate-500 max-w-md mx-auto mt-1.5">
                  Your official {isDayTrip ? 'Day Trip' : 'Itinerary'} e-ticket has been issued and saved to <strong className="text-slate-800">My Bookings</strong>.
                </p>
              </div>
              <div className="pt-4">
                <button 
                  onClick={onClose}
                  className="bg-slate-950 hover:bg-[#C5A880] hover:text-slate-950 text-white px-10 py-4 rounded-xl font-extrabold text-sm transition shadow-lg cursor-pointer"
                >
                  View My Bookings & E-Tickets
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
