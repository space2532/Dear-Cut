import React from 'react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface StyleCardProps {
  style: {
    id: number;
    name: string;
    image: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export function StyleCard({ style, isSelected, onSelect }: StyleCardProps) {
  return (
    <button 
      onClick={onSelect}
      className="flex-shrink-0 relative rounded-3xl overflow-hidden"
      style={{ 
        width: '240px',
        boxShadow: isSelected 
          ? '0 8px 24px rgba(59, 130, 246, 0.25)' 
          : '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}
    >
      {/* Image */}
      <div className="w-full aspect-[3/4] relative">
        <ImageWithFallback
          src={style.image}
          alt={style.name}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Style Name */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-white">{style.name}</p>
        </div>
        
        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute top-4 right-4">
            <div className="bg-[#3B82F6] rounded-full p-1.5">
              <Check size={16} className="text-white" strokeWidth={3} />
            </div>
          </div>
        )}
      </div>
    </button>
  );
}
