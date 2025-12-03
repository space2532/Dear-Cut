import React, { useState } from 'react';
import { CustomGenerationHeader } from './generation/CustomGenerationHeader';
import { ChatMessages } from './generation/ChatMessages';
import { EmptyState } from './generation/EmptyState';
import { GeneratedResult } from './generation/GeneratedResult';
import { ChatInput } from './generation/ChatInput';

export interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  imageUrl?: string;
}

interface CustomGenerationProps {
  onBack: () => void;
}

export function CustomGeneration({ onBack }: CustomGenerationProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  const handleSendMessage = (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      type: 'user',
      content: text
    };
    
    setMessages([...messages, userMessage]);
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedImage('https://images.unsplash.com/photo-1676083192960-2a4873858487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBoYWlyc3R5bGUlMjB3b21hbnxlbnwxfHx8fDE3NjQ3NzE0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral');
      setIsGenerating(false);
    }, 2000);
  };
  
  const handleConfirmAndSave = () => {
    // Save the generated style
    alert('스타일이 저장되었습니다!');
    onBack();
  };
  
  return (
    <div className="flex flex-col h-screen bg-white max-w-md mx-auto">
      <CustomGenerationHeader onBack={onBack} />
      
      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6">
        {messages.length === 0 && !generatedImage ? (
          <EmptyState />
        ) : (
          <>
            <ChatMessages messages={messages} />
            {generatedImage && (
              <GeneratedResult 
                imageUrl={generatedImage} 
                onConfirm={handleConfirmAndSave}
                isGenerating={isGenerating}
              />
            )}
          </>
        )}
      </div>
      
      {/* Fixed Bottom Input */}
      <ChatInput onSendMessage={handleSendMessage} isGenerating={isGenerating} />
    </div>
  );
}
