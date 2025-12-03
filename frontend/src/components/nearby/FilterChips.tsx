import React from 'react';
import { Sparkles, Navigation, Star, Clock, Map } from 'lucide-react';

const filters = [
  { id: 'map', label: '지도', icon: Map },
  { id: 'match', label: '내 스타일', icon: Sparkles },
  { id: 'nearest', label: '가장 가까운', icon: Navigation },
  { id: 'rating', label: '평점 높은', icon: Star },
  { id: 'open', label: '영업 중', icon: Clock }
];

interface FilterChipsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterChips({ activeFilter, onFilterChange }: FilterChipsProps) {
  return (
    <div className="px-5 pb-4">
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {filters.map((filter) => {
          const Icon = filter.icon;
          const isActive = activeFilter === filter.id;
          
          return (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-4 py-2.5 rounded-full flex items-center gap-2 flex-shrink-0 transition-all ${
                isActive
                  ? filter.id === 'match' || filter.id === 'map'
                    ? 'bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white shadow-lg'
                    : 'bg-[#111111] text-white'
                  : 'bg-[#F3F4F6] text-[#6B7280]'
              }`}
              style={{ fontSize: '14px' }}
            >
              <Icon size={16} strokeWidth={2} />
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
