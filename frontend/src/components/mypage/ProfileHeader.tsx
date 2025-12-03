import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { EditProfileModal } from './EditProfileModal';

export function ProfileHeader() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [name, setName] = useState('김민지');
  const [avatar, setAvatar] = useState('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop');
  
  const handleSave = (newName: string, newAvatar: string) => {
    setName(newName);
    setAvatar(newAvatar);
  };
  
  return (
    <>
      <div className="px-5 pb-6">
        <div 
          className="bg-gradient-to-br from-[#EFF6FF] to-[#F3F4F6] rounded-2xl p-6 relative"
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Edit Button */}
          <button
            onClick={() => setShowEditModal(true)}
            className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-[#F9FAFB] transition-colors border border-[#E5E7EB]"
            style={{
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)'
            }}
          >
            <Edit2 size={16} className="text-[#6B7280]" strokeWidth={2} />
          </button>
          
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
              <ImageWithFallback
                src={avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-[#111111] mb-2" style={{ fontSize: '20px' }}>
                {name}
              </h2>
              
              {/* Face Shape Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[#E5E7EB]">
                <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span className="text-[#6B7280]" style={{ fontSize: '13px' }}>
                  얼굴형: <span className="text-[#111111]">계란형</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Edit Profile Modal */}
      {showEditModal && (
        <EditProfileModal
          onClose={() => setShowEditModal(false)}
          currentName={name}
          currentAvatar={avatar}
          onSave={handleSave}
        />
      )}
    </>
  );
}
