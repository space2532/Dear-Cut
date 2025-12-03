import React from 'react';
import { Home, Sparkles, MapPin, Calendar, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: '홈' },
  { icon: Sparkles, label: '분석' },
  { icon: MapPin, label: '근처' },
  { icon: Calendar, label: '예약' },
  { icon: User, label: '마이' }
];

interface BottomNavProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 bg-white max-w-md mx-auto"
      style={{ 
        borderTop: '1px solid #F3F4F6'
      }}
    >
      <div className="flex items-center justify-around py-2.5">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onTabChange(index)}
            className="flex flex-col items-center justify-center gap-1 p-1.5 transition-colors min-w-[60px]"
          >
            <item.icon 
              size={22} 
              className={activeTab === index ? 'text-[#111111]' : 'text-[#9CA3AF]'}
              strokeWidth={1.5}
            />
            <span 
              className={activeTab === index ? 'text-[#111111]' : 'text-[#9CA3AF]'}
              style={{ fontSize: '11px' }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
