import React from 'react';
import { SalonCard } from './SalonCard';

interface Salon {
  id: number;
  name: string;
  thumbnail: string;
  matchPercentage: number;
  location: string;
}

interface SalonCarouselProps {
  salons: Salon[];
}

export function SalonCarousel({ salons }: SalonCarouselProps) {
  return (
    <div>
      <h2 className="text-[#111111] mb-4" style={{ fontSize: '18px' }}>
        이 스타일에 전문적인 헤어샵
      </h2>
      
      {/* Horizontal Scroll Container */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5">
        {salons.map((salon) => (
          <SalonCard key={salon.id} salon={salon} />
        ))}
      </div>
    </div>
  );
}
