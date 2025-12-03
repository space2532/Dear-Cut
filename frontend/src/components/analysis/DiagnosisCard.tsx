import React from 'react';
import { UserCircle } from 'lucide-react';

export function DiagnosisCard() {
  return (
    <div 
      className="bg-[#F9FAFB] rounded-3xl p-6"
      style={{ 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
      }}
    >
      <h2 className="text-[#111111] mb-5">얼굴형 & 모발 진단</h2>
      
      {/* Face Shape */}
      <div className="mb-5">
        <div className="flex items-center gap-3 mb-2">
          <UserCircle size={24} className="text-[#3B82F6]" strokeWidth={1.5} />
          <div>
            <p className="text-[#6B7280]" style={{ fontSize: '13px' }}>얼굴형</p>
            <p className="text-[#111111]">계란형</p>
          </div>
        </div>
      </div>
      
      {/* Hair Condition */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[#6B7280]" style={{ fontSize: '13px' }}>모발 손상도</p>
          <p className="text-[#F59E0B]" style={{ fontSize: '13px' }}>중간 (60%)</p>
        </div>
        <div className="w-full h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#F59E0B] rounded-full transition-all duration-300"
            style={{ width: '60%' }}
          />
        </div>
      </div>
      
      {/* Summary */}
      <div className="pt-4 border-t border-[#E5E7EB]">
        <p className="text-[#111111]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
          계란형 얼굴은 볼륨감 있는 스타일과 잘 어울립니다. 
          다만 모발 손상이 있어 집중 케어가 필요합니다.
        </p>
      </div>
    </div>
  );
}
