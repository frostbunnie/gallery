import React from 'react';
import type { Exhibition } from '../types';

interface ExhibitionGridProps {
  title: string;
  exhibitions: Exhibition[];
}

const ExhibitionGrid: React.FC<ExhibitionGridProps> = ({ title, exhibitions }) => {
  return (
    <section className="py-20 md:py-32 bg-white" id="archive">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-4">
          <h3 className="text-2xl md:text-3xl serif-font tracking-wide">{title}</h3>
          <div className="hidden md:block h-[1px] flex-grow bg-gray-100 mx-8 mb-2"></div>
          <span className="text-xs tracking-widest text-gray-400 mt-2 md:mt-0 uppercase">Gallery Selection 2023-2024</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {exhibitions.map((item) => (
            <article key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-gray-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm tracking-[0.15em] uppercase font-semibold text-gray-900 group-hover:text-black transition-colors">
                  {item.artist}
                </h4>
                <h5 className="text-xl serif-font italic text-gray-800 group-hover:text-black transition-colors">
                  {item.title}
                </h5>
                <p className="text-xs tracking-widest text-gray-500 mt-2 border-l border-gray-300 pl-3">
                  {item.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionGrid;