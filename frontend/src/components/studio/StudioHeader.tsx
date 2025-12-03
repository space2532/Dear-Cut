import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function StudioHeader() {
  return (
    <div className="px-5 py-5 flex items-center justify-between">
      <h1 className="text-[#111111]" style={{ fontSize: '24px' }}>
        My Style Studio
      </h1>
      
      <button className="relative">
        <div 
          className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#E5E7EB] hover:border-[#3B82F6] transition-colors"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1731500573044-3551bfa73c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2ZpbGUlMjBwaG90b3xlbnwxfHx8fDE3NjQ3NjExNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="User photo"
            className="w-full h-full object-cover"
          />
        </div>
      </button>
    </div>
  );
}
