import React from 'react';

export function BottomActionBar() {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white max-w-md mx-auto px-6 py-4"
      style={{ 
        borderTop: '1px solid #F3F4F6',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.05)'
      }}
    >
      <button 
        className="w-full bg-[#3B82F6] text-white rounded-full hover:bg-[#2563EB] transition-colors"
        style={{ 
          height: '56px',
          boxShadow: '0 4px 16px rgba(59, 130, 246, 0.24)'
        }}
      >
        이 스타일로 예약하기
      </button>
    </div>
  );
}
