import React from 'react';
import { ArrowLeft } from 'lucide-react';

export function AnalysisHeader() {
  return (
    <header 
      className="sticky top-0 bg-white z-10 px-6 py-4 flex items-center gap-4"
      style={{ 
        borderBottom: '1px solid #F3F4F6'
      }}
    >
      <button className="p-2 -ml-2">
        <ArrowLeft size={24} className="text-[#111111]" strokeWidth={1.5} />
      </button>
      <h1 className="text-[#111111]">AI 분석 결과</h1>
    </header>
  );
}
