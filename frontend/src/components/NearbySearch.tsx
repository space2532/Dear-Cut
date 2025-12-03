import React, { useState } from 'react';
import { NearbyHeader } from './nearby/NearbyHeader';
import { FilterChips } from './nearby/FilterChips';
import { SalonListView } from './nearby/SalonListView';

export function NearbySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('match');
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'map') {
      // 지도 뷰 로직 (향후 구현)
      alert('전체 지도 보기');
    }
  };
  
  return (
    <div className="bg-white min-h-screen">
      <NearbyHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FilterChips activeFilter={activeFilter} onFilterChange={handleFilterChange} />
      <SalonListView activeFilter={activeFilter} />
    </div>
  );
}
