import React from 'react';
import { SalonCardDetail } from './SalonCardDetail';

const salons = [
  {
    id: 1,
    name: '모던 엘레강스',
    rating: 4.9,
    matchPercentage: 95,
    matchStyle: '소프트 펌',
    images: [
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2NDc3NTEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1595284843477-f609b0f91e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NzMwMzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    tags: ['레이어드 컷 전문', '다이슨 사용'],
    distance: '0.5km',
    priceRange: '$$',
    location: '강남구 역삼동'
  },
  {
    id: 2,
    name: '럭스 스튜디오',
    rating: 4.8,
    matchPercentage: 92,
    matchStyle: '소프트 펌',
    images: [
      'https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2NDc1NjgwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2NDc3NTEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    tags: ['펌 전문', '프리미엄 제품'],
    distance: '0.8km',
    priceRange: '$$$',
    location: '서초구 서초동'
  },
  {
    id: 3,
    name: '퓨어 살롱',
    rating: 4.7,
    matchPercentage: 88,
    matchStyle: '소프트 펌',
    images: [
      'https://images.unsplash.com/photo-1595284843477-f609b0f91e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NzMwMzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2NDc1NjgwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    tags: ['컬 전문', '친환경 제품'],
    distance: '1.2km',
    priceRange: '$$',
    location: '마포구 합정동'
  }
];

interface SalonListViewProps {
  activeFilter: string;
}

export function SalonListView({ activeFilter }: SalonListViewProps) {
  return (
    <div className="px-5 pb-6 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[#111111]" style={{ fontSize: '18px' }}>
          추천 헤어샵
        </h2>
        <p className="text-[#9CA3AF]" style={{ fontSize: '14px' }}>
          {salons.length}개
        </p>
      </div>
      
      {salons.map((salon) => (
        <SalonCardDetail key={salon.id} salon={salon} />
      ))}
    </div>
  );
}
