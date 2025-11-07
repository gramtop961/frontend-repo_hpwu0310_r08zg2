import Spline from '@splinetool/react-spline';
import { MapPin, Filter, Search } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Hero({ onSearch }) {
  const inputRef = useRef(null);
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = inputRef.current?.value || '';
    onSearch?.({ query: q, service });
  };

  return (
    <section className="relative h-[70vh] min-h-[520px] w-full" id="search">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white dark:from-neutral-900/40 dark:via-neutral-900/80 dark:to-neutral-900 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
        <div className="w-full">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Find and book trusted garages near you
            </h1>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              Compare services, ratings, and prices. Pay securely. Drive with confidence.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-3 bg-white/90 dark:bg-neutral-900/90 rounded-2xl p-3 shadow-lg ring-1 ring-black/5 backdrop-blur">
            <div className="md:col-span-2 flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2.5">
              <Search size={18} className="text-neutral-500" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search by city, area, or garage name"
                className="w-full bg-transparent outline-none text-neutral-900 dark:text-white placeholder:text-neutral-400"
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2.5">
              <Filter size={18} className="text-neutral-500" />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-transparent outline-none text-neutral-900 dark:text-white"
              >
                <option value="">All services</option>
                <option value="general">General Service</option>
                <option value="wash">Car Wash</option>
                <option value="tyre">Tyre & Wheel</option>
                <option value="ac">AC Repair</option>
              </select>
            </div>
            <button type="submit" className="md:col-span-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4">
              <MapPin size={18} />
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
