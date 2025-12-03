import React, { useState } from 'react';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SalonCardDetailProps {
  salon: {
    id: number;
    name: string;
    rating: number;
    matchPercentage: number;
    matchStyle: string;
    images: string[];
    tags: string[];
    distance: string;
    priceRange: string;
    location: string;
  };
}

export function SalonCardDetail({ salon }: SalonCardDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % salon.images.length);
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + salon.images.length) % salon.images.length);
  };
  
  return (
    <button className="w-full bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#3B82F6] transition-colors text-left">
      {/* Image Carousel */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={salon.images[currentImageIndex]}
          alt={salon.name}
          className="w-full h-full object-cover"
        />
        
        {/* Carousel Navigation */}
        {salon.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <ChevronLeft size={18} className="text-[#111111]" strokeWidth={2} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
            >
              <ChevronRight size={18} className="text-[#111111]" strokeWidth={2} />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {salon.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-white w-4'
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        {/* Header Row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-[#111111] mb-1" style={{ fontSize: '17px' }}>
              {salon.name}
            </h3>
            <div className="flex items-center gap-1 mb-2">
              <Star size={14} className="text-[#F59E0B] fill-[#F59E0B]" strokeWidth={2} />
              <span className="text-[#111111]" style={{ fontSize: '14px' }}>
                {salon.rating}
              </span>
            </div>
          </div>
          
          {/* Match Badge */}
          <div 
            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
            style={{ 
              boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
            }}
          >
            <span className="text-white" style={{ fontSize: '12px' }}>
              {salon.matchPercentage}% 매칭
            </span>
          </div>
        </div>
        
        {/* Match Info */}
        <div className="mb-3 px-3 py-2 bg-[#EFF6FF] rounded-lg">
          <p className="text-[#3B82F6]" style={{ fontSize: '13px' }}>
            <strong>{salon.matchStyle}</strong> 스타일에 잘 맞아요
          </p>
        </div>
        
        {/* Tags */}
        <div className="flex gap-2 mb-3 flex-wrap">
          {salon.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-[#F3F4F6] text-[#6B7280] rounded-full"
              style={{ fontSize: '12px' }}
            >
              #{tag}
            </span>
          ))}
        </div>
        
        {/* Info Row */}
        <div className="flex items-center gap-3 text-[#9CA3AF]" style={{ fontSize: '13px' }}>
          <div className="flex items-center gap-1">
            <MapPin size={14} strokeWidth={2} />
            <span>{salon.distance}</span>
          </div>
          <span>•</span>
          <span>{salon.priceRange}</span>
          <span>•</span>
          <span className="truncate flex-1">{salon.location}</span>
        </div>
      </div>
    </button>
  );
}
