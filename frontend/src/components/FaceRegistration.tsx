import React from "react";
import {
  Camera,
  Image as ImageIcon,
  Lock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FaceRegistrationProps {
  onComplete: () => void;
}

export function FaceRegistration({
  onComplete,
}: FaceRegistrationProps) {
  const handleTakePhoto = () => {
    alert("카메라 기능은 준비 중입니다");
    // Simulating photo taken
    setTimeout(() => onComplete(), 1000);
  };

  const handleSelectGallery = () => {
    alert("갤러리 선택 기능은 준비 중입니다");
    // Simulating photo selected
    setTimeout(() => onComplete(), 1000);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        {/* Progress Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex-1 h-1.5 bg-[#3B82F6] rounded-full" />
          <div className="flex-1 h-1.5 bg-[#E5E7EB] rounded-full" />
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span
            className="text-[#3B82F6] px-2.5 py-1 bg-[#EFF6FF] rounded-full"
            style={{ fontSize: "12px" }}
          >
            Step 1 of 2
          </span>
        </div>

        <h1
          className="text-[#111111] mb-2"
          style={{ fontSize: "28px" }}
        >
          얼굴 등록하기
        </h1>
        <p
          className="text-[#6B7280]"
          style={{ fontSize: "15px" }}
        >
          정확한 AI 스타일링을 위해 선명한 사진을 업로드해
          주세요.
        </p>
      </div>

      {/* Guide Section */}
      <div className="flex-1 px-6 pb-6 overflow-y-auto">
        <div className="mb-6">
          <h2
            className="text-[#111111] mb-4"
            style={{ fontSize: "18px" }}
          >
            📸 촬영 가이드
          </h2>

          {/* Good Example */}
          <div
            className="bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] rounded-2xl p-5 mb-4"
            style={{
              boxShadow: "0 2px 8px rgba(16, 185, 129, 0.15)",
            }}
          >
            <div className="flex items-start gap-4">
              {/* Good Photo Example */}
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-3 border-white shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face"
                  alt="Good example"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                {/* Good Badge */}
                <div className="inline-flex items-center gap-2 bg-[#10B981] text-white px-3 py-1.5 rounded-full mb-2">
                  <CheckCircle size={16} strokeWidth={2.5} />
                  <span style={{ fontSize: "13px" }}>
                    좋은 예
                  </span>
                </div>

                {/* Good Points */}
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-1.5 flex-shrink-0" />
                    <span
                      className="text-[#065F46]"
                      style={{ fontSize: "14px" }}
                    >
                      정면을 바라보는 자세
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-1.5 flex-shrink-0" />
                    <span
                      className="text-[#065F46]"
                      style={{ fontSize: "14px" }}
                    >
                      얼굴과 구분되는 단색 배경
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-1.5 flex-shrink-0" />
                    <span
                      className="text-[#065F46]"
                      style={{ fontSize: "14px" }}
                    >
                      이마까지 다 보이게 촬영
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bad Example */}
          <div
            className="bg-gradient-to-br from-[#FEE2E2] to-[#FECACA] rounded-2xl p-5"
            style={{
              boxShadow: "0 2px 8px rgba(239, 68, 68, 0.15)",
            }}
          >
            <div className="flex items-start gap-4">
              {/* Bad Photo Example */}
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 border-3 border-white shadow-lg relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Bad example"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.6)" }}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="flex-1">
                {/* Bad Badge */}
                <div className="inline-flex items-center gap-2 bg-[#EF4444] text-white px-3 py-1.5 rounded-full mb-2">
                  <XCircle size={16} strokeWidth={2.5} />
                  <span style={{ fontSize: "13px" }}>
                    나쁜 예
                  </span>
                </div>

                {/* Bad Points */}
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 flex-shrink-0" />
                    <span
                      className="text-[#991B1B]"
                      style={{ fontSize: "14px" }}
                    >
                      측면 또는 각도가 있는 자세
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 flex-shrink-0" />
                    <span
                      className="text-[#991B1B]"
                      style={{ fontSize: "14px" }}
                    >
                      복잡한 배경
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-1.5 flex-shrink-0" />
                    <span
                      className="text-[#991B1B]"
                      style={{ fontSize: "14px" }}
                    >
                      이마가 가려짐 (모자, 머리카락)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Tips */}
        <div className="bg-[#F9FAFB] rounded-xl p-4 border border-[#E5E7EB]">
          <h3
            className="text-[#111111] mb-2 flex items-center gap-2"
            style={{ fontSize: "14px" }}
          >
            <span>💡</span>
            <span>촬영 팁</span>
          </h3>
          <p
            className="text-[#6B7280]"
            style={{ fontSize: "13px" }}
          >
            자연광이 있는 곳에서 정면을 향해 촬영하면 가장
            정확한 분석 결과를 얻을 수 있습니다.
          </p>
        </div>
      </div>

      {/* Action Area - Fixed Bottom */}
      <div className="border-t border-[#E5E7EB] bg-white px-6 py-5">
        <div className="space-y-3">
          {/* Take Photo Button */}
          <button
            onClick={handleTakePhoto}
            className="w-full bg-[#3B82F6] text-white py-3.5 rounded-full hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-2"
            style={{ fontSize: "16px" }}
          >
            <Camera size={20} strokeWidth={2} />
            사진 촬영하기
          </button>

          {/* Gallery Button */}
          <button
            onClick={handleSelectGallery}
            className="w-full bg-[#F3F4F6] text-[#111111] py-3.5 rounded-full hover:bg-[#E5E7EB] transition-colors flex items-center justify-center gap-2"
            style={{ fontSize: "16px" }}
          >
            <ImageIcon size={20} strokeWidth={2} />
            갤러리에서 선택
          </button>

          {/* Privacy Note */}
          <div className="flex items-start gap-2 pt-2">
            <Lock
              size={14}
              className="text-[#9CA3AF] mt-0.5 flex-shrink-0"
              strokeWidth={2}
            />
            <p
              className="text-[#9CA3AF]"
              style={{ fontSize: "12px" }}
            >
              업로드된 사진은 AI 분석에만 사용되며, 분석 후
              자동으로 삭제됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}