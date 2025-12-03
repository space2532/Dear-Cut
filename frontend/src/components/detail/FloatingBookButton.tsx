import React from 'react';
import { Calendar } from 'lucide-react';

interface FloatingBookButtonProps {
  onBook: () => void;
}

export function FloatingBookButton({ onBook }: FloatingBookButtonProps) {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white max-w-md mx-auto border-t border-[#F3F4F6] px-5 py-4"
      style={{ 
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.06)'
      }}
    >
      <button
        onClick={onBook}
        className="w-full bg-[#3B82F6] text-white px-6 py-4 rounded-full hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-2"
        style={{ 
          fontSize: '16px',
          boxShadow: '0 4px 16px rgba(59, 130, 246, 0.24)'
        }}
      >
        <Calendar size={20} strokeWidth={2} />
        요청서와 함께 예약하기
      </button>
    </div>
  );
}
