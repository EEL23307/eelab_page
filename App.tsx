
import React, { useState } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Professor from './pages/Professor';
import Research from './pages/Research';
import People from './pages/People';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Page>('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'Professor':
        return <Professor />;
      case 'Research':
        return <Research />;
      case 'People':
        return <People />;
      case 'Publications':
        return <Publications />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow animate-in fade-in duration-700">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
