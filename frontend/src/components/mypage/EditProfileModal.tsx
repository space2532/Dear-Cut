import React, { useState } from 'react';
import { X, Camera } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface EditProfileModalProps {
  onClose: () => void;
  currentName: string;
  currentAvatar: string;
  onSave: (name: string, avatar: string) => void;
}

export function EditProfileModal({ onClose, currentName, currentAvatar, onSave }: EditProfileModalProps) {
  const [name, setName] = useState(currentName);
  const [avatar] = useState(currentAvatar);
  
  const handleSave = () => {
    if (name.trim()) {
      onSave(name, avatar);
      onClose();
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center">
      <div 
        className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-[#E5E7EB] px-5 py-4 flex items-center justify-between">
          <h2 className="text-[#111111]" style={{ fontSize: '20px' }}>
            프로필 편집
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F3F4F6] transition-colors"
          >
            <X size={20} className="text-[#6B7280]" strokeWidth={2} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <ImageWithFallback
                  src={avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Camera Button */}
              <button
                onClick={() => alert('프로필 사진 변경 기능은 준비 중입니다')}
                className="absolute bottom-0 right-0 w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center border-2 border-white hover:bg-[#2563EB] transition-colors"
                style={{
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                }}
              >
                <Camera size={16} className="text-white" strokeWidth={2} />
              </button>
            </div>
            
            <p className="text-[#9CA3AF] mt-3 text-center" style={{ fontSize: '13px' }}>
              사진을 터치하여 변경하세요
            </p>
          </div>
          
          {/* Name Input */}
          <div>
            <label className="block text-[#6B7280] mb-2" style={{ fontSize: '13px' }}>
              이름
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요"
              className="w-full px-4 py-3 bg-[#F3F4F6] rounded-xl outline-none text-[#111111] placeholder:text-[#9CA3AF] focus:bg-[#E5E7EB] transition-colors"
              style={{ fontSize: '15px' }}
            />
          </div>
          
          {/* Face Shape Info */}
          <div className="bg-[#F9FAFB] rounded-xl p-4 border border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white" style={{ fontSize: '16px' }}>
                  AI
                </span>
              </div>
              <div className="flex-1">
                <p className="text-[#6B7280] mb-0.5" style={{ fontSize: '12px' }}>
                  AI 분석 결과
                </p>
                <p className="text-[#111111]" style={{ fontSize: '14px' }}>
                  얼굴형: <span className="text-[#3B82F6]">계란형</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-[#E5E7EB] px-5 py-4">
          <button
            onClick={handleSave}
            disabled={!name.trim()}
            className={`w-full px-4 py-3 rounded-full transition-colors ${
              name.trim()
                ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
                : 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'
            }`}
            style={{ fontSize: '15px' }}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
