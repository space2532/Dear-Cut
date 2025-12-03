import React from 'react';
import { HeroSection } from './detail/HeroSection';
import { RequestSheet } from './detail/RequestSheet';
import { SalonCarousel } from './detail/SalonCarousel';
import { FloatingBookButton } from './detail/FloatingBookButton';

interface StyleDetailProps {
  style: {
    id: number;
    name: string;
    imageUrl: string;
    tags: string[];
    description: string;
  };
  onBack: () => void;
}

const matchedSalons = [
  {
    id: 1,
    name: '모던 엘레강스',
    thumbnail: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ3NzQ4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    matchPercentage: 98,
    location: '강남구'
  },
  {
    id: 2,
    name: '럭스 스튜디오',
    thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzYWxvbnxlbnwxfHx8fDE3NjQ3NzQ4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    matchPercentage: 95,
    location: '서초구'
  },
  {
    id: 3,
    name: '퓨어 살롱',
    thumbnail: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWxvbnxlbnwxfHx8fDE3NjQ3NzQ4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    matchPercentage: 92,
    location: '마포구'
  }
];

const requestSheetContent = {
  forDesigner: '상단 볼륨감은 유지하되, 옆머리는 짧게 정리해주세요. 앞머리는 시스루뱅 스타일로 가볍게 내려주시고, 뒷머리는 레이어드 컷으로 자연스러운 흐름을 만들어주세요. 전체적으로 펌을 통해 볼륨감을 살려주시면 좋을 것 같습니다.',
  warningTip: '모발 끝부분 손상이 있으니, 열 손상을 최소화해주세요.',
  additionalNotes: '자연스러운 웨이브 연출을 원하며, 스타일링이 쉬운 방향으로 부탁드립니다.'
};

export function StyleDetail({ style, onBack }: StyleDetailProps) {
  const handleBookNow = () => {
    alert('예약 페이지로 이동합니다');
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white max-w-md mx-auto pb-28">
      <HeroSection
        imageUrl={style.imageUrl}
        name={style.name}
        tags={style.tags}
        onBack={onBack}
      />
      
      <div className="px-5 py-6 space-y-6">
        <RequestSheet content={requestSheetContent} />
        <SalonCarousel salons={matchedSalons} />
      </div>
      
      <FloatingBookButton onBook={handleBookNow} />
    </div>
  );
}
