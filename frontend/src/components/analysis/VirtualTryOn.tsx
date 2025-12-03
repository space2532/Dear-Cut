import React, { useState } from 'react';
import { StyleCard } from './StyleCard';

const hairstyles = [
  {
    id: 1,
    name: '소프트 레이어드 컷',
    image: 'https://images.unsplash.com/photo-1731951039647-94f50eea1fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXllcmVkJTIwaGFpcmN1dCUyMHdvbWFufGVufDF8fHx8MTc2NDc3MDQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: '미디엄 웨이브',
    image: 'https://images.unsplash.com/photo-1740359399407-90c42560d45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXZ5JTIwaGFpciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDc3MDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: '시크 쇼트 컷',
    image: 'https://images.unsplash.com/photo-1565537222174-2a43ca1c3462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9ydCUyMGhhaXIlMjB3b21hbnxlbnwxfHx8fDE3NjQ3NzA0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: '롱 스트레이트',
    image: 'https://images.unsplash.com/photo-1523260578934-e9318da58c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwaGFpciUyMHN0eWxlfGVufDF8fHx8MTc2NDc3MDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    name: '내추럴 컬',
    image: 'https://images.unsplash.com/photo-1657546978958-76f538211af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhaXJzdHlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDcwMTc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function VirtualTryOn() {
  const [selectedId, setSelectedId] = useState(1);
  
  return (
    <div>
      <h2 className="text-[#111111] mb-4">베스트 매칭 TOP 5</h2>
      
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {hairstyles.map((style) => (
          <StyleCard
            key={style.id}
            style={style}
            isSelected={selectedId === style.id}
            onSelect={() => setSelectedId(style.id)}
          />
        ))}
      </div>
    </div>
  );
}
