import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroCardProps {
  onStartAnalysis: () => void;
}

export function HeroCard({ onStartAnalysis }: HeroCardProps) {
  return (
    <div className="px-5 mb-6">
      <div 
        className="relative rounded-2xl overflow-hidden"
        style={{ 
          aspectRatio: '2/1',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)'
        }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763471388312-8bf64ca4e88b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJlYXV0eSUyMGdyYWRpZW50fGVufDF8fHx8MTc2NDc2OTg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Beauty gradient"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/50 via-[#3B82F6]/40 to-[#06B6D4]/40" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h2 className="text-white mb-1.5" style={{ fontSize: '24px', lineHeight: '1.3' }}>
            Discover your true style
          </h2>
          <p className="text-white/90 mb-5" style={{ fontSize: '14px' }}>
            AI 얼굴 분석 & 가상 체험
          </p>
          
          <button 
            onClick={onStartAnalysis}
            className="bg-white text-[#3B82F6] px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
            style={{ 
              fontSize: '15px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
          >
            AI 분석 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}
