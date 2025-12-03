import React from 'react';
import { Plus, Sparkles } from 'lucide-react';

interface ActionAreaProps {
  onCustomCreate: () => void;
  onAIRecommend: () => void;
}

export function ActionArea({ onCustomCreate, onAIRecommend }: ActionAreaProps) {
  return (
    <div className="px-5 pb-6 space-y-4">
      {/* Custom Create Button */}
      <button 
        onClick={onCustomCreate}
        className="w-full bg-white border border-[#E5E7EB] rounded-2xl p-4 flex items-center justify-between hover:border-[#3B82F6] transition-colors"
        style={{ 
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F3F4F6] rounded-full flex items-center justify-center">
            <Plus size={20} className="text-[#111111]" strokeWidth={2} />
          </div>
          <div className="text-left">
            <p className="text-[#111111]" style={{ fontSize: '16px' }}>
              커스텀 생성
            </p>
            <p className="text-[#9CA3AF]" style={{ fontSize: '13px' }}>
              원하는 키워드로 스타일 만들기
            </p>
          </div>
        </div>
      </button>
      
      {/* AI Recommend Button */}
      <button 
        onClick={onAIRecommend}
        className="w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-2xl p-4 flex items-center justify-between hover:opacity-90 transition-opacity"
        style={{ 
          boxShadow: '0 4px 16px rgba(59, 130, 246, 0.24)'
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles size={20} className="text-white" strokeWidth={2} />
          </div>
          <div className="text-left">
            <p className="text-white" style={{ fontSize: '16px' }}>
              AI 추천
            </p>
            <p className="text-white/80" style={{ fontSize: '13px' }}>
              얼굴형에 맞는 스타일 자동 생성
            </p>
          </div>
        </div>
        <div className="bg-[#F59E0B] px-2 py-0.5 rounded-full">
          <span className="text-white" style={{ fontSize: '11px' }}>
            NEW
          </span>
        </div>
      </button>
    </div>
  );
}
