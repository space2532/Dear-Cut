import React from 'react';
import { Sparkles } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 rounded-full flex items-center justify-center mb-4">
        <Sparkles size={32} className="text-[#3B82F6]" strokeWidth={1.5} />
      </div>
      <h2 className="text-[#111111] mb-2" style={{ fontSize: '18px' }}>
        원하는 스타일을 설명해주세요
      </h2>
      <p className="text-[#9CA3AF]" style={{ fontSize: '14px' }}>
        AI가 당신만의 헤어스타일을 생성합니다
      </p>
    </div>
  );
}
