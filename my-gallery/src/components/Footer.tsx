import React from 'react';

interface FooterProps {
  content: {
    contact: string;
    copyright: string;
  };
  brandName: string;
  logoUrl: string; // Add logoUrl prop
}

const Footer: React.FC<FooterProps> = ({ content, brandName, logoUrl }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center space-y-6 text-center">
        {/* Footer Logo */}
        {logoUrl ? (
             <img 
                src={logoUrl} 
                alt={brandName} 
                className="h-10 w-auto object-contain mb-2" 
            />
        ) : (
             <div className="text-3xl font-bold tracking-tight text-black mb-2">{brandName}</div>
        )}
        
        <p className="text-[10px] tracking-widest text-gray-400 mt-8">{content.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;