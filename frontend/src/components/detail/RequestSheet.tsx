import React, { useState } from 'react';
import { Scissors, Copy, Check, AlertCircle } from 'lucide-react';

interface RequestSheetProps {
  content: {
    forDesigner: string;
    warningTip: string;
    additionalNotes: string;
  };
}

export function RequestSheet({ content }: RequestSheetProps) {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = () => {
    const textToCopy = `[디자이너에게 전달 사항]\n${content.forDesigner}\n\n[주의 사항]\n${content.warningTip}\n\n[추가 요청]\n${content.additionalNotes}`;
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  return (
    <div 
      className="bg-[#F9FAFB] rounded-2xl p-5 border border-[#E5E7EB]"
      style={{
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-[#3B82F6]/10 rounded-full flex items-center justify-center">
          <Scissors size={16} className="text-[#3B82F6]" strokeWidth={2} />
        </div>
        <h2 className="text-[#111111]" style={{ fontSize: '17px' }}>
          디자이너에게 전달
        </h2>
      </div>
      
      {/* Main Content */}
      <div className="space-y-4 mb-4">
        <p className="text-[#374151] leading-relaxed" style={{ fontSize: '14px' }}>
          {content.forDesigner}
        </p>
        
        {/* Warning Box */}
        <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-xl p-3 flex gap-2">
          <AlertCircle size={16} className="text-[#F59E0B] flex-shrink-0 mt-0.5" strokeWidth={2} />
          <div>
            <p className="text-[#92400E]" style={{ fontSize: '13px' }}>
              <strong>주의:</strong> {content.warningTip}
            </p>
          </div>
        </div>
        
        {/* Additional Notes */}
        <div className="pt-2 border-t border-[#E5E7EB]">
          <p className="text-[#6B7280] mb-2" style={{ fontSize: '12px' }}>
            추가 요청사항
          </p>
          <p className="text-[#374151]" style={{ fontSize: '14px' }}>
            {content.additionalNotes}
          </p>
        </div>
      </div>
      
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
          isCopied 
            ? 'bg-[#10B981] text-white' 
            : 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
        }`}
        style={{ fontSize: '14px' }}
      >
        {isCopied ? (
          <>
            <Check size={18} strokeWidth={2} />
            복사 완료!
          </>
        ) : (
          <>
            <Copy size={18} strokeWidth={2} />
            전체 내용 복사하기
          </>
        )}
      </button>
    </div>
  );
}
