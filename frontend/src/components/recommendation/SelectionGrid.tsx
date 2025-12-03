import React from 'react';
import { SelectableImageCard } from './SelectableImageCard';
import { Loader2 } from 'lucide-react';

interface Style {
  id: number;
  name: string;
  imageUrl: string;
}

interface SelectionGridProps {
  styles: Style[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  isRegenerating: boolean;
}

export function SelectionGrid({ styles, selectedId, onSelect, isRegenerating }: SelectionGridProps) {
  if (isRegenerating) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-20">
        <Loader2 size={40} className="text-[#3B82F6] animate-spin mb-4" />
        <p className="text-[#9CA3AF]" style={{ fontSize: '14px' }}>
          AI가 새로운 스타일을 생성하고 있습니다...
        </p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-2 gap-3">
      {styles.map((style) => (
        <SelectableImageCard
          key={style.id}
          style={style}
          isSelected={selectedId === style.id}
          onSelect={() => onSelect(style.id)}
        />
      ))}
    </div>
  );
}
