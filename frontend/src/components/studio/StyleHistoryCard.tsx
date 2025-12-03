import React, { useState, useRef } from 'react';
import { Heart, Check, AlertCircle, MoreVertical } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SaveToGroupMenu } from './SaveToGroupMenu';

interface Group {
  id: string;
  name: string;
  styleIds: number[];
}

interface StyleHistoryCardProps {
  style: {
    id: number;
    name: string;
    date: string;
    imageUrl: string;
    status: 'good' | 'maintenance';
    isFavorite: boolean;
    height: number;
  };
  onClick?: () => void;
  groups: Group[];
  onToggleStyleInGroup: (groupId: string, styleId: number) => void;
}

export function StyleHistoryCard({ style, onClick, groups, onToggleStyleInGroup }: StyleHistoryCardProps) {
  const [isFavorite, setIsFavorite] = useState(style.isFavorite);
  const [showGroupMenu, setShowGroupMenu] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowGroupMenu(!showGroupMenu);
  };
  
  const handleSelectGroup = (groupId: string) => {
    onToggleStyleInGroup(groupId, style.id);
    setShowGroupMenu(false);
  };
  
  return (
    <button 
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden w-full text-left"
    >
      {/* Image with Overlays */}
      <div 
        className="relative w-full overflow-hidden cursor-pointer"
        style={{ height: `${style.height}px` }}
      >
        <ImageWithFallback
          src={style.imageUrl}
          alt={style.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        
        {/* Favorite Button - Top Right */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10"
          style={{ 
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Heart 
            size={16} 
            className={isFavorite ? 'text-[#EF4444] fill-[#EF4444]' : 'text-[#9CA3AF]'}
            strokeWidth={2}
          />
        </button>
        
        {/* Status Badge - Bottom Left */}
        <div className="absolute bottom-3 left-3">
          <div 
            className={`px-2.5 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 ${
              style.status === 'good'
                ? 'bg-[#10B981]/80'
                : 'bg-[#F59E0B]/80'
            }`}
          >
            {style.status === 'good' ? (
              <Check size={12} className="text-white" strokeWidth={2.5} />
            ) : (
              <AlertCircle size={12} className="text-white" strokeWidth={2.5} />
            )}
            <span className="text-white" style={{ fontSize: '11px' }}>
              {style.status === 'good' ? '잘 어울림' : '관리 필요'}
            </span>
          </div>
        </div>
      </div>
      
      {/* Info Area */}
      <div className="p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-[#111111] mb-1 truncate" style={{ fontSize: '15px' }}>
              {style.name}
            </h3>
            <p className="text-[#9CA3AF]" style={{ fontSize: '12px' }}>
              {style.date}
            </p>
          </div>
          
          {/* More Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={handleMenuClick}
            className="p-1 hover:bg-[#F3F4F6] rounded-lg transition-colors flex-shrink-0"
          >
            <MoreVertical size={16} className="text-[#9CA3AF]" strokeWidth={2} />
          </button>
        </div>
      </div>
      
      {/* Save to Group Menu */}
      {showGroupMenu && menuButtonRef.current && (
        <SaveToGroupMenu
          groups={groups}
          currentStyleId={style.id}
          onSelectGroup={handleSelectGroup}
          onClose={() => setShowGroupMenu(false)}
          position={{
            top: menuButtonRef.current.getBoundingClientRect().bottom + 4,
            right: window.innerWidth - menuButtonRef.current.getBoundingClientRect().right
          }}
        />
      )}
    </button>
  );
}
