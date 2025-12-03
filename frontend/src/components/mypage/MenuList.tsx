import React from 'react';
import { Heart, CreditCard, Settings, ChevronRight, History, Bell, HelpCircle, LogOut } from 'lucide-react';

interface MenuListProps {
  onNavigateToAnalysis: () => void;
}

const menuSections = [
  {
    title: '내 활동',
    items: [
      { id: 'saved', label: '저장한 스타일', icon: Heart, onClick: 'analysis' },
      { id: 'history', label: '시술 내역', icon: History }
    ]
  },
  {
    title: '설정',
    items: [
      { id: 'payment', label: '결제 수단', icon: CreditCard },
      { id: 'notifications', label: '알림 설정', icon: Bell },
      { id: 'settings', label: '앱 설정', icon: Settings }
    ]
  },
  {
    title: '고객 지원',
    items: [
      { id: 'help', label: '도움말', icon: HelpCircle },
      { id: 'logout', label: '로그아웃', icon: LogOut }
    ]
  }
];

export function MenuList({ onNavigateToAnalysis }: MenuListProps) {
  const handleMenuClick = (onClick?: string) => {
    if (onClick === 'analysis') {
      onNavigateToAnalysis();
    } else {
      alert('준비 중입니다');
    }
  };
  
  return (
    <div className="px-5 pb-6 space-y-6">
      {menuSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-[#6B7280] mb-3 px-1" style={{ fontSize: '13px' }}>
            {section.title}
          </h3>
          
          <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden">
            {section.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.onClick)}
                  className={`w-full px-4 py-4 flex items-center gap-3 hover:bg-[#F9FAFB] transition-colors ${
                    index !== section.items.length - 1 ? 'border-b border-[#E5E7EB]' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-[#F3F4F6] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#6B7280]" strokeWidth={2} />
                  </div>
                  
                  <span className="text-[#111111] flex-1 text-left" style={{ fontSize: '15px' }}>
                    {item.label}
                  </span>
                  
                  <ChevronRight size={20} className="text-[#9CA3AF]" strokeWidth={2} />
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
