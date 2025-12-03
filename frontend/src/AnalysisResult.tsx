import React from 'react';
import { AnalysisHeader } from './components/analysis/AnalysisHeader';
import { DiagnosisCard } from './components/analysis/DiagnosisCard';
import { VirtualTryOn } from './components/analysis/VirtualTryOn';
import { DesignerTips } from './components/analysis/DesignerTips';
import { BottomActionBar } from './components/analysis/BottomActionBar';

export default function AnalysisResult() {
  return (
    <div className="bg-white min-h-screen flex flex-col max-w-md mx-auto relative">
      {/* Sticky Header */}
      <AnalysisHeader />
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="px-6 py-6 space-y-6">
          <DiagnosisCard />
          <VirtualTryOn />
          <DesignerTips />
        </div>
      </div>
      
      {/* Sticky Bottom Action Bar */}
      <BottomActionBar />
    </div>
  );
}
