export interface Route {
  code: string;
  name?: string;
  category?: 'day-tour' | 'cross-country-day' | 'day-trip' | 'multi-day';
  tourType?: string;
  length: string; // e.g. "2D/1N", "3D/2N", "4D/3N", "5D/4N", "6D/5N", "7D/6N", "Day Tour (8h)", "Cross-Country Day (9h)"
  daysNights?: string;
  durationDays?: number;
  durationNights?: number;
  departDay: string;
  departCity: string;
  endDay: string;
  endCity: string;
  price: string;
  retailPrice?: string;
  adultTwinPrice?: string;
  adultSinglePrice?: string;
  child0to5Price?: string;
  child0to5BedPrice?: string;
  child5to12Price?: string;
  child5to12BedPrice?: string;
  agentPrice?: string;
  abPrice?: string;
  durationHours?: string;
  startTime?: string;
  endTime?: string;
  stops?: string;
  dayTripsDetail?: string;
  day1?: string;
  night1?: string;
  day2?: string;
  night2?: string;
  day3?: string;
  night3?: string;
  day4?: string;
  night4?: string;
  day5?: string;
  night5?: string;
  day6?: string;
  night6?: string;
  day7?: string;
}

export interface Booking {
  id: string;
  routeCode: string;
  departCity: string;
  endCity: string;
  departDay: string;
  length: string;
  price: string;
  passengerName: string;
  passengerEmail: string;
  passportNumber: string;
  seats?: string[];
  bookingDate: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  tourType?: string;
  timeSlot?: string;
}

export interface FilterState {
  tripType: string; // 'all' | 'day-trips' | 'day-tour' | 'cross-country-day' | 'multi-day' | '2d1n' | '3d2n' | '4d3n' | '5d4n' | '6d5n' | '7d6n'
  fromCity: string;
  toCity: string;
  departDay: string;
  length: string;
  sortBy: string;
  searchQuery?: string;
}
