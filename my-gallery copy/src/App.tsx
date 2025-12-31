import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExhibitionDetail from './components/ExhibitionDetail';
import ArtFairs from './components/ArtFairs';
import About from './components/About';
import Footer from './components/Footer';
import ExhibitionsByYear from './components/ExhibitionsByYear';
import { CONTENT } from './constants';
import type { Language, ViewState } from './types';

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const [view, setView] = useState<ViewState>('home');

  const toggleLang = () => {
    setLang(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const handleNavigate = (newView: ViewState, targetId?: string) => {
    if (newView === 'home' && targetId) {
      if (view === 'home') {
         scrollToId(targetId);
      } else {
        setView('home');
        setTimeout(() => scrollToId(targetId), 100);
      }
    } else {
      setView(newView);
    }
  };

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentContent = CONTENT[lang];

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar
        content={currentContent.nav}
        brandName={currentContent.brandName}
        logoUrl={currentContent.logoUrl}
        lang={lang}
        toggleLang={toggleLang}
        onNavigate={handleNavigate}
      />

      <main className="flex-grow">
        {view === 'home' && (
          <Hero
            content={currentContent.hero}
            onExplore={() => handleNavigate('exhibition-detail')}
          />
        )}

        {view === 'exhibition-detail' && (
          <ExhibitionDetail
            content={currentContent.exhibitionDetail}
            onBack={() => handleNavigate('home')}
          />
        )}

        {view === 'art-fairs' && (
          <ArtFairs
            artFairs={currentContent.artFairs}
            title={currentContent.nav.artFairs.label}
          />
        )}

        {view === 'about' && (
          <About
            content={currentContent.about}
          />
        )}

        {view === 'exhibitions-2025' && (
          <ExhibitionsByYear
            exhibitions={currentContent.exhibitions}
            year={2025}
            title={currentContent.nav.exhibitions.label}
          />
        )}

        {view === 'exhibitions-2024' && (
          <ExhibitionsByYear
            exhibitions={currentContent.exhibitions}
            year={2024}
            title={currentContent.nav.exhibitions.label}
          />
        )}

        {view === 'exhibitions-2023' && (
          <ExhibitionsByYear
            exhibitions={currentContent.exhibitions}
            year={2023}
            title={currentContent.nav.exhibitions.label}
          />
        )}

        {view === 'exhibitions-2022' && (
          <ExhibitionsByYear
            exhibitions={currentContent.exhibitions}
            year={2022}
            title={currentContent.nav.exhibitions.label}
          />
        )}
      </main>

      <Footer
        content={currentContent.footer}
        brandName={currentContent.brandName}
        logoUrl={currentContent.logoUrl}
      />
    </div>
  );
}

export default App;
