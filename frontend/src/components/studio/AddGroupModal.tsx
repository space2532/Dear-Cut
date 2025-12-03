import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface AddGroupModalProps {
  onClose: () => void;
  onAddGroup: (groupName: string, selectedStyles: number[]) => void;
  availableStyles: Array<{ id: number; name: string; imageUrl: string }>;
}

export function AddGroupModal({ onClose, onAddGroup, availableStyles }: AddGroupModalProps) {
  const [groupName, setGroupName] = useState('');
  const [selectedStyles, setSelectedStyles] = useState<number[]>([]);
  
  const handleToggleStyle = (styleId: number) => {
    setSelectedStyles(prev => 
      prev.includes(styleId) 
        ? prev.filter(id => id !== styleId)
        : [...prev, styleId]
    );
  };
  
  const handleSubmit = () => {
    if (groupName.trim() && selectedStyles.length > 0) {
      onAddGroup(groupName, selectedStyles);
      onClose();
    }
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
            새 그룹 만들기
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F3F4F6] transition-colors"
          >
            <X size={20} className="text-[#6B7280]" strokeWidth={2} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-5 space-y-6">
          {/* Group Name Input */}
          <div>
            <label className="block text-[#6B7280] mb-2" style={{ fontSize: '13px' }}>
              그룹 이름
            </label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="예: 봄 스타일, 단발 모음"
              className="w-full px-4 py-3 bg-[#F3F4F6] rounded-xl outline-none text-[#111111] placeholder:text-[#9CA3AF] focus:bg-[#E5E7EB] transition-colors"
              style={{ fontSize: '15px' }}
            />
          </div>
          
          {/* Style Selection */}
          <div>
            <label className="block text-[#6B7280] mb-3" style={{ fontSize: '13px' }}>
              스타일 선택 ({selectedStyles.length}개)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {availableStyles.map((style) => {
                const isSelected = selectedStyles.includes(style.id);
                return (
                  <button
                    key={style.id}
                    onClick={() => handleToggleStyle(style.id)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      isSelected 
                        ? 'border-[#3B82F6] scale-95' 
                        : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={style.imageUrl} 
                      alt={style.name}
                      className="w-full h-full object-cover"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-[#3B82F6]/20 flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center">
                          <Check size={16} className="text-white" strokeWidth={3} />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                      <p className="text-white text-xs truncate">{style.name}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-[#E5E7EB] px-5 py-4">
          <button
            onClick={handleSubmit}
            disabled={!groupName.trim() || selectedStyles.length === 0}
            className={`w-full px-4 py-3 rounded-full transition-colors ${
              groupName.trim() && selectedStyles.length > 0
                ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
                : 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'
            }`}
            style={{ fontSize: '15px' }}
          >
            그룹 만들기
          </button>
        </div>
      </div>
    </div>
  );
}
