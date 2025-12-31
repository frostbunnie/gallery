import React, { useEffect } from 'react';
import type { AboutContent } from '../types';

interface AboutProps {
  content: AboutContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 fade-in">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl serif-font tracking-wide mb-16 border-b border-gray-100 pb-4">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-6">
             {content.paragraphs.map((para: string, idx: number) => (
               <p key={idx} className="text-gray-600 font-light leading-relaxed text-lg text-justify">
                 {para}
               </p>
             ))}
          </div>

          <div className="flex flex-col space-y-12">
             <div className="w-full aspect-video bg-gray-100 overflow-hidden relative">
                <img 
                  src={content.mapImageUrl} 
                  alt="Gallery Map Location" 
                  className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-black rounded-full -translate-x-1/2 -translate-y-1/2 ring-4 ring-white/50"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-2">{content.contactInfo.addressLabel}</h3>
                   <p className="text-sm text-gray-500 font-light">{content.contactInfo.address}</p>
                </div>
                
                <div>
                   <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-2">{content.contactInfo.hoursLabel}</h3>
                   <p className="text-sm text-gray-500 font-light">{content.contactInfo.hours}</p>
                </div>

                <div className="md:col-span-2">
                   <h3 className="text-xs font-bold uppercase tracking-widest text-black mb-2">{content.contactInfo.contactLabel}</h3>
                   <p className="text-sm text-gray-500 font-light">{content.contactInfo.email}</p>
                   <p className="text-sm text-gray-500 font-light mt-1">{content.contactInfo.phone}</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;