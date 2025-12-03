import React, { useState } from 'react';
import { X, Scissors, AlertCircle, Copy, Check } from 'lucide-react';

interface RequestSheetModalProps {
  reservation: {
    salonName: string;
    designer: string;
    requestSheet: {
      forDesigner: string;
      warningTip: string;
      additionalNotes: string;
    };
  };
  onClose: () => void;
}

export function RequestSheetModal({ reservation, onClose }: RequestSheetModalProps) {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = () => {
    const textToCopy = `[디자이너에게 전달 사항]\n${reservation.requestSheet.forDesigner}\n\n[주의 사항]\n${reservation.requestSheet.warningTip}\n\n[추가 요청]\n${reservation.requestSheet.additionalNotes}`;
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center">
      <div 
        className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E5E7EB] px-5 py-4 flex items-center justify-between">
          <h2 className="text-[#111111]" style={{ fontSize: '20px' }}>
            디자이너 요청서
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F3F4F6] transition-colors"
          >
            <X size={20} className="text-[#6B7280]" strokeWidth={2} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Salon & Designer Info */}
          <div className="px-4 py-3 bg-[#F9FAFB] rounded-xl">
            <p className="text-[#6B7280] mb-1" style={{ fontSize: '13px' }}>
              전달 대상
            </p>
            <p className="text-[#111111]" style={{ fontSize: '15px' }}>
              {reservation.salonName} • {reservation.designer}
            </p>
          </div>
          
          {/* Request Sheet Content (matching StyleDetail) */}
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
              <h3 className="text-[#111111]" style={{ fontSize: '17px' }}>
                디자이너에게 전달
              </h3>
            </div>
            
            {/* Main Content */}
            <div className="space-y-4">
              <p className="text-[#374151] leading-relaxed" style={{ fontSize: '14px' }}>
                {reservation.requestSheet.forDesigner}
              </p>
              
              {/* Warning Box */}
              <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-xl p-3 flex gap-2">
                <AlertCircle size={16} className="text-[#F59E0B] flex-shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <p className="text-[#92400E]" style={{ fontSize: '13px' }}>
                    <strong>주의:</strong> {reservation.requestSheet.warningTip}
                  </p>
                </div>
              </div>
              
              {/* Additional Notes */}
              <div className="pt-2 border-t border-[#E5E7EB]">
                <p className="text-[#6B7280] mb-2" style={{ fontSize: '12px' }}>
                  추가 요청사항
                </p>
                <p className="text-[#374151]" style={{ fontSize: '14px' }}>
                  {reservation.requestSheet.additionalNotes}
                </p>
              </div>
            </div>
          </div>
          
          {/* Info Notice */}
          <div className="px-4 py-3 bg-[#EFF6FF] rounded-xl">
            <p className="text-[#3B82F6]" style={{ fontSize: '13px' }}>
              💡 이 요청서는 디자이너에게 전달되었습니다. 예약 당일 디자이너와 상담을 통해 최종 스타일을 결정하게 됩니다.
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-[#E5E7EB] px-5 py-4 space-y-2">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`w-full py-3 rounded-full flex items-center justify-center gap-2 transition-all ${
              isCopied 
                ? 'bg-[#10B981] text-white' 
                : 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
            }`}
            style={{ fontSize: '15px' }}
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
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-[#F3F4F6] text-[#111111] rounded-full hover:bg-[#E5E7EB] transition-colors"
            style={{ fontSize: '15px' }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
