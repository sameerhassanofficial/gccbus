import React, { useState } from 'react';
import { Ticket, Menu, X, Phone, Bus } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  bookingsCount: number;
  onOpenBookings: () => void;
  currency: string;
  setCurrency: (curr: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  bookingsCount,
  onOpenBookings,
  currency,
  setCurrency
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#141D31] backdrop-blur-md border-b border-slate-800 text-white transition-all duration-300 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1360px] mx-auto h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-3 cursor-pointer group shrink-0"
        >
          <img 
            src="https://gccbus.com/wp-content/uploads/2026/06/cropped-image-1.webp" 
            alt="The GCC Bus Logo" 
            className="h-10 sm:h-12 w-auto object-contain filter brightness-125 group-hover:scale-105 transition"
          />
        </div>

        {/* Head Menus: Preserved Original Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 font-semibold text-sm text-slate-300">
          <button 
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hover:text-white transition ${activeTab === 'home' ? 'text-[#C5A880] font-bold border-b-2 border-[#C5A880] pb-1' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => {
              setActiveTab('routes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hover:text-white transition ${activeTab === 'routes' ? 'text-[#C5A880] font-bold border-b-2 border-[#C5A880] pb-1' : ''}`}
          >
            Routes & Schedules
          </button>
          <button 
            onClick={() => {
              setActiveTab('fleet');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hover:text-white transition ${activeTab === 'fleet' ? 'text-[#C5A880] font-bold border-b-2 border-[#C5A880] pb-1' : ''}`}
          >
            Fleet & Comfort
          </button>
          <button 
            onClick={() => {
              setActiveTab('faq');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`hover:text-white transition ${activeTab === 'faq' ? 'text-[#C5A880] font-bold border-b-2 border-[#C5A880] pb-1' : ''}`}
          >
            Travel FAQ
          </button>
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center space-x-3 shrink-0">
          {/* Phone Link */}
          <a 
            href="tel:+97444008899"
            className="hidden xl:flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-3.5 py-2.5 rounded-xl transition border border-slate-700"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>+974 4400 8899</span>
          </a>

          {/* Bookings / Reserve Seat Button */}
          <button 
            onClick={onOpenBookings}
            className="relative text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#b0936b] text-slate-950 transition flex items-center gap-2 shadow-md active:scale-95"
          >
            <Ticket className="w-4 h-4 text-slate-950" />
            <span>Bookings</span>
            {bookingsCount > 0 && (
              <span className="bg-slate-950 text-[#C5A880] text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {bookingsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition border border-slate-700"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141D31] border-b border-slate-800 px-6 py-5 space-y-4 shadow-xl">
          <a 
            href="tel:+97444008899"
            className="flex items-center gap-2 font-bold text-[#C5A880] py-2 border-b border-slate-800 text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>+974 4400 8899</span>
          </a>
          <button 
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-bold text-slate-200 hover:text-[#C5A880] py-2 border-b border-slate-800"
          >
            Home
          </button>
          <button 
            onClick={() => { setActiveTab('routes'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-bold text-slate-200 hover:text-[#C5A880] py-2 border-b border-slate-800"
          >
            Routes & Schedules
          </button>
          <button 
            onClick={() => { setActiveTab('fleet'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-bold text-slate-200 hover:text-[#C5A880] py-2 border-b border-slate-800"
          >
            Fleet & Comfort
          </button>
          <button 
            onClick={() => { setActiveTab('faq'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-bold text-slate-200 hover:text-[#C5A880] py-2 border-b border-slate-800"
          >
            Travel FAQ
          </button>
          <button 
            onClick={() => { onOpenBookings(); setMobileMenuOpen(false); }}
            className="block w-full text-left font-bold text-[#C5A880] py-2 flex items-center justify-between"
          >
            <span>My Bookings</span>
            <span className="bg-slate-800 text-[#C5A880] px-2.5 py-0.5 rounded-full text-xs font-bold border border-slate-700">
              {bookingsCount}
            </span>
          </button>
        </div>
      )}
    </header>
  );
};

