import React from 'react';
import { ProfileHeader } from './mypage/ProfileHeader';
import { MenuList } from './mypage/MenuList';
import { PromoBanner } from './mypage/PromoBanner';

interface MyPageProps {
  onNavigateToAnalysis: () => void;
}

export function MyPage({ onNavigateToAnalysis }: MyPageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="px-5 pt-5 pb-4">
        <h1 className="text-[#111111]" style={{ fontSize: '24px' }}>
          마이 페이지
        </h1>
      </div>
      
      {/* Profile Header */}
      <ProfileHeader />
      
      {/* Menu List */}
      <MenuList onNavigateToAnalysis={onNavigateToAnalysis} />
      
      {/* Promo Banner */}
      <PromoBanner />
    </div>
  );
}
