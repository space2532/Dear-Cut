import React from 'react';
import { Lightbulb } from 'lucide-react';

export function DesignerTips() {
  return (
    <div 
      className="bg-[#EFF6FF] rounded-3xl p-5"
      style={{ 
        border: '1px solid #DBEAFE'
      }}
    >
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <Lightbulb size={24} className="text-[#3B82F6]" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="text-[#111111] mb-2">스타일링 팁</h3>
          <p className="text-[#374151]" style={{ fontSize: '14px', lineHeight: '1.6' }}>
            모발 손상도가 중간 수준이므로, 이 스타일을 유지하려면 
            매일 헤어 에센스를 사용하고 주 1회 트리트먼트가 필요합니다. 
            열 기구 사용 시 반드시 열 보호제를 먼저 발라주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
