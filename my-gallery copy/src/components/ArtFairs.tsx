import React, { useEffect } from 'react';
import type { ArtFair } from '../types';

interface ArtFairsProps {
  artFairs: ArtFair[];
  title: string;
}

const ArtFairs: React.FC<ArtFairsProps> = ({ artFairs, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 fade-in">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl serif-font tracking-wide mb-16 border-b border-gray-100 pb-4">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {artFairs.map((fair) => (
            <article key={fair.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-gray-100">
                <img 
                  src={fair.imageUrl} 
                  alt={fair.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm tracking-[0.15em] uppercase font-semibold text-gray-900 group-hover:text-black transition-colors">
                  {fair.location}
                </h4>
                <h5 className="text-xl serif-font italic text-gray-800 group-hover:text-black transition-colors">
                  {fair.title}
                </h5>
                <p className="text-xs tracking-widest text-gray-500 mt-2 border-l border-gray-300 pl-3">
                  {fair.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtFairs;