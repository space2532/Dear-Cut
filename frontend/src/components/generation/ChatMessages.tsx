import React from 'react';
import { Message } from '../CustomGeneration';

interface ChatMessagesProps {
  messages: Message[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="space-y-4 mb-6">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] px-4 py-3 rounded-2xl ${
              message.type === 'user'
                ? 'bg-[#3B82F6] text-white'
                : 'bg-[#F3F4F6] text-[#111111]'
            }`}
            style={{ fontSize: '15px' }}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
}
