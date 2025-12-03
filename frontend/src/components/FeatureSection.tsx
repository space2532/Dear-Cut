import React from 'react';
import { Scan, Sparkles, Calendar } from 'lucide-react';

const features = [
  { icon: Scan, label: 'AI 스캔' },
  { icon: Sparkles, label: '가상 체험' },
  { icon: Calendar, label: '자동 예약' }
];

export function FeatureSection() {
  return (
    <div className="mb-10">
      <h2 className="px-6 mb-4 text-[#111111]">이용 방법</h2>
      
      <div className="px-6 flex gap-3 overflow-x-auto no-scrollbar">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex-shrink-0 bg-[#F3F4F6] rounded-3xl p-6 flex flex-col items-center justify-center gap-3"
            style={{ 
              width: '120px',
              height: '120px'
            }}
          >
            <feature.icon size={32} className="text-[#3B82F6]" strokeWidth={1.5} />
            <span className="text-[#111111] text-center" style={{ fontSize: '13px' }}>
              {feature.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
