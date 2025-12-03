import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { SignUpScreen } from './components/SignUpScreen';
import { FaceRegistration } from './components/FaceRegistration';
import { Header } from './components/Header';
import { HeroCard } from './components/HeroCard';
import { TrendingFeed } from './components/TrendingFeed';
import { NearbySearch } from './components/NearbySearch';
import { Reservations } from './components/Reservations';
import { MyPage } from './components/MyPage';
import { StyleStudio } from './components/StyleStudio';
import { CustomGeneration } from './components/CustomGeneration';
import { AIRecommendation } from './components/AIRecommendation';
import { StyleDetail } from './components/StyleDetail';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [faceRegistered, setFaceRegistered] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [showCustomGeneration, setShowCustomGeneration] = useState(false);
  const [showAIRecommendation, setShowAIRecommendation] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<any>(null);
  
  const handleBack = () => {
    if (selectedStyle) {
      setSelectedStyle(null);
    } else if (showCustomGeneration) {
      setShowCustomGeneration(false);
    } else if (showAIRecommendation) {
      setShowAIRecommendation(false);
    }
  };
  
  // Show Sign Up Screen
  if (showSignUp) {
    return (
      <SignUpScreen
        onSignUp={() => {
          setShowSignUp(false);
          setIsLoggedIn(true);
          setFaceRegistered(false);
        }}
        onBack={() => setShowSignUp(false)}
      />
    );
  }
  
  // Show Login Screen
  if (!isLoggedIn) {
    return (
      <LoginScreen
        onLogin={() => {
          setIsLoggedIn(true);
          setFaceRegistered(false);
        }}
        onSignUp={() => setShowSignUp(true)}
      />
    );
  }
  
  // Show Face Registration for first-time users
  if (!faceRegistered) {
    return (
      <FaceRegistration
        onComplete={() => setFaceRegistered(true)}
      />
    );
  }
  
  // Main App Flow
  if (showCustomGeneration) {
    return <CustomGeneration onBack={handleBack} />;
  }
  
  if (showAIRecommendation) {
    return <AIRecommendation onBack={handleBack} />;
  }
  
  if (selectedStyle) {
    return <StyleDetail style={selectedStyle} onBack={handleBack} />;
  }
  
  return (
    <div className="bg-white min-h-screen flex flex-col max-w-md mx-auto relative">
      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {activeTab === 0 && (
          <>
            <Header />
            <HeroCard onStartAnalysis={() => setActiveTab(1)} />
            <TrendingFeed onStyleClick={setSelectedStyle} />
          </>
        )}
        
        {activeTab === 1 && (
          <StyleStudio 
            onCustomCreate={() => setShowCustomGeneration(true)}
            onAIRecommend={() => setShowAIRecommendation(true)}
            onStyleClick={setSelectedStyle}
          />
        )}
        
        {activeTab === 2 && (
          <NearbySearch />
        )}
        
        {activeTab === 3 && (
          <Reservations />
        )}
        
        {activeTab === 4 && (
          <MyPage onNavigateToAnalysis={() => setActiveTab(1)} />
        )}
      </div>
      
      {/* Fixed Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
