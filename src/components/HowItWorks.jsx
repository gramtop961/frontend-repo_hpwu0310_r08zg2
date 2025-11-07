import { CalendarCheck2, CreditCard, LocateFixed } from 'lucide-react';

const steps = [
  {
    icon: LocateFixed,
    title: 'Discover nearby garages',
    desc: 'Search by city or service. Compare ratings, prices, and distance on an interactive map.',
  },
  {
    icon: CalendarCheck2,
    title: 'Book your slot',
    desc: 'Choose the service type with convenient date and time. Get instant confirmation.',
  },
  {
    icon: CreditCard,
    title: 'Pay securely',
    desc: 'Complete payment with Razorpay. Your booking is protected and easy to manage.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">How Wheelix works</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl">From discovery to payment, everything is streamlined for speed and trust.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
              <div className="h-10 w-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-200">
                <Icon size={20} />
              </div>
              <h3 className="mt-3 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
