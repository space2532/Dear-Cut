import React from 'react';
import { RefreshCw } from 'lucide-react';

interface BottomActionsProps {
  hasSelection: boolean;
  onRegenerate: () => void;
  onSave: () => void;
  isRegenerating: boolean;
}

export function BottomActions({ hasSelection, onRegenerate, onSave, isRegenerating }: BottomActionsProps) {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white max-w-md mx-auto border-t border-[#F3F4F6] px-5 py-4"
      style={{ 
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.04)'
      }}
    >
      <div className="flex gap-3">
        {/* Regenerate Button */}
        <button
          onClick={onRegenerate}
          disabled={isRegenerating}
          className="flex-1 bg-white border border-[#E5E7EB] text-[#111111] px-5 py-3.5 rounded-full hover:bg-[#F9FAFB] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          style={{ fontSize: '15px' }}
        >
          <RefreshCw size={18} strokeWidth={2} />
          다시 생성
        </button>
        
        {/* Save Button */}
        <button
          onClick={onSave}
          disabled={!hasSelection || isRegenerating}
          className={`flex-[2] px-5 py-3.5 rounded-full transition-all ${
            hasSelection && !isRegenerating
              ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
              : 'bg-[#E5E7EB] text-[#9CA3AF]'
          }`}
          style={{ 
            fontSize: '15px',
            boxShadow: hasSelection ? '0 4px 16px rgba(59, 130, 246, 0.24)' : 'none'
          }}
        >
          이 스타일 저장하기
        </button>
      </div>
    </div>
  );
}
