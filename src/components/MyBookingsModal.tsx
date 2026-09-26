import React from 'react';
import { Booking } from '../types';
import { X, Ticket, Calendar, Trash2, Printer, CheckCircle } from 'lucide-react';

interface MyBookingsModalProps {
  bookings: Booking[];
  onClose: () => void;
  onCancelBooking: (id: string) => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  bookings,
  onClose,
  onCancelBooking
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-sky-50 text-sky-600 p-2.5 rounded-2xl">
              <Ticket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900">My Bookings</h3>
              <p className="text-xs text-slate-500 font-medium">Manage your reserved cross-border itineraries</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-slate-100 hover:bg-slate-200 text-slate-600 w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-16 text-slate-400 space-y-3">
            <Ticket className="w-12 h-12 mx-auto stroke-1 text-slate-300" />
            <p className="text-base font-bold text-slate-700">No Bookings Yet</p>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">Explore available routes and book your cross-border bus trip today.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map(b => (
              <div key={b.id} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="bg-sky-100 text-sky-700 text-xs font-black px-2.5 py-1 rounded-lg">
                      {b.routeCode}
                    </span>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> {b.status}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">ID: {b.id}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {b.departCity} → {b.endCity} <span className="text-xs font-normal text-slate-500">({b.length})</span>
                  </h4>
                  <div className="text-xs text-slate-500 space-y-0.5">
                    <p>Passenger: <strong className="text-slate-700">{b.passengerName}</strong> (Passport: {b.passportNumber})</p>
                    <p>{b.seats && b.seats.length > 0 ? `Seats: ${b.seats.join(', ')} • ` : ''}Booked on {b.bookingDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                  <button 
                    onClick={() => window.print()}
                    className="bg-slate-200 hover:bg-slate-300 text-slate-700 p-2.5 rounded-xl transition"
                    title="Print E-Ticket"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onCancelBooking(b.id)}
                    className="bg-rose-50 hover:bg-rose-100 text-rose-600 p-2.5 rounded-xl transition"
                    title="Cancel Booking"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
