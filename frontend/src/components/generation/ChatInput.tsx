import React, { useState } from 'react';
import { Plus, Send } from 'lucide-react';

const suggestionChips = ['#볼륨감', '#매트', '#댄디', '#자연스러운', '#시크', '#우아한'];

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isGenerating: boolean;
}

export function ChatInput({ onSendMessage, isGenerating }: ChatInputProps) {
  const [inputText, setInputText] = useState('');
  
  const handleSend = () => {
    if (inputText.trim() && !isGenerating) {
      onSendMessage(inputText);
      setInputText('');
    }
  };
  
  const handleChipClick = (chip: string) => {
    setInputText((prev) => prev ? `${prev} ${chip}` : chip);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  
  return (
    <div className="border-t border-[#F3F4F6] bg-white">
      {/* Suggestion Chips */}
      <div className="px-5 pt-3 pb-2">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {suggestionChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleChipClick(chip)}
              disabled={isGenerating}
              className="px-3 py-1.5 bg-[#F3F4F6] text-[#6B7280] rounded-full flex-shrink-0 hover:bg-[#E5E7EB] transition-colors disabled:opacity-50"
              style={{ fontSize: '13px' }}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
      
      {/* Input Bar */}
      <div className="px-5 pb-5">
        <div 
          className="flex items-center gap-3 bg-[#F3F4F6] rounded-full px-4 py-2.5"
        >
          <button 
            className="p-1 hover:bg-white/50 rounded-full transition-colors disabled:opacity-50"
            disabled={isGenerating}
          >
            <Plus size={20} className="text-[#6B7280]" strokeWidth={2} />
          </button>
          
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isGenerating}
            placeholder="예: 시스루뱅과 볼륨감 있는 쇼트 펌..."
            className="flex-1 bg-transparent outline-none text-[#111111] placeholder:text-[#9CA3AF] disabled:opacity-50"
            style={{ fontSize: '15px' }}
          />
          
          <button 
            onClick={handleSend}
            disabled={!inputText.trim() || isGenerating}
            className="p-1.5 bg-[#3B82F6] rounded-full hover:bg-[#2563EB] transition-colors disabled:opacity-50 disabled:bg-[#9CA3AF]"
          >
            <Send size={18} className="text-white" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
