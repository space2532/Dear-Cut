import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

interface SignUpScreenProps {
  onSignUp: () => void;
  onBack: () => void;
}

export function SignUpScreen({ onSignUp, onBack }: SignUpScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const isValid = name && email && password && confirmPassword && 
                  password === confirmPassword && agreeTerms;
  
  const handleSignUp = () => {
    if (isValid) {
      onSignUp();
    }
  };
  
  return (
    <div className="bg-white min-h-screen flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="px-5 py-4 flex items-center border-b border-[#E5E7EB]">
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-[#F3F4F6] rounded-lg transition-colors"
        >
          <ArrowLeft size={24} className="text-[#111111]" strokeWidth={2} />
        </button>
        <h1 className="text-[#111111] ml-3" style={{ fontSize: '20px' }}>
          회원가입
        </h1>
      </div>
      
      {/* Content */}
      <div className="flex-1 px-6 py-8 overflow-y-auto">
        {/* Welcome Text */}
        <div className="mb-8">
          <h2 className="text-[#111111] mb-2" style={{ fontSize: '24px' }}>
            Dear Cut에 오신 것을
          </h2>
          <h2 className="text-[#111111] mb-3" style={{ fontSize: '24px' }}>
            환영합니다
          </h2>
          <p className="text-[#6B7280]" style={{ fontSize: '15px' }}>
            AI가 분석한 나만의 스타일을 찾아보세요
          </p>
        </div>
        
        {/* Input Fields */}
        <div className="space-y-4 mb-6">
          {/* Name Input */}
          <div>
            <label className="block text-[#6B7280] mb-2" style={{ fontSize: '13px' }}>
              이름
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요"
              className="w-full px-4 py-3.5 bg-[#F3F4F6] rounded-xl outline-none text-[#111111] placeholder:text-[#9CA3AF] focus:bg-[#E5E7EB] transition-colors"
              style={{ fontSize: '15px' }}
            />
          </div>
          
          {/* Email Input */}
          <div>
            <label className="block text-[#6B7280] mb-2" style={{ fontSize: '13px' }}>
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-4 py-3.5 bg-[#F3F4F6] rounded-xl outline-none text-[#111111] placeholder:text-[#9CA3AF] focus:bg-[#E5E7EB] transition-colors"
              style={{ fontSize: '15px' }}
            />
          </div>
          
          {/* Password Input */}
          <div>
            <label className="block text-[#6B7280] mb-2" style={{ fontSize: '13px' }}>
              비밀번호
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="8자 이상 입력하세요"
                className="w-full px-4 py-3.5 bg-[#F3F4F6] rounded-xl outline-none text-[#111111] placeholder:text-[#9CA3AF] focus:bg-[#E5E7EB] transition-colors pr-12"
                style={{ fontSize: '15px' }}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
              >
                {showPassword ? (
                  <EyeOff size={20} strokeWidth={2} />
                ) : (
                  <Eye size={20} strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
          
          {/* Confirm Password Input */}
          <div>
            <label className="block text-[#6B7280] mb-2" style={{ fontSize: '13px' }}>
              비밀번호 확인
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="비밀번호를 다시 입력하세요"
                className="w-full px-4 py-3.5 bg-[#F3F4F6] rounded-xl outline-none text-[#111111] placeholder:text-[#9CA3AF] focus:bg-[#E5E7EB] transition-colors pr-12"
                style={{ fontSize: '15px' }}
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} strokeWidth={2} />
                ) : (
                  <Eye size={20} strokeWidth={2} />
                )}
              </button>
            </div>
            {confirmPassword && password !== confirmPassword && (
              <p className="text-[#EF4444] mt-2" style={{ fontSize: '12px' }}>
                비밀번호가 일치하지 않습니다
              </p>
            )}
          </div>
        </div>
        
        {/* Terms Agreement */}
        <div className="mb-8">
          <button
            onClick={() => setAgreeTerms(!agreeTerms)}
            className="flex items-center gap-3 w-full"
          >
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
              agreeTerms 
                ? 'bg-[#3B82F6] border-[#3B82F6]' 
                : 'border-[#D1D5DB]'
            }`}>
              {agreeTerms && (
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span className="text-[#6B7280]" style={{ fontSize: '14px' }}>
              이용약관 및 개인정보처리방침에 동의합니다
            </span>
          </button>
        </div>
        
        {/* Sign Up Button */}
        <button
          onClick={handleSignUp}
          disabled={!isValid}
          className={`w-full py-3.5 rounded-full transition-colors ${
            isValid
              ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
              : 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'
          }`}
          style={{ fontSize: '16px' }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
