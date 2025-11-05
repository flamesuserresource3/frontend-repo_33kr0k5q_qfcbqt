import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const email = 'hello@meatballmaestro.dev';
  const phone = '+1 (555) 123-4567';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const message = form.get('message');
    const subject = encodeURIComponent(`Catering/Tasting inquiry from ${name || 'your website'}`);
    const body = encodeURIComponent(message || 'Hi! I’d love to chat about your meatball offerings.');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s create something delicious</h2>
            <p className="mt-3 text-gray-600">
              Interested in menu consulting, pop-ups, or private catering? I’d love to hear from you.
            </p>
            <div className="mt-6 space-y-3 text-gray-800">
              <div className="flex items-center gap-3"><Mail size={18}/> {email}</div>
              <div className="flex items-center gap-3"><Phone size={18}/> {phone}</div>
              <div className="flex items-center gap-3"><MapPin size={18}/> Based in NYC, available nationwide</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white border p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-gray-700">Your name</label>
                <input id="name" name="name" type="text" className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Jane Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-gray-700">Your email</label>
                <input id="email" name="email" type="email" className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="jane@example.com" />
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-gray-700">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Tell me about your event, concept, or idea..." />
            </div>
            <button type="submit" className="mt-6 w-full sm:w-auto inline-flex items-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-900">
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
