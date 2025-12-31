import React from 'react';
import type { HeroContent } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  content: HeroContent;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ content, onExplore }) => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={content.imageUrl} 
          alt={content.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-3xl fade-in">
          <div className="flex items-center space-x-4 mb-4">
            <span className="h-[1px] w-12 bg-black"></span>
            <span className="text-sm tracking-[0.2em] uppercase font-medium">{content.date}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-2 serif-font tracking-tight leading-none">
            {content.artist}
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-8 serif-font italic text-gray-700">
            {content.title}
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed mb-10 font-light">
            {content.description}
          </p>
          
          <button 
            onClick={onExplore}
            className="group flex items-center space-x-3 text-sm tracking-[0.25em] uppercase border-b border-black pb-1 hover:text-gray-600 transition-colors"
          >
            <span>{content.buttonText}</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;