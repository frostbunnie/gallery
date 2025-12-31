import React, { useState, useEffect } from 'react';
import type { SiteContent, Language, ViewState } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  content: SiteContent['nav'];
  brandName: string;
  logoUrl: string;
  lang: Language;
  toggleLang: () => void;
  onNavigate: (view: ViewState, targetId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ content, brandName, logoUrl, lang, toggleLang, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, action?: string, targetId?: string) => {
    e.preventDefault();

    if (action === 'view-exhibitions-2025') {
      onNavigate('exhibitions-2025');
    } else if (action === 'view-exhibitions-2024') {
      onNavigate('exhibitions-2024');
    } else if (action === 'view-exhibitions-2023') {
      onNavigate('exhibitions-2023');
    } else if (action === 'view-exhibitions-2022') {
      onNavigate('exhibitions-2022');
    } else if (action === 'view-artfairs') {
      onNavigate('art-fairs');
    } else if (action === 'view-about') {
      onNavigate('about');
    } else if (targetId) {
      onNavigate('home', targetId);
    } else {
       onNavigate('home');
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    onNavigate('home');
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        <div 
          onClick={handleLogoClick}
          className="cursor-pointer hover:opacity-80 transition-opacity z-50"
        >
          {logoUrl ? (
            <img 
                src={logoUrl} 
                alt={brandName} 
                className="h-8 md:h-10 w-auto object-contain" 
            />
          ) : (
            <div className="text-3xl font-bold tracking-tight text-black leading-none uppercase">
                {brandName}
            </div>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-12">
          <div className="relative group h-full py-2">
            <span className="cursor-pointer text-sm tracking-[0.2em] uppercase hover:text-gray-600 transition-colors">
              {content.exhibitions.label}
            </span>
            <div className="absolute left-0 bottom-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
            
            <div className="absolute top-full left-0 pt-6 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              <div className="bg-white border border-gray-100 shadow-lg p-4 flex flex-col space-y-3">
                {content.exhibitions.subLinks?.map((sub: any, idx: number) => (
                  <a 
                    key={idx} 
                    href={sub.href || "#"}
                    onClick={(e) => handleLinkClick(e, sub.action, sub.targetId)}
                    className="text-xs tracking-widest uppercase text-gray-500 hover:text-black hover:pl-2 transition-all"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#"
            onClick={(e) => handleLinkClick(e, content.artFairs.action)}
            className="relative group py-2"
          >
            <span className="text-sm tracking-[0.2em] uppercase hover:text-gray-600 transition-colors">{content.artFairs.label}</span>
            <div className="absolute left-0 bottom-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </a>

          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, content.about.action)}
            className="relative group py-2"
          >
            <span className="text-sm tracking-[0.2em] uppercase hover:text-gray-600 transition-colors">{content.about.label}</span>
            <div className="absolute left-0 bottom-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-2 z-50">
          <button 
            onClick={toggleLang}
            className={`text-xs tracking-widest transition-colors ${lang === 'zh' ? 'font-bold text-black' : 'text-gray-400 hover:text-black'}`}
          >
            中文
          </button>
          <span className="text-xs text-gray-300">|</span>
          <button 
            onClick={toggleLang}
            className={`text-xs tracking-widest transition-colors ${lang === 'en' ? 'font-bold text-black' : 'text-gray-400 hover:text-black'}`}
          >
            EN
          </button>
        </div>

        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="flex flex-col items-center space-y-6">
            <span className="text-xl serif-font cursor-pointer">{content.exhibitions.label}</span>
            {content.exhibitions.subLinks?.map((sub: any, idx: number) => (
                <a 
                  key={idx} 
                  href={sub.href || "#"} 
                  onClick={(e) => handleLinkClick(e, sub.action, sub.targetId)}
                  className="text-sm text-gray-500"
                >
                  {sub.label}
                </a>
            ))}
            <span
              onClick={(e) => handleLinkClick(e, content.artFairs.action)}
              className="text-xl serif-font cursor-pointer mt-4"
            >
              {content.artFairs.label}
            </span>
             <span 
              onClick={(e) => handleLinkClick(e, content.about.action)}
              className="text-xl serif-font cursor-pointer"
            >
              {content.about.label}
            </span>
         </div>
         
         <div className="flex items-center space-x-4 mt-8">
            <button onClick={toggleLang} className={lang === 'zh' ? 'font-bold' : 'text-gray-400'}>中文</button>
            <span>/</span>
            <button onClick={toggleLang} className={lang === 'en' ? 'font-bold' : 'text-gray-400'}>EN</button>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;