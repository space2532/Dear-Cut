import React from 'react';
import { Map } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface MapPreviewProps {
  onViewFullMap: () => void;
}

export function MapPreview({ onViewFullMap }: MapPreviewProps) {
  return (
    <div className="relative h-[200px] mx-5 mb-4 rounded-2xl overflow-hidden">
      {/* Map Image Placeholder */}
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjB3aXRoJTIwcGluc3xlbnwxfHx8fDE3NjQ3NzUxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Map preview"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Price Pins Simulation */}
      <div className="absolute top-8 left-12 bg-white px-2.5 py-1.5 rounded-lg shadow-lg">
        <span className="text-[#111111]" style={{ fontSize: '12px' }}>
          ₩35,000
        </span>
      </div>
      <div className="absolute top-16 right-16 bg-white px-2.5 py-1.5 rounded-lg shadow-lg">
        <span className="text-[#111111]" style={{ fontSize: '12px' }}>
          ₩42,000
        </span>
      </div>
      <div className="absolute bottom-12 left-20 bg-white px-2.5 py-1.5 rounded-lg shadow-lg">
        <span className="text-[#111111]" style={{ fontSize: '12px' }}>
          ₩38,000
        </span>
      </div>
      
      {/* View Full Map Button */}
      <button
        onClick={onViewFullMap}
        className="absolute bottom-4 right-4 bg-white px-4 py-2.5 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-lg"
        style={{ fontSize: '14px' }}
      >
        <Map size={16} className="text-[#111111]" strokeWidth={2} />
        <span className="text-[#111111]">전체 지도 보기</span>
      </button>
    </div>
  );
}
