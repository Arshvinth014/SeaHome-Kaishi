import React from 'react';
import { rentalShopData } from '../../../config/rentalShop';

export const UsefulGuides: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {rentalShopData.usefulGuides.map((guide) => (
        <a href="#" key={guide.id} className="group flex flex-col border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-shadow bg-white">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img 
              src={guide.img} 
              alt={guide.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-blue-600 line-clamp-2">{guide.title}</h3>
            <p className="text-xs text-gray-600 line-clamp-3">{guide.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
};