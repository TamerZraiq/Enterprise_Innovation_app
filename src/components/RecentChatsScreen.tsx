import { ArrowLeft, MessageSquare, Clock } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface RecentChatsScreenProps {
  onNavigate: (screen: Screen) => void;
  onMentorSelect: (mentor: { name: string; experience: string; bio: string; image?: string }) => void;
  friends: string[];
}

const userProfiles: { [key: string]: any } = {
  'Sarah Mitchell': {
    image: 'https://images.unsplash.com/photo-1763713518951-758e184992f8?w=400',
    experience: '5 years experience',
    bio: 'Certified swim instructor specializing in open water safety',
    lastMessage: 'Great swim today! The conditions were perfect.',
  },
  'David Chen': {
    image: 'https://images.unsplash.com/photo-1677170273559-165d576b7c18?w=400',
    experience: '3 years experience',
    bio: 'Former competitive swimmer, love helping beginners',
    lastMessage: 'Thanks for the safety tips!',
  },
  'Emma Thompson': {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    experience: '7 years experience',
    bio: 'Open water enthusiast and safety advocate',
    lastMessage: 'See you at the meetup tomorrow!',
  },
  'James Wilson': {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    experience: 'Intermediate',
    bio: 'Weekend warrior swimmer. Love exploring new swim spots!',
    lastMessage: 'Want to swim this weekend?',
  },
  'Lisa Anderson': {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    experience: 'Beginner',
    bio: 'New to open water swimming. Looking for patient swim partners!',
    lastMessage: 'Thanks for being so patient with me!',
  },
  'Michael Brown': {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    experience: 'Advanced',
    bio: 'Love morning swims at Brighton Beach. Always up for a challenge!',
    lastMessage: 'Early morning swim tomorrow?',
  },
};

export function RecentChatsScreen({ onNavigate, onMentorSelect, friends }: RecentChatsScreenProps) {
  const recentChats = [
    {
      name: 'Sarah Mitchell',
      lastMessage: 'Great swim today! The conditions were perfect.',
      time: '2h ago',
      unread: 2,
      image: 'https://images.unsplash.com/photo-1763713518951-758e184992f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMG1lbnRvcnxlbnwxfHx8fDE3NjQ2ODYzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      experience: '5 years experience',
      bio: 'Certified swim instructor specializing in open water safety'
    },
    {
      name: 'David Chen',
      lastMessage: 'Thanks for the safety tips!',
      time: '1d ago',
      unread: 0,
      image: 'https://images.unsplash.com/photo-1677170273559-165d576b7c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMGluc3RydWN0b3IlMjBjb2FjaHxlbnwxfHx8fDE3NjQ2ODYzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      experience: '3 years experience',
      bio: 'Former competitive swimmer, love helping beginners'
    },
    {
      name: 'Emma Thompson',
      lastMessage: 'See you at the meetup tomorrow!',
      time: '2d ago',
      unread: 0,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      experience: '7 years experience',
      bio: 'Open water enthusiast and safety advocate'
    }
  ];

  const friendChats = friends.map(friendName => ({
    name: friendName,
    lastMessage: userProfiles[friendName]?.lastMessage || 'Start a conversation',
    time: 'Just now',
    unread: 0,
    image: userProfiles[friendName]?.image || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
    experience: userProfiles[friendName]?.experience || 'Friend',
    bio: userProfiles[friendName]?.bio || 'Swim buddy',
  }));

  const allChats = [...recentChats, ...friendChats];

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-50 to-white h-full">
      {/* Chats List */}
      <div className="flex-1 overflow-y-auto">
        {allChats.map((chat, index) => (
          <button
            key={index}
            onClick={() => onMentorSelect(chat)}
            className="w-full p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-cyan-200 flex-shrink-0">
              <ImageWithFallback
                src={chat.image}
                alt={chat.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-left">
              <div className="flex items-center justify-between mb-1">
                <div className="font-medium text-gray-900">{chat.name}</div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-500">{chat.time}</span>
                </div>
              </div>
              <div className="text-sm text-gray-600 truncate">{chat.lastMessage}</div>
            </div>

            {chat.unread > 0 && (
              <div className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                {chat.unread}
              </div>
            )}
          </button>
        ))}

        {/* Start New Chat */}
        <button
          onClick={() => onNavigate('buddy')}
          className="w-full p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <MessageSquare className="text-white" size={24} />
          </div>
          <div className="flex-1 text-left">
            <div className="font-medium text-gray-900">Start New Chat</div>
            <div className="text-sm text-gray-600">Find a mentor or buddy</div>
          </div>
        </button>
      </div>
    </div>
  );
}