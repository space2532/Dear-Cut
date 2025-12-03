import React from 'react';
import { Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="px-5 py-4 flex items-center justify-between bg-white">
      <h1 className="text-[#111111] tracking-tight" style={{ fontSize: '20px' }}>
        Dear Cut
      </h1>
      
      <div className="flex items-center gap-2">
        <button className="p-2">
          <Bell size={22} className="text-[#111111]" strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
