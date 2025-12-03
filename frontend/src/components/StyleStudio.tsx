import React, { useState } from 'react';
import { StudioHeader } from './studio/StudioHeader';
import { ActionArea } from './studio/ActionArea';
import { FilterBar } from './studio/FilterBar';
import { HistoryGrid } from './studio/HistoryGrid';
import { AddGroupModal } from './studio/AddGroupModal';

interface StyleStudioProps {
  onCustomCreate: () => void;
  onAIRecommend: () => void;
  onStyleClick?: (style: any) => void;
}

export interface Group {
  id: string;
  name: string;
  styleIds: number[];
}

export function StyleStudio({ onCustomCreate, onAIRecommend, onStyleClick }: StyleStudioProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [groups, setGroups] = useState<Group[]>([]);
  const [showAddGroupModal, setShowAddGroupModal] = useState(false);
  
  const handleAddGroup = (groupName: string, selectedStyles: number[]) => {
    const newGroup: Group = {
      id: Date.now().toString(),
      name: groupName,
      styleIds: selectedStyles
    };
    setGroups([...groups, newGroup]);
  };
  
  const handleToggleStyleInGroup = (groupId: string, styleId: number) => {
    setGroups(groups.map(group => {
      if (group.id === groupId) {
        const isInGroup = group.styleIds.includes(styleId);
        return {
          ...group,
          styleIds: isInGroup 
            ? group.styleIds.filter(id => id !== styleId)
            : [...group.styleIds, styleId]
        };
      }
      return group;
    }));
  };
  
  return (
    <div>
      <StudioHeader />
      <ActionArea onCustomCreate={onCustomCreate} onAIRecommend={onAIRecommend} />
      <FilterBar 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter}
        onAddGroup={() => setShowAddGroupModal(true)}
        groups={groups}
      />
      <HistoryGrid 
        activeFilter={activeFilter} 
        onStyleClick={onStyleClick}
        groups={groups}
        onToggleStyleInGroup={handleToggleStyleInGroup}
      />
      
      {showAddGroupModal && (
        <AddGroupModal
          onClose={() => setShowAddGroupModal(false)}
          onAddGroup={handleAddGroup}
          availableStyles={[
            { id: 1, name: '소프트 레이어드 컷', imageUrl: 'https://images.unsplash.com/photo-1731951039647-94f50eea1fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXllcmVkJTIwaGFpcmN1dCUyMHdvbWFufGVufDF8fHx8MTc2NDc3MDQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
            { id: 2, name: '미디엄 웨이브', imageUrl: 'https://images.unsplash.com/photo-1740359399407-90c42560d45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXZ5JTIwaGFpciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDc3MDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
            { id: 3, name: '시크 쇼트 컷', imageUrl: 'https://images.unsplash.com/photo-1565537222174-2a43ca1c3462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9ydCUyMGhhaXIlMjB3b21hbnxlbnwxfHx8fDE3NjQ3NzA0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
            { id: 4, name: '롱 스트레이트', imageUrl: 'https://images.unsplash.com/photo-1523260578934-e9318da58c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25nJTIwaGFpciUyMHN0eWxlfGVufDF8fHx8MTc2NDc3MDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
            { id: 5, name: '내추럴 컬', imageUrl: 'https://images.unsplash.com/photo-1657546978958-76f538211af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhaXJzdHlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDcwMTc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
            { id: 6, name: '허쉬컷', imageUrl: 'https://images.unsplash.com/photo-1676083192960-2a4873858487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBoYWlyc3R5bGUlMjB3b21hbnxlbnwxfHx8fDE3NjQ3NzE0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' }
          ]}
        />
      )}
    </div>
  );
}
