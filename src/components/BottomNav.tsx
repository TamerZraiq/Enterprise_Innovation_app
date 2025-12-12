import { Home, Users, MessageSquare, Calendar, GraduationCap } from 'lucide-react';
import { Screen } from '../App';

interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: Screen) => void;
}

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'feed', icon: MessageSquare, label: 'Community' },
    { id: 'buddy', icon: Users, label: 'Buddy' },
    { id: 'meetups', icon: Calendar, label: 'Events' },
    { id: 'safety', icon: GraduationCap, label: 'Learn' },
  ];

  return (
    <div className="bg-white border-t border-gray-200 px-4 py-3 flex justify-around items-center shadow-lg">
      {navItems.map((item) => {
        // Highlight logic: 'safety' or 'beginner' highlights the 'Learn' tab
        const isActive =
          item.id === 'safety'
            ? (currentScreen === 'safety' || currentScreen === 'beginner' || currentScreen === 'guidelines')
            : currentScreen === item.id;

        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as Screen)}
            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-cyan-600' : 'text-gray-400 hover:text-gray-600'
              }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-xs">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
