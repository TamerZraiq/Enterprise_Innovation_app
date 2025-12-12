import { ArrowLeft, UserPlus, Users, Star, MessageCircle } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BuddySystemScreenProps {
  onNavigate: (screen: Screen) => void;
  onMentorSelect: (mentor: { name: string; experience: string; bio: string }) => void;
  onUserClick?: (userName: string) => void;
}

export function BuddySystemScreen({ onNavigate, onMentorSelect, onUserClick }: BuddySystemScreenProps) {
  const mentors = [
    {
      name: 'Sarah Mitchell',
      experience: '5 years experience',
      bio: 'Certified swim instructor specializing in open water safety',
      rating: 4.9,
      swims: 127,
      image: 'https://images.unsplash.com/photo-1763713518951-758e184992f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwb3J0cmFpdCUyMG1lbnRvcnxlbnwxfHx8fDE3NjQ2ODYzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Chen',
      experience: '3 years experience',
      bio: 'Former competitive swimmer, love helping beginners',
      rating: 4.8,
      swims: 98,
      image: 'https://images.unsplash.com/photo-1677170273559-165d576b7c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2ltbWluZyUyMGluc3RydWN0b3IlMjBjb2FjaHxlbnwxfHx8fDE3NjQ2ODYzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emma Thompson',
      experience: '7 years experience',
      bio: 'Open water enthusiast and safety advocate',
      rating: 5.0,
      swims: 203,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    },
  ];

  const buddies = [
    {
      name: 'James Wilson',
      level: 'Intermediate',
      bio: 'Weekend warrior swimmer. Love exploring new swim spots!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      name: 'Lisa Anderson',
      level: 'Beginner',
      bio: 'New to open water swimming. Looking for patient swim partners!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: 'Michael Brown',
      level: 'Advanced',
      bio: 'Love morning swims at Brighton Beach. Always up for a challenge!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-50 to-white h-full">
      <div className="flex-1 overflow-y-auto px-6 pt-6 space-y-6 pb-4">
        {/* Mentors Section */}
        <div>
          <h3 className="text-gray-700 mb-4">Available Mentors</h3>
          <div className="space-y-4">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="flex gap-4 p-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-200 to-cyan-200">
                    <ImageWithFallback
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-gray-900 mb-1">{mentor.name}</div>
                    <div className="text-gray-600 mb-2">{mentor.experience}</div>
                    <div className="flex items-center gap-3 text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="text-amber-400 fill-amber-400" size={14} />
                        <span>{mentor.rating}</span>
                      </div>
                      <div>{mentor.swims} swims</div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <p className="text-gray-600 mb-3">{mentor.bio}</p>
                  <button
                    onClick={() => onMentorSelect(mentor)}
                    className="w-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-xl py-2 flex items-center justify-center gap-2 hover:from-blue-500 hover:to-cyan-600 transition-all"
                  >
                    <MessageCircle size={18} />
                    <span>Message {mentor.name.split(' ')[0]}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buddies Section */}
        <div>
          <h3 className="text-gray-700 mb-4">Available Swim Buddies</h3>
          <div className="space-y-4">
            {buddies.map((buddy, index) => (
              <button
                key={index}
                onClick={() => onUserClick && onUserClick(buddy.name)}
                className="w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="flex gap-4 p-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-green-200 to-emerald-200">
                    <ImageWithFallback
                      src={buddy.image}
                      alt={buddy.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-gray-900 mb-1">{buddy.name}</div>
                    <div className="text-green-600 text-sm font-medium">{buddy.level}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}