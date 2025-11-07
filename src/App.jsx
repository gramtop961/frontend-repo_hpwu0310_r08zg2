import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GarageList from './components/GarageList';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  const [filters, setFilters] = useState({ query: '', service: '' });

  const handleSearch = (f) => setFilters(f);

  const handleSelectGarage = (garage) => {
    alert(`Selected garage: ${garage.name}`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navbar />
      <Hero onSearch={handleSearch} />
      <main>
        <GarageList onSelect={handleSelectGarage} key={`${filters.query}-${filters.service}`} />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
