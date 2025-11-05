import { Flame, Utensils, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-white pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-medium">
              <Flame size={16} />
              Meatball specialist
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Serving unforgettable meatball experiences
            </h1>
            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
              I’m a hospitality professional with deep, hands-on expertise in crafting, scaling, and
              serving meatball-forward menus. From recipe development to kitchen ops and brand-building,
              I help restaurants delight guests—one perfect bite at a time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-700">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1"><Utensils size={16}/> Menu R&D</span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1"><Star size={16}/> Guest Experience</span>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1"><Flame size={16}/> Kitchen Ops</span>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-900">
                Book a tasting
              </a>
              <a href="#experience" className="text-sm font-medium text-gray-800 hover:text-black">
                See my track record →
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-rose-200 via-amber-100 to-white p-3 shadow-inner">
              <div className="w-full h-full rounded-xl bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIyNjIzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" aria-label="Meatball dish" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
