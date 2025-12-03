import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, CheckCircle, FileText } from 'lucide-react';
import { RequestSheetModal } from './RequestSheetModal';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface UpcomingReservationCardProps {
  reservation: {
    id: number;
    status: string;
    salonName: string;
    salonLocation: string;
    salonImage: string;
    date: string;
    time: string;
    styleName: string;
    designer: string;
    requestSheet: {
      forDesigner: string;
      warningTip: string;
      additionalNotes: string;
    };
  };
}

export function UpcomingReservationCard({ reservation }: UpcomingReservationCardProps) {
  const [showRequestSheet, setShowRequestSheet] = useState(false);
  
  return (
    <>
      <div 
        className="bg-white border-2 border-[#3B82F6] rounded-2xl overflow-hidden"
        style={{
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
        }}
      >
        {/* Status Badge */}
        <div className="bg-gradient-to-r from-[#10B981] to-[#059669] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-white" strokeWidth={2} />
            <span className="text-white" style={{ fontSize: '14px' }}>
              예약 확정
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          {/* Salon Image & Name */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={reservation.salonImage}
                alt={reservation.salonName}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[#111111] flex-1" style={{ fontSize: '18px' }}>
              {reservation.salonName}
            </h3>
          </div>
          
          {/* Info Grid */}
          <div className="space-y-2.5 mb-4">
            <div className="flex items-center gap-3">
              <Calendar size={18} className="text-[#6B7280]" strokeWidth={2} />
              <span className="text-[#111111]" style={{ fontSize: '15px' }}>
                {reservation.date}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-[#6B7280]" strokeWidth={2} />
              <span className="text-[#111111]" style={{ fontSize: '15px' }}>
                {reservation.time}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-[#6B7280]" strokeWidth={2} />
              <span className="text-[#111111]" style={{ fontSize: '15px' }}>
                {reservation.salonLocation}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <User size={18} className="text-[#6B7280]" strokeWidth={2} />
              <span className="text-[#111111]" style={{ fontSize: '15px' }}>
                {reservation.designer}
              </span>
            </div>
          </div>
          
          {/* Style Info */}
          <div className="px-3 py-2.5 bg-[#EFF6FF] rounded-xl mb-4">
            <p className="text-[#3B82F6]" style={{ fontSize: '14px' }}>
              <strong>시술:</strong> {reservation.styleName}
            </p>
          </div>
          
          {/* Action Button */}
          <button
            onClick={() => setShowRequestSheet(true)}
            className="w-full px-4 py-3 border-2 border-[#3B82F6] text-[#3B82F6] rounded-full flex items-center justify-center gap-2 hover:bg-[#EFF6FF] transition-colors"
            style={{ fontSize: '15px' }}
          >
            <FileText size={18} strokeWidth={2} />
            요청서 확인하기
          </button>
        </div>
      </div>
      
      {/* Request Sheet Modal */}
      {showRequestSheet && (
        <RequestSheetModal
          reservation={reservation}
          onClose={() => setShowRequestSheet(false)}
        />
      )}
    </>
  );
}
