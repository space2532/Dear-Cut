import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StyleFeedCardProps {
  style: {
    id: number;
    name: string;
    salon: string;
    tags: string[];
    imageUrl: string;
    height: number;
  };
  onClick?: () => void;
}

export function StyleFeedCard({ style, onClick }: StyleFeedCardProps) {
  return (
    <button 
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden w-full text-left"
    >
      {/* Image */}
      <div 
        className="w-full overflow-hidden cursor-pointer"
        style={{ height: `${style.height}px` }}
      >
        <ImageWithFallback
          src={style.imageUrl}
          alt={style.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Info */}
      <div className="p-3">
        <h3 className="text-[#111111] mb-1" style={{ fontSize: '15px' }}>
          {style.name}
        </h3>
        <p className="text-[#9CA3AF] mb-2" style={{ fontSize: '12px' }}>
          {style.salon}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {style.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-[#6B7280]"
              style={{ fontSize: '11px' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
