import React from 'react';
import { Check, Folder } from 'lucide-react';

interface SaveToGroupMenuProps {
  groups: Array<{ id: string; name: string; styleIds: number[] }>;
  currentStyleId: number;
  onSelectGroup: (groupId: string) => void;
  onClose: () => void;
  position: { top: number; right: number };
}

export function SaveToGroupMenu({ 
  groups, 
  currentStyleId, 
  onSelectGroup, 
  onClose,
  position 
}: SaveToGroupMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Menu */}
      <div 
        className="fixed z-50 bg-white rounded-xl shadow-lg border border-[#E5E7EB] py-2 min-w-[180px]"
        style={{
          top: `${position.top}px`,
          right: `${position.right}px`,
        }}
      >
        <div className="px-3 py-2 border-b border-[#E5E7EB]">
          <p className="text-[#6B7280]" style={{ fontSize: '12px' }}>
            그룹에 저장
          </p>
        </div>
        
        {groups.length === 0 ? (
          <div className="px-4 py-6 text-center">
            <p className="text-[#9CA3AF]" style={{ fontSize: '13px' }}>
              아직 그룹이 없습니다
            </p>
          </div>
        ) : (
          groups.map((group) => {
            const isInGroup = group.styleIds.includes(currentStyleId);
            return (
              <button
                key={group.id}
                onClick={() => onSelectGroup(group.id)}
                className="w-full px-4 py-2.5 flex items-center gap-3 hover:bg-[#F9FAFB] transition-colors"
              >
                <Folder 
                  size={16} 
                  className={isInGroup ? 'text-[#3B82F6]' : 'text-[#9CA3AF]'} 
                  strokeWidth={2} 
                />
                <span 
                  className={`flex-1 text-left ${isInGroup ? 'text-[#3B82F6]' : 'text-[#111111]'}`}
                  style={{ fontSize: '14px' }}
                >
                  {group.name}
                </span>
                {isInGroup && (
                  <Check size={16} className="text-[#3B82F6]" strokeWidth={2} />
                )}
              </button>
            );
          })
        )}
      </div>
    </>
  );
}
