import React from 'react';
import { Plus } from 'lucide-react';

const filters = [
  { id: 'all', label: '전체' },
  { id: 'favorites', label: '즐겨찾기' }
] as const;

interface Group {
  id: string;
  name: string;
  styleIds: number[];
}

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onAddGroup: () => void;
  groups: Group[];
}

export function FilterBar({ activeFilter, onFilterChange, onAddGroup, groups }: FilterBarProps) {
  return (
    <div className="px-5 mb-4">
      <div className="flex gap-2 items-center overflow-x-auto pb-2">
        {/* Default Filters */}
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-2 rounded-full transition-colors flex-shrink-0 ${
              activeFilter === filter.id
                ? 'bg-[#111111] text-white'
                : 'bg-[#F3F4F6] text-[#6B7280]'
            }`}
            style={{ fontSize: '14px' }}
          >
            {filter.label}
          </button>
        ))}
        
        {/* Group Filters */}
        {groups.map((group) => (
          <button
            key={group.id}
            onClick={() => onFilterChange(group.id)}
            className={`px-4 py-2 rounded-full transition-colors flex-shrink-0 ${
              activeFilter === group.id
                ? 'bg-[#111111] text-white'
                : 'bg-[#F3F4F6] text-[#6B7280]'
            }`}
            style={{ fontSize: '14px' }}
          >
            {group.name}
          </button>
        ))}
        
        {/* Add Group Button */}
        <button
          onClick={onAddGroup}
          className="w-9 h-9 bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#E5E7EB] transition-colors flex-shrink-0"
        >
          <Plus size={20} className="text-[#111111]" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
