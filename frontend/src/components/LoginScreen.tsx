import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
  onSignUp: () => void;
}

export function LoginScreen({ onLogin, onSignUp }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleLogin = () => {
    if (email && password) {
      onLogin();
    }
  };
  
  const handleSocialLogin = (provider: string) => {
    alert(`${provider} 로그인 기능은 준비 중입니다`);
  };
  
  return (
    <div className="bg-white min-h-screen flex flex-col max-w-md mx-auto px-6">
      {/* Logo Section */}
      <div className="pt-20 pb-12 text-center">
        <h1 className="text-[#111111] mb-2" style={{ fontSize: '36px', letterSpacing: '-0.02em' }}>
          Dear Cut
        </h1>
        <p className="text-[#9CA3AF]" style={{ fontSize: '15px' }}>
          Find your perfect style.
        </p>
      </div>
      
      {/* Input Fields */}
      <div className="space-y-3 mb-6">
        {/* Email Input */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력하세요"
            className="w-full px-4 py-3.5 bg-[#F3F4F6] rounded-xl outline-none text-[#111111] placeholder:text-[#9CA3AF] focus:bg-[#E5E7EB] transition-colors"
            style={{ fontSize: '15px' }}
          />
        </div>
        
        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
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
      
      {/* Login Button */}
      <button
        onClick={handleLogin}
        disabled={!email || !password}
        className={`w-full py-3.5 rounded-full transition-colors mb-4 ${
          email && password
            ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
            : 'bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed'
        }`}
        style={{ fontSize: '16px' }}
      >
        로그인
      </button>
      
      {/* Links */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <button 
          onClick={() => alert('비밀번호 찾기 기능은 준비 중입니다')}
          className="text-[#6B7280] hover:text-[#111111] transition-colors"
          style={{ fontSize: '14px' }}
        >
          비밀번호 찾기
        </button>
        <div className="w-px h-3 bg-[#E5E7EB]" />
        <button 
          onClick={onSignUp}
          className="text-[#6B7280] hover:text-[#111111] transition-colors"
          style={{ fontSize: '14px' }}
        >
          회원가입
        </button>
      </div>
      
      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-[#E5E7EB]" />
        <span className="text-[#9CA3AF]" style={{ fontSize: '13px' }}>
          또는 다른 방법으로 계속하기
        </span>
        <div className="flex-1 h-px bg-[#E5E7EB]" />
      </div>
      
      {/* Social Login Buttons */}
      <div className="flex items-center justify-center gap-3">
        {/* Kakao */}
        <button
          onClick={() => handleSocialLogin('카카오')}
          className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          style={{ backgroundColor: '#FEE500' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3C7.03 3 3 6.36 3 10.5C3 13.14 4.71 15.45 7.26 16.68L6.27 20.31C6.18 20.63 6.54 20.88 6.82 20.68L11.13 17.66C11.42 17.68 11.71 17.7 12 17.7C16.97 17.7 21 14.34 21 10.2C21 6.06 16.97 3 12 3Z" fill="#3C1E1E"/>
          </svg>
        </button>
        
        {/* Naver */}
        <button
          onClick={() => handleSocialLogin('네이버')}
          className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
          style={{ backgroundColor: '#03C75A' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.273 12.845L7.376 0H0V24H7.727V11.155L16.624 24H24V0H16.273V12.845Z" fill="white"/>
          </svg>
        </button>
        
        {/* Google */}
        <button
          onClick={() => handleSocialLogin('구글')}
          className="w-14 h-14 rounded-full bg-white border-2 border-[#E5E7EB] flex items-center justify-center hover:bg-[#F9FAFB] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
            <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.13997 18.63 6.70997 16.7 5.83997 14.1H2.17997V16.94C3.98997 20.53 7.69997 23 12 23Z" fill="#34A853"/>
            <path d="M5.83997 14.1C5.61997 13.44 5.48997 12.73 5.48997 12C5.48997 11.27 5.61997 10.56 5.83997 9.9V7.06H2.17997C1.43997 8.54 0.999969 10.22 0.999969 12C0.999969 13.78 1.43997 15.46 2.17997 16.94L5.83997 14.1Z" fill="#FBBC05"/>
            <path d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.69997 1 3.98997 3.47 2.17997 7.06L5.83997 9.9C6.70997 7.3 9.13997 5.38 12 5.38Z" fill="#EA4335"/>
          </svg>
        </button>
        
        {/* Apple */}
        <button
          onClick={() => handleSocialLogin('애플')}
          className="w-14 h-14 rounded-full bg-[#000000] flex items-center justify-center hover:bg-[#1a1a1a] transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17.05 20.28C16.07 21.23 15.06 21.08 14.09 20.63C13.07 20.17 12.14 20.15 11.07 20.63C9.68 21.25 8.96 21.07 8.09 20.28C2.79 14.73 3.54 6.53 9.49 6.24C10.9 6.32 11.89 7.08 12.73 7.15C14.03 6.88 15.27 6.09 16.68 6.19C18.37 6.32 19.65 7.03 20.47 8.33C16.81 10.62 17.69 15.53 21 17.03C20.32 18.76 19.4 20.47 17.04 20.29L17.05 20.28ZM12.65 6.17C12.5 3.72 14.45 1.7 16.73 1.5C17.05 4.28 14.29 6.39 12.65 6.17Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
