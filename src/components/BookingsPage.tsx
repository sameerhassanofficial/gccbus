import React from 'react';
import { Booking } from '../types';
import { Ticket, Printer, Trash2, CheckCircle, ArrowLeft, Bus, Compass, Clock } from 'lucide-react';

interface BookingsPageProps {
  bookings: Booking[];
  onBackToRoutes: () => void;
  onCancelBooking: (id: string) => void;
}

export const BookingsPage: React.FC<BookingsPageProps> = ({
  bookings,
  onBackToRoutes,
  onCancelBooking
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 pb-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="bg-[#C5A880] text-slate-950 p-3 rounded-2xl shadow-md">
            <Ticket className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">My Bookings & Tickets</h1>
            <p className="text-sm text-slate-500 font-medium">Manage and review your confirmed cross-border itineraries and day tour tickets</p>
          </div>
        </div>
        <button 
          onClick={onBackToRoutes}
          className="bg-slate-900 hover:bg-[#C5A880] text-white hover:text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md transition flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Routes
        </button>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
          <div className="bg-[#C5A880]/10 text-[#C5A880] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-inner">
            <Bus className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">No Reserved Bookings Found</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            You haven't booked any trips or day tours yet. Explore our city tours and cross-border schedules between Doha, Bahrain, and Riyadh to book your ticket.
          </p>
          <button 
            onClick={onBackToRoutes}
            className="bg-[#C5A880] hover:bg-[#b0936b] text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition shadow-md cursor-pointer"
          >
            Explore Routes Now
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map(b => (
            <div key={b.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#C5A880]/15 text-[#C5A880] text-xs font-black px-3 py-1.5 rounded-xl">
                      Route {b.routeCode}
                    </span>
                    {b.tourType && (
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-xl flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5" /> {b.tourType}
                      </span>
                    )}
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-xl flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> {b.status}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">ID: {b.id}</span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  {b.departCity} → {b.endCity} <span className="text-xs font-normal text-slate-500">({b.length})</span>
                </h3>

                <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-4">
                  <p><strong>Passenger:</strong> {b.passengerName}</p>
                  <p><strong>Email:</strong> {b.passengerEmail}</p>
                  <p><strong>Passport Number / ID:</strong> {b.passportNumber}</p>
                  {b.timeSlot && (
                    <p className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                      <strong>Time Window:</strong> <span>{b.timeSlot}</span>
                    </p>
                  )}
                  {b.seats && b.seats.length > 0 && (
                    <p><strong>Reserved Seats:</strong> <span className="text-[#C5A880] font-bold">{b.seats.join(', ')}</span></p>
                  )}
                  <p><strong>Booking Date:</strong> {b.bookingDate}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Total Paid</span>
                  <span className="text-xl font-black text-slate-900">{b.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => window.print()}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-semibold text-xs transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" /> Print E-Ticket
                  </button>
                  <button 
                    onClick={() => onCancelBooking(b.id)}
                    className="bg-rose-50 hover:bg-rose-100 text-rose-600 p-2.5 rounded-xl transition cursor-pointer"
                    title="Cancel Booking"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
