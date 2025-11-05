import { CheckCircle2, MapPin, Star, Utensils } from 'lucide-react';

const roles = [
  {
    title: 'Head of Meatball Operations',
    place: 'Baller Bistro — New York, NY',
    period: '2021 — Present',
    highlights: [
      'Scaled signature meatball menu to 30+ SKUs across dine-in, delivery, and catering.',
      'Implemented prep workflows that reduced cook times by 18% while improving consistency.',
      'Led vendor sourcing for heritage meats and created 12-week rotating specials.',
    ],
  },
  {
    title: 'R&D Chef (Meatball Program)',
    place: 'Neighborhood Kitchen — Chicago, IL',
    period: '2018 — 2021',
    highlights: [
      'Developed award-winning beef + ricotta meatball recipe (Local Eats “Top Bite”).',
      'Built allergen-friendly options (gluten-free, dairy-free) without flavor trade-offs.',
      'Piloted ghost-kitchen meatball concept that reached 4.8★ average rating.',
    ],
  },
];

const skills = [
  'Menu engineering',
  'Batch scaling',
  'Food safety (ServSafe)',
  'Supplier relations',
  'Catering logistics',
  'Team training',
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              A track record of building craveable menus and smooth, scalable operations for
              meatball-forward brands.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-amber-600 font-medium">
            <Star className="fill-amber-400 text-amber-400" size={18} />
            4.8★ average diner rating
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <div key={role.title} className="rounded-2xl border p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <span className="text-sm text-gray-500">{role.period}</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} /> {role.place}
              </div>
              <ul className="mt-4 space-y-2">
                {role.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle2 className="mt-0.5 text-emerald-600" size={18} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold flex items-center gap-2"><Utensils size={18}/> Core strengths</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-700">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
