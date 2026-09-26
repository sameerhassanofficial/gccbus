import React, { useState, useEffect, useMemo } from 'react';
import { ROUTES_DATA } from './data/routesData';
import { Route, Booking, FilterState } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationsGallery } from './components/DestinationsGallery';
import { RouteSearchFilter } from './components/RouteSearchFilter';
import { RouteList } from './components/RouteList';
import { RoutesPage } from './components/RoutesPage';
import { FleetSection } from './components/FleetSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ItineraryModal } from './components/ItineraryModal';
import { BookingsPage } from './components/BookingsPage';
import { WeeklySchedule } from './components/WeeklySchedule';
import { ExecutiveFleetExperience } from './components/ExecutiveFleetExperience';
import { Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currency, setCurrency] = useState('USD');
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    tripType: 'all',
    fromCity: '',
    toCity: '',
    departDay: '',
    length: '',
    sortBy: 'code',
    searchQuery: ''
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const saved = localStorage.getItem('gcc_bus_bookings');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('gcc_bus_bookings', JSON.stringify(bookings));
    } catch {
      // ignore
    }
  }, [bookings]);

  const departCities = useMemo(() => {
    return Array.from(new Set(ROUTES_DATA.map(r => r.departCity))).sort();
  }, []);

  const endCities = useMemo(() => {
    return Array.from(new Set(ROUTES_DATA.map(r => r.endCity))).sort();
  }, []);

  const filteredRoutes = useMemo(() => {
    const query = (filters.searchQuery || '').trim().toLowerCase();

    const list = ROUTES_DATA.filter(r => {
      // Check tripType
      let matchTripType = true;
      if (filters.tripType === 'day-trips') {
        matchTripType = r.category === 'day-trip' || r.category === 'day-tour' || r.category === 'cross-country-day';
      } else if (filters.tripType === 'day-tour') {
        matchTripType = r.category === 'day-tour' || r.tourType === 'City Tour';
      } else if (filters.tripType === 'cross-country-day') {
        matchTripType = r.category === 'cross-country-day' || r.tourType === 'Transit Service';
      } else if (filters.tripType === 'multi-day') {
        matchTripType = r.category === 'multi-day';
      }

      const matchDepartDay = !filters.departDay || r.departDay.toLowerCase().includes(filters.departDay.toLowerCase());

      // Search query across multiple fields
      let matchSearch = true;
      if (query) {
        const searchableText = [
          r.code,
          r.name || '',
          r.departCity,
          r.endCity,
          r.stops || '',
          r.day1 || '',
          r.day2 || '',
          r.day3 || '',
          r.day4 || '',
          r.day5 || '',
          r.day6 || '',
          r.day7 || '',
          r.night1 || '',
          r.night2 || '',
          r.night3 || '',
          r.night4 || '',
          r.night5 || '',
          r.night6 || '',
          r.length,
          r.daysNights || '',
          r.tourType || ''
        ].join(' ').toLowerCase();

        matchSearch = searchableText.includes(query);
      }

      // Duration / length filter
      let matchLength = true;
      if (filters.length) {
        if (filters.length === 'Day Tour (8h)') {
          matchLength = r.tourType === 'City Tour' || r.category === 'day-tour';
        } else if (filters.length === 'Day Trip (9h)' || filters.length === 'Transit') {
          matchLength = r.tourType === 'Transit Service' || r.category === 'cross-country-day';
        } else if (filters.length === '1 Night' || filters.length === '2D/1N') {
          matchLength = r.daysNights === '2D/1N' || r.durationNights === 1 || r.length === '2D/1N';
        } else if (filters.length === '2 Nights' || filters.length === '3D/2N') {
          matchLength = r.daysNights === '3D/2N' || r.durationNights === 2 || r.length === '3D/2N';
        } else if (filters.length === '3 Nights' || filters.length === '4D/3N') {
          matchLength = r.daysNights === '4D/3N' || r.durationNights === 3 || r.length === '4D/3N';
        } else if (filters.length === '4 Nights' || filters.length === '5D/4N') {
          matchLength = r.daysNights === '5D/4N' || r.durationNights === 4 || r.length === '5D/4N';
        } else if (filters.length === '5 Nights' || filters.length === '6D/5N') {
          matchLength = r.daysNights === '6D/5N' || r.durationNights === 5 || r.length === '6D/5N';
        } else if (filters.length === '6 Nights' || filters.length === '7D/6N') {
          matchLength = r.daysNights === '7D/6N' || r.durationNights === 6 || r.length === '7D/6N';
        } else {
          matchLength = r.length === filters.length || r.daysNights === filters.length;
        }
      }

      return matchTripType &&
             matchSearch &&
             (!filters.fromCity || r.departCity.toLowerCase() === filters.fromCity.toLowerCase()) &&
             (!filters.toCity || r.endCity.toLowerCase() === filters.toCity.toLowerCase()) &&
             matchDepartDay &&
             matchLength;
    });

    return list.sort((a, b) => {
      if (filters.sortBy === 'price-asc') {
        return parseInt(a.price.replace('$', '')) - parseInt(b.price.replace('$', ''));
      }
      if (filters.sortBy === 'price-desc') {
        return parseInt(b.price.replace('$', '')) - parseInt(a.price.replace('$', ''));
      }
      if (filters.sortBy === 'duration') {
        return parseInt(a.length) - parseInt(b.length);
      }
      return a.code.localeCompare(b.code);
    });
  }, [filters]);

  const handleResetFilters = () => {
    setFilters({
      tripType: 'all',
      fromCity: '',
      toCity: '',
      departDay: '',
      length: '',
      sortBy: 'code',
      searchQuery: ''
    });
  };

  const handleBookingComplete = (newBooking: Booking) => {
    setBookings(prev => [newBooking, ...prev]);
    setToastMessage(`Booking ${newBooking.id} confirmed successfully!`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleCancelBooking = (id: string) => {
    if (confirm('Are you sure you want to cancel this booking?')) {
      setBookings(prev => prev.filter(b => b.id !== id));
      setToastMessage(`Booking ${id} cancelled.`);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-[#C5A880] selection:text-slate-950 flex flex-col justify-between">
      <div>
        <Navbar 
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          bookingsCount={bookings.length}
          onOpenBookings={() => setActiveTab('bookings')}
          currency={currency}
          setCurrency={setCurrency}
        />

        {activeTab === 'bookings' ? (
          <BookingsPage 
            bookings={bookings}
            onBackToRoutes={() => setActiveTab('routes')}
            onCancelBooking={handleCancelBooking}
          />
        ) : activeTab === 'routes' ? (
          <RoutesPage 
            routes={filteredRoutes}
            currency={currency}
            filters={filters}
            setFilters={setFilters}
            departCities={departCities}
            endCities={endCities}
            onResetFilters={handleResetFilters}
            onSelectRoute={(route) => setSelectedRoute(route)}
            onBackToHome={() => setActiveTab('home')}
          />
        ) : activeTab === 'fleet' ? (
          <div className="py-8">
            <FleetSection />
          </div>
        ) : activeTab === 'faq' ? (
          <div className="py-8">
            <FaqSection />
          </div>
        ) : (
          <>
            <Hero 
              filters={filters}
              setFilters={setFilters}
              departCities={departCities}
              endCities={endCities}
              onReset={handleResetFilters}
              totalResults={filteredRoutes.length}
              onSearchSubmit={() => {
                setActiveTab('routes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <WeeklySchedule />

            <ExecutiveFleetExperience />

            <DestinationsGallery 
              onSelectCity={(city) => {
                setFilters(prev => ({ ...prev, fromCity: city }));
                setActiveTab('routes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <div className="py-12 bg-white">
              <FleetSection />
            </div>

            <FaqSection />
          </>
        )}
      </div>

      <Footer onSelectTab={(tab) => {
        setActiveTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Itinerary / Booking Modal */}
      <ItineraryModal 
        route={selectedRoute}
        currency={currency}
        onClose={() => setSelectedRoute(null)}
        onBookingComplete={handleBookingComplete}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-in fade-in slide-in-from-bottom-5">
          <div className="bg-emerald-500 text-white rounded-full p-1">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
