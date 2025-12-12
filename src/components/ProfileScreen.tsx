import { ArrowLeft, Edit2, MapPin, Award, Calendar, TrendingUp, MessageCircle, UserPlus } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface ProfileScreenProps {
  onNavigate: (screen: Screen) => void;
  userName?: string | null;
  onMessageUser?: (user: { name: string; experience: string; bio: string; image?: string }) => void;
  onAddFriend?: (userName: string) => void;
  onRemoveFriend?: (userName: string) => void;
  isFriend?: boolean;
}

export function ProfileScreen({ onNavigate, userName, onMessageUser, onAddFriend, onRemoveFriend, isFriend = false }: ProfileScreenProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  const userProfiles: { [key: string]: any } = {
    'Emma Thompson': {
      name: 'Emma Thompson',
      location: 'Galway, Ireland',
      bio: 'Certified swim instructor specializing in open water safety. Love helping beginners!',
      level: 'Advanced',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      stats: [
        { label: 'Total Swims', value: '203', icon: TrendingUp },
        { label: 'Distance', value: '450 km', icon: MapPin },
        { label: 'Buddies', value: '45', icon: Award },
        { label: 'Days Active', value: '365', icon: Calendar },
      ],
      achievements: [
        { title: 'First Swim', description: 'Completed your first open water swim', icon: '🏊' },
        { title: 'Buddy Master', description: 'Swam with 10 different buddies', icon: '👥' },
        { title: 'Distance King', description: 'Swam over 100km total', icon: '🏆' },
        { title: 'Marathon Swimmer', description: 'Completed 10km swim', icon: '🌊' },
        { title: 'Instructor', description: 'Certified swim instructor', icon: '📚' },
      ],
    },
    'David Chen': {
      name: 'David Chen',
      location: 'Dublin, Ireland',
      bio: 'Former competitive swimmer. Always up for a challenge!',
      level: 'Advanced',
      avatar: 'https://images.unsplash.com/photo-1677170273559-165d576b7c18?w=400',
      stats: [
        { label: 'Total Swims', value: '98', icon: TrendingUp },
        { label: 'Distance', value: '287 km', icon: MapPin },
        { label: 'Buddies', value: '23', icon: Award },
        { label: 'Days Active', value: '156', icon: Calendar },
      ],
      achievements: [
        { title: 'First Swim', description: 'Completed your first open water swim', icon: '🏊' },
        { title: 'Buddy Master', description: 'Swam with 10 different buddies', icon: '👥' },
        { title: 'Distance King', description: 'Swam over 100km total', icon: '🏆' },
        { title: 'Speed Demon', description: 'Completed 5km under 1 hour', icon: '⚡' },
      ],
    },
    'Sarah Mitchell': {
      name: 'Sarah Mitchell',
      location: 'Cork, Ireland',
      bio: 'Open water enthusiast and safety advocate. Let\'s swim together!',
      level: 'Expert',
      avatar: 'https://images.unsplash.com/photo-1763713518951-758e184992f8?w=400',
      stats: [
        { label: 'Total Swims', value: '127', icon: TrendingUp },
        { label: 'Distance', value: '356 km', icon: MapPin },
        { label: 'Buddies', value: '34', icon: Award },
        { label: 'Days Active', value: '234', icon: Calendar },
      ],
      achievements: [
        { title: 'First Swim', description: 'Completed your first open water swim', icon: '🏊' },
        { title: 'Buddy Master', description: 'Swam with 10 different buddies', icon: '👥' },
        { title: 'Distance King', description: 'Swam over 100km total', icon: '🏆' },
        { title: 'Early Bird', description: 'Completed 20 morning swims', icon: '🌅' },
        { title: 'Safety First', description: 'Completed safety training', icon: '🛟' },
      ],
    },
    'James Wilson': {
      name: 'James Wilson',
      location: 'Galway, Ireland',
      bio: 'Weekend warrior swimmer. Love exploring new swim spots!',
      level: 'Intermediate',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      stats: [
        { label: 'Total Swims', value: '56', icon: TrendingUp },
        { label: 'Distance', value: '145 km', icon: MapPin },
        { label: 'Buddies', value: '8', icon: Award },
        { label: 'Days Active', value: '67', icon: Calendar },
      ],
      achievements: [
        { title: 'First Swim', description: 'Completed your first open water swim', icon: '🏊' },
        { title: 'Weekend Warrior', description: 'Completed 20 weekend swims', icon: '🌊' },
        { title: 'Distance King', description: 'Swam over 100km total', icon: '🏆' },
      ],
    },
    'Lisa Anderson': {
      name: 'Lisa Anderson',
      location: 'Dublin, Ireland',
      bio: 'New to open water swimming. Looking for patient swim partners!',
      level: 'Beginner',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      stats: [
        { label: 'Total Swims', value: '12', icon: TrendingUp },
        { label: 'Distance', value: '23 km', icon: MapPin },
        { label: 'Buddies', value: '3', icon: Award },
        { label: 'Days Active', value: '15', icon: Calendar },
      ],
      achievements: [
        { title: 'First Swim', description: 'Completed your first open water swim', icon: '🏊' },
        { title: 'Getting Started', description: 'Completed 10 swims', icon: '🌟' },
      ],
    },
    'Michael Brown': {
      name: 'Michael Brown',
      location: 'Galway, Ireland',
      bio: 'Love morning swims at Brighton Beach. Always up for a challenge!',
      level: 'Advanced',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      stats: [
        { label: 'Total Swims', value: '89', icon: TrendingUp },
        { label: 'Distance', value: '267 km', icon: MapPin },
        { label: 'Buddies', value: '15', icon: Award },
        { label: 'Days Active', value: '123', icon: Calendar },
      ],
      achievements: [
        { title: 'First Swim', description: 'Completed your first open water swim', icon: '🏊' },
        { title: 'Buddy Master', description: 'Swam with 10 different buddies', icon: '👥' },
        { title: 'Distance King', description: 'Swam over 100km total', icon: '🏆' },
        { title: 'Early Bird', description: 'Completed 20 morning swims', icon: '🌅' },
      ],
    },
  };

  const isOwnProfile = !userName || userName === 'You';
  const displayProfile = userName && userProfiles[userName] ? userProfiles[userName] : {
    name: 'Alex Morgan',
    location: 'Galway, Ireland',
    bio: 'Open water swimming enthusiast. Always looking for new swimming buddies!',
    level: 'Intermediate',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
    stats: [
      { label: 'Total Swims', value: '47', icon: TrendingUp },
      { label: 'Distance', value: '123 km', icon: MapPin },
      { label: 'Buddies', value: '12', icon: Award },
      { label: 'Days Active', value: '89', icon: Calendar },
    ],
    achievements: [
      { title: 'First Swim', description: 'Completed your first open water swim', icon: '🏊' },
      { title: 'Buddy Master', description: 'Swam with 10 different buddies', icon: '👥' },
      { title: 'Distance King', description: 'Swam over 100km total', icon: '🏆' },
      { title: 'Early Bird', description: 'Completed 20 morning swims', icon: '🌅' },
    ],
  };

  const [profile, setProfile] = useState(displayProfile);



  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-50 to-white h-full">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Profile Card */}
        <div className="px-6 pt-6 mb-6">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <div className="flex flex-col items-center mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-400 border-4 border-white shadow-lg">
                <ImageWithFallback
                  src={profile.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

            {isEditing && isOwnProfile ? (
              <div className="w-full space-y-3 mt-4">
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-blue-400 text-center"
                />
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-blue-400 text-center text-gray-600"
                />
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border-2 border-gray-200 outline-none focus:border-blue-400 text-center text-gray-600"
                  rows={3}
                />
                <button
                  onClick={() => setIsEditing(false)}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-xl"
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-gray-900 mt-4">{profile.name}</h2>
                <div className="flex items-center gap-2 text-gray-500 mb-2">
                  <MapPin size={16} />
                  <span>{profile.location}</span>
                </div>
                <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full mb-3">
                  {profile.level}
                </div>
                <p className="text-gray-600 text-center">{profile.bio}</p>
              </>
            )}
          </div>

          {/* Action Buttons for Other Users */}
          {!isOwnProfile && (
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => {
                  if (onMessageUser) {
                    onMessageUser({
                      name: profile.name,
                      experience: profile.level,
                      bio: profile.bio,
                      image: profile.avatar
                    });
                  }
                }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                <span>Message</span>
              </button>
              <button 
                onClick={() => {
                  if (isFriend && onRemoveFriend && userName) {
                    onRemoveFriend(userName);
                  } else if (!isFriend && onAddFriend && userName) {
                    onAddFriend(userName);
                  }
                }}
                className={`flex-1 py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  isFriend 
                    ? 'bg-green-500 text-white hover:bg-green-600' 
                    : 'bg-white border-2 border-blue-500 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <UserPlus size={18} />
                <span>{isFriend ? 'Friends ✓' : 'Add Friend'}</span>
              </button>
            </div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            {profile.stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center">
                <stat.icon className="text-blue-500 mx-auto mb-2" size={24} />
                <div className="text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Achievements */}
        <div className="px-6 pb-4">
          <h3 className="text-gray-700 mb-4">Achievements</h3>
          <div className="space-y-3">
            {profile.achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="text-gray-900 mb-1">{achievement.title}</div>
                  <div className="text-gray-600">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}