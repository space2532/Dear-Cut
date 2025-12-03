import React from 'react';
import { Calendar, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface PastReservationCardProps {
  reservation: {
    id: number;
    salonName: string;
    salonImage: string;
    date: string;
    styleName: string;
    hasReview: boolean;
  };
}

export function PastReservationCard({ reservation }: PastReservationCardProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-4 hover:border-[#3B82F6] transition-colors">
      <div className="flex items-start gap-3 mb-3">
        {/* Salon Image */}
        <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={reservation.salonImage}
            alt={reservation.salonName}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Salon Info */}
        <div className="flex-1 min-w-0">
          <h4 className="text-[#111111] mb-1" style={{ fontSize: '16px' }}>
            {reservation.salonName}
          </h4>
          <div className="flex items-center gap-2 text-[#6B7280]" style={{ fontSize: '14px' }}>
            <Calendar size={14} strokeWidth={2} />
            <span>{reservation.date}</span>
          </div>
        </div>
        
        {/* Review Badge */}
        {reservation.hasReview && (
          <div className="flex items-center gap-1 px-2.5 py-1 bg-[#FEF3C7] rounded-full h-fit">
            <Star size={12} className="text-[#F59E0B] fill-[#F59E0B]" strokeWidth={2} />
            <span className="text-[#D97706]" style={{ fontSize: '12px' }}>
              완료
            </span>
          </div>
        )}
      </div>
      
      <div className="mb-3 px-3 py-2 bg-[#F9FAFB] rounded-lg">
        <p className="text-[#6B7280]" style={{ fontSize: '13px' }}>
          시술: <span className="text-[#111111]">{reservation.styleName}</span>
        </p>
      </div>
      
      {!reservation.hasReview && (
        <button
          className="w-full px-4 py-2.5 bg-[#F3F4F6] text-[#111111] rounded-full hover:bg-[#E5E7EB] transition-colors flex items-center justify-center gap-2"
          style={{ fontSize: '14px' }}
        >
          <Star size={16} strokeWidth={2} />
          리뷰 작성하기
        </button>
      )}
    </div>
  );
}
