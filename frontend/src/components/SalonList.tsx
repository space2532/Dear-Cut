import React from 'react';
import { SalonCard } from './SalonCard';

const salons = [
  {
    id: 1,
    name: '모던 엘레강스 스튜디오',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2NDY5ODA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['레이어드컷', '염색']
  },
  {
    id: 2,
    name: '럭스 헤어 라운지',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1759134155377-4207d89b39ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYWlyJTIwc2Fsb258ZW58MXx8fHwxNzY0NzY3OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['펌', '트리트먼트']
  },
  {
    id: 3,
    name: '미니멀 뷰티 스페이스',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2Fsb24lMjBzcGFjZXxlbnwxfHx8fDE3NjQ3Njk4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['스타일링', '컨설팅']
  },
  {
    id: 4,
    name: '컨템포러리 컷츠',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1759134198561-e2041049419c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBiYXJiZXJzaG9wfGVufDF8fHx8MTc2NDc2OTg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['단발컷', '면도']
  }
];

export function SalonList() {
  return (
    <div className="px-6 mb-8">
      <h2 className="mb-4 text-[#111111]">추천 헤어샵</h2>
      
      <div className="flex flex-col gap-5">
        {salons.map((salon) => (
          <SalonCard key={salon.id} salon={salon} />
        ))}
      </div>
    </div>
  );
}
