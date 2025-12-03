import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SalonCardProps {
  salon: {
    id: number;
    name: string;
    thumbnail: string;
    matchPercentage: number;
    location: string;
  };
}

export function SalonCard({ salon }: SalonCardProps) {
  return (
    <button className="flex-shrink-0 w-48 bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#3B82F6] transition-colors">
      {/* Thumbnail */}
      <div className="relative w-full h-32 overflow-hidden">
        <ImageWithFallback
          src={salon.thumbnail}
          alt={salon.name}
          className="w-full h-full object-cover"
        />
        
        {/* Match Badge */}
        <div className="absolute top-2 right-2 bg-[#10B981] px-2 py-1 rounded-full flex items-center gap-1">
          <Star size={12} className="text-white fill-white" strokeWidth={2} />
          <span className="text-white" style={{ fontSize: '11px' }}>
            {salon.matchPercentage}% 매칭
          </span>
        </div>
      </div>
      
      {/* Info */}
      <div className="p-3 text-left">
        <h3 className="text-[#111111] mb-1" style={{ fontSize: '15px' }}>
          {salon.name}
        </h3>
        <div className="flex items-center gap-1">
          <MapPin size={12} className="text-[#9CA3AF]" strokeWidth={2} />
          <span className="text-[#9CA3AF]" style={{ fontSize: '12px' }}>
            {salon.location}
          </span>
        </div>
      </div>
    </button>
  );
}
