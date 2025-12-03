import React from 'react';
import { Check } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SelectableImageCardProps {
  style: {
    id: number;
    name: string;
    imageUrl: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export function SelectableImageCard({ style, isSelected, onSelect }: SelectableImageCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative overflow-hidden rounded-2xl transition-all ${
        isSelected ? 'ring-4 ring-[#3B82F6]' : 'ring-1 ring-[#E5E7EB]'
      }`}
      style={{ aspectRatio: '3/4' }}
    >
      {/* Image */}
      <ImageWithFallback
        src={style.imageUrl}
        alt={style.name}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay when selected */}
      {isSelected && (
        <div className="absolute inset-0 bg-[#3B82F6]/10 pointer-events-none" />
      )}
      
      {/* Checkmark when selected */}
      {isSelected && (
        <div className="absolute top-3 right-3 w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center">
          <Check size={20} className="text-white" strokeWidth={3} />
        </div>
      )}
      
      {/* Style name tag at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
        <p className="text-white" style={{ fontSize: '14px' }}>
          {style.name}
        </p>
      </div>
    </button>
  );
}
