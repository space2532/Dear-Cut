import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface CustomGenerationHeaderProps {
  onBack: () => void;
}

export function CustomGenerationHeader({ onBack }: CustomGenerationHeaderProps) {
  return (
    <header className="px-5 py-4 flex items-center gap-3 border-b border-[#F3F4F6]">
      <button 
        onClick={onBack}
        className="p-1 hover:bg-[#F3F4F6] rounded-lg transition-colors"
      >
        <ArrowLeft size={24} className="text-[#111111]" strokeWidth={2} />
      </button>
      <h1 className="text-[#111111]" style={{ fontSize: '20px' }}>
        Create Your Style
      </h1>
    </header>
  );
}
