import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface AIRecommendationHeaderProps {
  onBack: () => void;
}

export function AIRecommendationHeader({ onBack }: AIRecommendationHeaderProps) {
  return (
    <header className="px-5 py-4 flex items-center gap-3 border-b border-[#F3F4F6]">
      <button 
        onClick={onBack}
        className="p-1 hover:bg-[#F3F4F6] rounded-lg transition-colors"
      >
        <ArrowLeft size={24} className="text-[#111111]" strokeWidth={2} />
      </button>
      <div>
        <h1 className="text-[#111111]" style={{ fontSize: '20px' }}>
          AI's Top 4 Picks for You
        </h1>
        <p className="text-[#9CA3AF]" style={{ fontSize: '13px' }}>
          당신에게 가장 잘 어울리는 스타일을 선택하세요
        </p>
      </div>
    </header>
  );
}
