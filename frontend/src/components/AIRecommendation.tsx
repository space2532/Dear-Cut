import React, { useState } from 'react';
import { AIRecommendationHeader } from './recommendation/AIRecommendationHeader';
import { SelectionGrid } from './recommendation/SelectionGrid';
import { BottomActions } from './recommendation/BottomActions';

const recommendedStyles = [
  {
    id: 1,
    name: '소프트 레이어드',
    imageUrl: 'https://images.unsplash.com/photo-1734092916915-d16146c0726c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwaGFpcnN0eWxlJTIwZnJvbnR8ZW58MXx8fHwxNzY0Nzc0MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: '쇼트 보브',
    imageUrl: 'https://images.unsplash.com/photo-1607032051915-c42d888e0a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNob3J0JTIwaGFpciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDc3NDI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: '롱 스트레이트',
    imageUrl: 'https://images.unsplash.com/photo-1585215173785-7f3c2252c25a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGxvbmclMjBoYWlyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0Nzc0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: '웨이브 미디엄',
    imageUrl: 'https://images.unsplash.com/photo-1676665282235-ab8b5a37d681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdhdnklMjBoYWlyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0Nzc0MjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

interface AIRecommendationProps {
  onBack: () => void;
}

export function AIRecommendation({ onBack }: AIRecommendationProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isRegenerating, setIsRegenerating] = useState(false);
  
  const handleRegenerate = () => {
    setIsRegenerating(true);
    setSelectedId(null);
    // Simulate regeneration
    setTimeout(() => {
      setIsRegenerating(false);
    }, 2000);
  };
  
  const handleSave = () => {
    if (selectedId) {
      alert('스타일이 저장되었습니다!');
      onBack();
    }
  };
  
  return (
    <div className="flex flex-col h-screen bg-white max-w-md mx-auto">
      <AIRecommendationHeader onBack={onBack} />
      
      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 pb-28">
        <SelectionGrid
          styles={recommendedStyles}
          selectedId={selectedId}
          onSelect={setSelectedId}
          isRegenerating={isRegenerating}
        />
      </div>
      
      {/* Fixed Bottom Actions */}
      <BottomActions
        hasSelection={selectedId !== null}
        onRegenerate={handleRegenerate}
        onSave={handleSave}
        isRegenerating={isRegenerating}
      />
    </div>
  );
}
