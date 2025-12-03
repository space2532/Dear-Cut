import React from 'react';
import { UpcomingReservationCard } from './reservations/UpcomingReservationCard';
import { PastReservationCard } from './reservations/PastReservationCard';

const upcomingReservation = {
  id: 1,
  status: 'confirmed',
  salonName: '모던 엘레강스',
  salonLocation: '강남구 역삼동',
  salonImage: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoYWlyJTIwc2Fsb258ZW58MXx8fHwxNzY0NzM1NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  date: '2024년 12월 15일',
  time: '오후 2:00',
  styleName: '소프트 펌',
  designer: '이수진 디자이너',
  requestSheet: {
    forDesigner: '상단 볼륨감은 유지하되, 옆머리는 짧게 정리해주세요. 앞머리는 시스루뱅 스타일로 가볍게 내려주시고, 뒷머리는 레이어드 컷으로 자연스러운 흐름을 만들어주세요. 전체적으로 펌을 통해 볼륨감을 살려주시면 좋을 것 같습니다.',
    warningTip: '모발 끝부분 손상이 있으니, 열 손상을 최소화해주세요.',
    additionalNotes: '자연스러운 웨이브 연출을 원하며, 스타일링이 쉬운 방향으로 부탁드립니다.'
  }
};

const pastReservations = [
  {
    id: 2,
    salonName: '럭스 스튜디오',
    salonImage: 'https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2NDc1NjgwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '2024년 11월 20일',
    styleName: '레이어드 컷',
    hasReview: false
  },
  {
    id: 3,
    salonName: '퓨어 살롱',
    salonImage: 'https://images.unsplash.com/photo-1595284843477-f609b0f91e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY0NzMwMzA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '2024년 10월 5일',
    styleName: '염색 (애쉬 브라운)',
    hasReview: true
  },
  {
    id: 4,
    salonName: '모던 엘레강스',
    salonImage: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoYWlyJTIwc2Fsb258ZW58MXx8fHwxNzY0NzM1NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: '2024년 9월 12일',
    styleName: '펌 + 컷',
    hasReview: true
  }
];

export function Reservations() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="px-5 pt-5 pb-4">
        <h1 className="text-[#111111]" style={{ fontSize: '24px' }}>
          예약 내역
        </h1>
      </div>
      
      {/* Upcoming Section */}
      <div className="px-5 pb-6">
        <h2 className="text-[#111111] mb-3" style={{ fontSize: '18px' }}>
          예정된 예약
        </h2>
        <UpcomingReservationCard reservation={upcomingReservation} />
      </div>
      
      {/* Past Reservations Section */}
      <div className="px-5 pb-6">
        <h2 className="text-[#111111] mb-3" style={{ fontSize: '18px' }}>
          지난 방문
        </h2>
        <div className="space-y-3">
          {pastReservations.map((reservation) => (
            <PastReservationCard 
              key={reservation.id} 
              reservation={reservation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
