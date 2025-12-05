import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: FilterState) => void;
  initialFilters?: FilterState;
}

export interface FilterState {
  ageGroup: string | null;
  purposes: string[];
  functionalities: string[];
}

const ageOptions = ['전체', '10대', '20대', '30대'];
const purposeOptions = ['면접룩', '데이트룩', '데일리룩'];
const functionalityOptions = ['관리 편함', '빠른 스타일링', '손상 적음'];

export function FilterDrawer({ isOpen, onClose, onApply, initialFilters }: FilterDrawerProps) {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string | null>(
    initialFilters?.ageGroup || null
  );
  const [selectedPurposes, setSelectedPurposes] = useState<string[]>(
    initialFilters?.purposes || []
  );
  const [selectedFunctionalities, setSelectedFunctionalities] = useState<string[]>(
    initialFilters?.functionalities || []
  );

  if (!isOpen) return null;

  const handleReset = () => {
    setSelectedAgeGroup(null);
    setSelectedPurposes([]);
    setSelectedFunctionalities([]);
  };

  const handleApply = () => {
    onApply({
      ageGroup: selectedAgeGroup,
      purposes: selectedPurposes,
      functionalities: selectedFunctionalities
    });
    onClose();
  };

  const toggleAgeGroup = (age: string) => {
    setSelectedAgeGroup(selectedAgeGroup === age ? null : age);
  };

  const togglePurpose = (purpose: string) => {
    setSelectedPurposes(prev =>
      prev.includes(purpose)
        ? prev.filter(p => p !== purpose)
        : [...prev, purpose]
    );
  };

  const toggleFunctionality = (functionality: string) => {
    setSelectedFunctionalities(prev =>
      prev.includes(functionality)
        ? prev.filter(f => f !== functionality)
        : [...prev, functionality]
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-3xl shadow-xl animate-slide-up max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F3F4F6]">
          <h2 className="text-[#111111]" style={{ fontSize: '18px' }}>
            상세 카테고리
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors"
          >
            <X size={22} className="text-[#111111]" strokeWidth={1.5} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {/* Group 1: Age Group */}
          <div>
            <h3 className="text-[#111111] mb-3" style={{ fontSize: '16px' }}>
              연령대
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {ageOptions.map((age) => (
                <button
                  key={age}
                  onClick={() => toggleAgeGroup(age)}
                  className={`px-4 py-2.5 rounded-full whitespace-nowrap transition-all ${
                    selectedAgeGroup === age
                      ? 'bg-[#3B82F6] text-white'
                      : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
                  }`}
                  style={{ fontSize: '14px' }}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>

          {/* Group 2: Purpose/Occasion */}
          <div>
            <h3 className="text-[#111111] mb-3" style={{ fontSize: '16px' }}>
              목적/상황
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {purposeOptions.map((purpose) => (
                <button
                  key={purpose}
                  onClick={() => togglePurpose(purpose)}
                  className={`px-4 py-2.5 rounded-full whitespace-nowrap transition-all ${
                    selectedPurposes.includes(purpose)
                      ? 'bg-[#3B82F6] text-white'
                      : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
                  }`}
                  style={{ fontSize: '14px' }}
                >
                  {purpose}
                </button>
              ))}
            </div>
          </div>

          {/* Group 3: Utility/Functionality */}
          <div>
            <h3 className="text-[#111111] mb-3" style={{ fontSize: '16px' }}>
              기능성
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {functionalityOptions.map((functionality) => (
                <button
                  key={functionality}
                  onClick={() => toggleFunctionality(functionality)}
                  className={`px-4 py-2.5 rounded-full whitespace-nowrap transition-all ${
                    selectedFunctionalities.includes(functionality)
                      ? 'bg-[#3B82F6] text-white'
                      : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
                  }`}
                  style={{ fontSize: '14px' }}
                >
                  {functionality}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer - Sticky */}
        <div className="px-6 py-4 border-t border-[#F3F4F6] bg-white">
          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 px-6 py-3.5 border-2 border-[#E5E7EB] rounded-2xl text-[#6B7280] hover:bg-[#F9FAFB] transition-colors"
              style={{ fontSize: '15px' }}
            >
              필터 초기화
            </button>
            <button
              onClick={handleApply}
              className="flex-[2] px-6 py-3.5 bg-[#3B82F6] rounded-2xl text-white hover:bg-[#2563EB] transition-colors"
              style={{ fontSize: '15px' }}
            >
              필터 적용
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}