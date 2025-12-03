import React from 'react';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SalonCardProps {
  salon: {
    id: number;
    name: string;
    rating: number;
    image: string;
    tags: string[];
  };
}

export function SalonCard({ salon }: SalonCardProps) {
  return (
    <div 
      className="bg-white rounded-3xl overflow-hidden"
      style={{ 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Image */}
      <div className="w-full aspect-video overflow-hidden">
        <ImageWithFallback
          src={salon.image}
          alt={salon.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-[#111111] flex-1">{salon.name}</h3>
          <div className="flex items-center gap-1 ml-2">
            <Star size={16} className="text-[#3B82F6] fill-[#3B82F6]" />
            <span className="text-[#111111]" style={{ fontSize: '14px' }}>
              {salon.rating}
            </span>
          </div>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          {salon.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 bg-[#F3F4F6] text-[#6B7280] rounded-full"
              style={{ fontSize: '13px' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
