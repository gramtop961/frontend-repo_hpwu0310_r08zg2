import { Star, IndianRupee } from 'lucide-react';

const mockGarages = [
  {
    id: 'g1',
    name: 'City Auto Care',
    rating: 4.8,
    reviews: 320,
    distance: 1.2,
    priceLevel: '$$ • Moderate',
    services: ['General', 'AC', 'Tyre'],
    image: 'https://images.unsplash.com/photo-1729379056054-c9fec3cb05f3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSYXBpZCUyMFdoZWVsJTIwV29ya3N8ZW58MHwwfHx8MTc2MjUzMzAwMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'g2',
    name: 'Rapid Wheel Works',
    rating: 4.5,
    reviews: 210,
    distance: 2.4,
    priceLevel: '$ • Budget',
    services: ['General', 'Wash'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'g3',
    name: 'Premier Motors Hub',
    rating: 4.7,
    reviews: 145,
    distance: 3.1,
    priceLevel: '$$$ • Premium',
    services: ['General', 'Detailing', 'AC'],
    image: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI0OTY0MjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function GarageList({ onSelect }) {
  return (
    <section id="garages" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">Nearby garages</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Based on your location and filters</p>
          </div>
          <button className="text-sm rounded-lg px-3 py-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200">View all</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGarages.map((g) => (
            <article key={g.id} className="group overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="relative h-44 overflow-hidden">
                <img src={g.image} alt={g.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute top-2 left-2 bg-white/90 dark:bg-neutral-900/80 backdrop-blur rounded-full px-2.5 py-1 text-xs text-neutral-700 dark:text-neutral-200">{g.priceLevel}</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-neutral-900 dark:text-white">{g.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="inline-flex items-center gap-1"><Star size={16} className="text-amber-500 fill-amber-500" /> {g.rating} ({g.reviews})</span>
                  <span>• {g.distance} km</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.services.map((s) => (
                    <span key={s} className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">{s}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-neutral-700 dark:text-neutral-300 inline-flex items-center gap-1"><IndianRupee size={16} />Transparent pricing</div>
                  <button onClick={() => onSelect?.(g)} className="text-sm rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-3 py-1.5">View</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
