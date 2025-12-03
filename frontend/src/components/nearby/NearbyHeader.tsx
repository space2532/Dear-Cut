import React from 'react';
import { Search } from 'lucide-react';

interface NearbyHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function NearbyHeader({ searchQuery, onSearchChange }: NearbyHeaderProps) {
  return (
    <div className="px-5 pt-5 pb-3">
      <h1 className="text-[#111111] mb-4" style={{ fontSize: '24px' }}>
        내 근처 헤어샵
      </h1>
      
      {/* Search Bar */}
      <div className="relative">
        <Search 
          size={20} 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" 
          strokeWidth={2}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="헤어샵, 디자이너 검색..."
          className="w-full pl-12 pr-4 py-3.5 bg-[#F3F4F6] rounded-full outline-none text-[#111111] placeholder:text-[#9CA3AF] focus:bg-[#E5E7EB] transition-colors"
          style={{ fontSize: '15px' }}
        />
      </div>
    </div>
  );
}
