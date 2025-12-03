import React from 'react';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroSectionProps {
  imageUrl: string;
  name: string;
  tags: string[];
  onBack: () => void;
}

export function HeroSection({ imageUrl, name, tags, onBack }: HeroSectionProps) {
  const handleDownload = () => {
    alert('이미지를 다운로드합니다');
  };
  
  const handleShare = () => {
    alert('공유하기');
  };
  
  return (
    <div>
      {/* Image with Back Button Overlay */}
      <div className="relative">
        <div className="w-full aspect-[3/4] overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Back Button Overlay */}
        <button 
          onClick={onBack}
          className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
        >
          <ArrowLeft size={20} className="text-[#111111]" strokeWidth={2} />
        </button>
      </div>
      
      {/* Title Section */}
      <div className="px-5 py-6">
        <div className="flex items-start justify-between mb-3">
          <h1 className="text-[#111111] flex-1" style={{ fontSize: '24px' }}>
            {name}
          </h1>
          <div className="flex gap-2 ml-3">
            <button 
              onClick={handleDownload}
              className="w-9 h-9 bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
            >
              <Download size={18} className="text-[#111111]" strokeWidth={2} />
            </button>
            <button 
              onClick={handleShare}
              className="w-9 h-9 bg-[#F3F4F6] rounded-full flex items-center justify-center hover:bg-[#E5E7EB] transition-colors"
            >
              <Share2 size={18} className="text-[#111111]" strokeWidth={2} />
            </button>
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 bg-[#F3F4F6] text-[#6B7280] rounded-full"
              style={{ fontSize: '13px' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
