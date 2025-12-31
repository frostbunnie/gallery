import React, { useEffect } from 'react';
import type { ExhibitionDetailContent, Artwork } from '../types';
import { ArrowLeft } from 'lucide-react';

interface ExhibitionDetailProps {
  content: ExhibitionDetailContent;
  onBack: () => void;
}

const ExhibitionDetail: React.FC<ExhibitionDetailProps> = ({ content, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderArtwork = (item: Artwork, _index: number) => {
    const { width, align, marginTop } = item.layoutConfig;
    
    const alignClass = {
        'self-start': 'items-start text-left',
        'self-center': 'items-center text-center',
        'self-end': 'items-end text-right'
    }[align];

    return (
      <div 
        key={item.id} 
        className={`flex flex-col ${alignClass} w-full mb-16 md:mb-0 fade-in`}
      >
        <div className={`relative ${width} md:${marginTop}`}>
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-auto object-cover shadow-sm bg-gray-50"
            />
            <div className={`mt-4 space-y-1 ${align === 'self-end' ? 'items-end flex flex-col' : (align === 'self-center' ? 'items-center flex flex-col' : 'items-start flex flex-col')}`}>
                <h3 className="serif-font text-xl italic">{item.title}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{item.year}</p>
                <div className="text-xs text-gray-400 font-light flex gap-2">
                    <span>{item.medium}</span>
                    <span>•</span>
                    <span>{item.dimensions}</span>
                </div>
            </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-2 text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>{content.backText}</span>
        </button>

        <header className="mb-24 md:mb-40 fade-in">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 lg:col-span-3">
               <h1 className="text-4xl md:text-5xl serif-font font-light leading-none mb-4">{content.artist}</h1>
               <h2 className="text-2xl md:text-3xl serif-font italic text-gray-600">{content.title}</h2>
               <p className="mt-6 text-sm tracking-[0.2em] border-t border-black inline-block pt-2">{content.date}</p>
            </div>
            <div className="md:col-span-8 lg:col-span-6 lg:col-start-5 flex flex-col justify-end">
              {content.curatorialStatement.map((paragraph: string, idx: number) => (
                <p key={idx} className="text-gray-600 font-light leading-relaxed mb-4 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-12 md:gap-0">
          {content.artworks.map((art: Artwork, index: number) => renderArtwork(art, index))}
        </div>
      </div>
    </div>
  );
};

export default ExhibitionDetail;