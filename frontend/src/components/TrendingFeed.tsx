import React from 'react';
import { Search } from 'lucide-react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { StyleFeedCard } from './StyleFeedCard';

const trendingStyles = [
  {
    id: 1,
    name: '허쉬컷',
    salon: '모던 엘레강스',
    tags: ['#펌', '#데일리'],
    imageUrl: 'https://images.unsplash.com/photo-1676083192960-2a4873858487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBoYWlyc3R5bGUlMjB3b21hbnxlbnwxfHx8fDE3NjQ3NzE0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '자연스러운 허쉬컷 스타일',
    height: 320
  },
  {
    id: 2,
    name: '쇼트 볼드 컷',
    salon: '럭스 스튜디오',
    tags: ['#단발', '#시크'],
    imageUrl: 'https://images.unsplash.com/photo-1512068608581-c077c7e24faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9ydCUyMGhhaXJjdXQlMjBzdHlsZXxlbnwxfHx8fDE3NjQ3NzE0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '시크한 쇼트 볼드 스타일',
    height: 380
  },
  {
    id: 3,
    name: '웨이브 펌',
    salon: '디자이너 컷',
    tags: ['#펌', '#웨이브'],
    imageUrl: 'https://images.unsplash.com/photo-1605180427725-95e306fc0e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJtJTIwaGFpcnN0eWxlfGVufDF8fHx8MTc2NDc3MTQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '자연스러운 웨이브 펌 스타일',
    height: 360
  },
  {
    id: 4,
    name: '트렌디 컬러',
    salon: '컬러 아트',
    tags: ['#염색', '#트렌디'],
    imageUrl: 'https://images.unsplash.com/photo-1763989723931-6373e895c91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBoYWlyJTIwY29sb3J8ZW58MXx8fHwxNzY0NzcxNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '트렌디한 컬러 스타일',
    height: 340
  },
  {
    id: 5,
    name: '롱 레이어드',
    salon: '미니멀 뷰티',
    tags: ['#긴머리', '#레이어드'],
    imageUrl: 'https://images.unsplash.com/photo-1740448868388-9513cf334878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwaGFpciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDc3MTQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '롱 레이어드 스타일',
    height: 400
  },
  {
    id: 6,
    name: '보브 컷',
    salon: '스타일 하우스',
    tags: ['#보브', '#클래식'],
    imageUrl: 'https://images.unsplash.com/photo-1608347183661-cbc3ecf769ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2IlMjBoYWlyY3V0JTIwd29tYW58ZW58MXx8fHwxNzY0NzcxNDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '클래식 보브 스타일',
    height: 350
  },
  {
    id: 7,
    name: '컬리 스타일',
    salon: '퓨어 살롱',
    tags: ['#컬', '#볼륨'],
    imageUrl: 'https://images.unsplash.com/photo-1666303895552-48311202f29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJseSUyMGhhaXIlMjBzdHlsZXxlbnwxfHx8fDE3NjQ2NzM1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '컬리 볼륨 스타일',
    height: 370
  },
  {
    id: 8,
    name: '슬릭 백',
    salon: '어반 스타일',
    tags: ['#슬릭', '#모던'],
    imageUrl: 'https://images.unsplash.com/photo-1713181215534-3b46c62e2018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMGhhaXIlMjBzdHlsZXxlbnwxfHx8fDE3NjQ3NzE0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: '슬릭 백 모던 스타일',
    height: 330
  }
];

interface TrendingFeedProps {
  onStyleClick?: (style: any) => void;
}

export function TrendingFeed({ onStyleClick }: TrendingFeedProps) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-4 pt-2">
        <h2 className="text-[#111111]" style={{ fontSize: '18px' }}>
          지금 뜨는 스타일
        </h2>
        <button className="p-2">
          <Search size={22} className="text-[#111111]" strokeWidth={1.5} />
        </button>
      </div>
      
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2 }}>
        <Masonry gutter="10px">
          {trendingStyles.map((style) => (
            <StyleFeedCard 
              key={style.id} 
              style={style} 
              onClick={() => onStyleClick && onStyleClick(style)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
