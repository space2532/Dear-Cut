import React from 'react';
import { Loader2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface GeneratedResultProps {
  imageUrl: string;
  onConfirm: () => void;
  isGenerating: boolean;
}

export function GeneratedResult({ imageUrl, onConfirm, isGenerating }: GeneratedResultProps) {
  if (isGenerating) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 size={40} className="text-[#3B82F6] animate-spin mb-4" />
        <p className="text-[#9CA3AF]" style={{ fontSize: '14px' }}>
          AI가 스타일을 생성하고 있습니다...
        </p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center">
      {/* Generated Image */}
      <div 
        className="w-full aspect-square rounded-3xl overflow-hidden mb-6"
        style={{ 
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          maxWidth: '380px'
        }}
      >
        <ImageWithFallback
          src={imageUrl}
          alt="Generated hairstyle"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Confirm Button */}
      <button
        onClick={onConfirm}
        className="w-full bg-[#3B82F6] text-white px-6 py-4 rounded-full hover:bg-[#2563EB] transition-colors"
        style={{ 
          fontSize: '16px',
          boxShadow: '0 4px 16px rgba(59, 130, 246, 0.24)',
          maxWidth: '380px'
        }}
      >
        확인 및 저장
      </button>
    </div>
  );
}
