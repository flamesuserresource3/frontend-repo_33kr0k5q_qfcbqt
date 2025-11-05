import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Meatball Maestro — Crafted with passion and paprika.
      </footer>
    </div>
  );
}

export default App;
