import React, { useEffect } from 'react';
import type { Artist } from '../types';

interface ArtistsProps {
  artists: Artist[];
  title: string;
}

const Artists: React.FC<ArtistsProps> = ({ artists, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 fade-in">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl serif-font tracking-wide mb-16 border-b border-gray-100 pb-4">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div key={artist.id} className="group relative overflow-hidden aspect-[3/4] cursor-pointer bg-gray-100">
              <img 
                src={artist.imageUrl} 
                alt={artist.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />

              <div className="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-2xl serif-font">{artist.name}</h3>
                <p className="text-xs tracking-widest uppercase mt-1 opacity-90">{artist.oneLiner}</p>
              </div>

              <div className="absolute inset-0 bg-white/95 flex flex-col justify-center items-center p-8 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                 <h3 className="text-2xl serif-font text-black mb-2">{artist.name}</h3>
                 <div className="w-8 h-[1px] bg-black mb-4"></div>
                 <p className="text-sm text-gray-600 font-light leading-relaxed">
                   {artist.bio}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;