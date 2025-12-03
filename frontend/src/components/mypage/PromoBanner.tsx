import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

export function PromoBanner() {
  return (
    <div className="px-5 pb-6">
      <button
        className="w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-2xl p-5 text-left hover:opacity-90 transition-opacity"
        style={{
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
        }}
      >
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
            <Gift size={24} className="text-white" strokeWidth={2} />
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-white mb-1" style={{ fontSize: '16px' }}>
              친구 초대하고 쿠폰 받기
            </h3>
            <p className="text-white/80" style={{ fontSize: '13px' }}>
              친구가 가입하면 5,000원 할인 쿠폰 제공
            </p>
          </div>
          
          {/* Arrow */}
          <ArrowRight size={20} className="text-white flex-shrink-0" strokeWidth={2} />
        </div>
      </button>
    </div>
  );
}
