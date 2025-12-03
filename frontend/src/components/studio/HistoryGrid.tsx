import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { StyleHistoryCard } from './StyleHistoryCard';

const historyStyles = [
  {
    id: 1,
    name: '소프트 레이어드 컷',
    date: '2024.11.28',
    imageUrl: 'https://images.unsplash.com/photo-1731951039647-94f50eea1fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXllcmVkJTIwaGFpcmN1dCUyMHdvbWFufGVufDF8fHx8MTc2NDc3MDQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['#레이어드', '#소프트'],
    description: '소프트한 레이어드 컷 스타일',
    status: 'good',
    isFavorite: true,
    height: 340
  },
  {
    id: 2,
    name: '미디엄 웨이브',
    date: '2024.11.25',
    imageUrl: 'https://images.unsplash.com/photo-1740359399407-90c42560d45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXZ5JTIwaGFpciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDc3MDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['#웨이브', '#미디엄'],
    description: '미디엄 웨이브 스타일',
    status: 'maintenance',
    isFavorite: false,
    height: 380
  },
  {
    id: 3,
    name: '시크 쇼트 컷',
    date: '2024.11.20',
    imageUrl: 'https://images.unsplash.com/photo-1565537222174-2a43ca1c3462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9ydCUyMGhhaXIlMjB3b21hbnxlbnwxfHx8fDE3NjQ3NzA0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['#쇼트', '#시크'],
    description: '시크한 쇼트 컷 스타일',
    status: 'good',
    isFavorite: true,
    height: 360
  },
  {
    id: 4,
    name: '롱 스트레이트',
    date: '2024.11.18',
    imageUrl: 'https://images.unsplash.com/photo-1523260578934-e9318da58c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwaGFpciUyMHN0eWxlfGVufDF8fHx8MTc2NDc3MDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['#롱헤어', '#스트레이트'],
    description: '롱 스트레이트 스타일',
    status: 'good',
    isFavorite: false,
    height: 400
  },
  {
    id: 5,
    name: '내추럴 컬',
    date: '2024.11.15',
    imageUrl: 'https://images.unsplash.com/photo-1657546978958-76f538211af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhaXJzdHlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDcwMTc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['#컬', '#내추럴'],
    description: '내추럴 컬 스타일',
    status: 'maintenance',
    isFavorite: true,
    height: 350
  },
  {
    id: 6,
    name: '허쉬컷',
    date: '2024.11.10',
    imageUrl: 'https://images.unsplash.com/photo-1676083192960-2a4873858487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBoYWlyc3R5bGUlMjB3b21hbnxlbnwxfHx8fDE3NjQ3NzE0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['#허쉬컷', '#펌'],
    description: '허쉬컷 스타일',
    status: 'good',
    isFavorite: false,
    height: 320
  }
];

interface Group {
  id: string;
  name: string;
  styleIds: number[];
}

interface HistoryGridProps {
  activeFilter: string;
  onStyleClick?: (style: any) => void;
  groups: Group[];
  onToggleStyleInGroup: (groupId: string, styleId: number) => void;
}

export function HistoryGrid({ activeFilter, onStyleClick, groups, onToggleStyleInGroup }: HistoryGridProps) {
  const filteredStyles = historyStyles.filter((style) => {
    if (activeFilter === 'favorites') return style.isFavorite;
    
    // Check if activeFilter is a group ID
    const group = groups.find(g => g.id === activeFilter);
    if (group) {
      return group.styleIds.includes(style.id);
    }
    
    return true;
  });
  
  if (filteredStyles.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-[#9CA3AF]">저장된 스타일이 없습니다</p>
      </div>
    );
  }
  
  return (
    <div className="px-5 pb-6">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2 }}>
        <Masonry gutter="10px">
          {filteredStyles.map((style) => (
            <StyleHistoryCard 
              key={style.id} 
              style={style}
              onClick={() => onStyleClick && onStyleClick(style)}
              groups={groups}
              onToggleStyleInGroup={onToggleStyleInGroup}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
