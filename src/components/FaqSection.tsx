import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What documents do I need for GCC cross-border bus travel?",
      a: "Passengers must carry a valid passport with at least 6 months validity, valid GCC residency/visa (if applicable), and national ID card. Our coordinators assist with border clearance at Saudi-Bahrain and Qatar-Saudi checkpoints."
    },
    {
      q: "Are hotel accommodations included in the package price?",
      a: "Yes! All itineraries include verified hotel stays at partner establishments such as Holiday Villa Doha, Wyndham Garden Manama, and Baraira Al Wezarat Riyadh depending on your route."
    },
    {
      q: "What is the baggage allowance per passenger?",
      a: "Each ticket includes 1 checked luggage piece (up to 25kg) and 1 carry-on personal bag. Additional luggage can be arranged during booking."
    },
    {
      q: "Can I modify or cancel my bus itinerary booking?",
      a: "Yes, you can review your bookings anytime under 'My Bookings'. Free cancellations or date modifications are available up to 48 hours prior to departure."
    }
  ];

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C5A880]">Got Questions?</span>
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-1">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-6 py-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4"
            >
              <span className="flex items-center gap-2.5 text-base">
                <HelpCircle className="w-5 h-5 text-[#C5A880] shrink-0" /> {faq.q}
              </span>
              {openIndex === idx ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
