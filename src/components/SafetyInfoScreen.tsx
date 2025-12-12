import { ArrowLeft, AlertTriangle, Heart, LifeBuoy, Package, BookOpen, FileText } from 'lucide-react';
import { Screen } from '../App';

interface SafetyInfoScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function SafetyInfoScreen({ onNavigate }: SafetyInfoScreenProps) {
  const safetyCategories = [
    {
      icon: AlertTriangle,
      title: 'Identifying Hazards',
      color: 'from-blue-700 to-blue-800',
      items: [
        'Check for boats and vessels',
        'Look for underwater obstacles',
        'Assess tides and currents',
        'Monitor weather conditions',
        'Note water visibility'
      ]
    },
    {
      icon: Heart,
      title: 'Basic Safety Tips',
      color: 'from-blue-500 to-cyan-500',
      items: [
        'Never swim alone',
        'Use bright swim cap for visibility',
        'Stay close to shore',
        'Swim parallel to shoreline',
        'Keep emergency contacts on hand'
      ]
    },
    {
      icon: LifeBuoy,
      title: 'What to Do If You Panic',
      color: 'from-blue-600 to-indigo-600',
      items: [
        'Float on your back',
        'Take slow, deep breaths',
        'Signal for help if needed',
        'Don\'t fight the water',
        'Stay calm and conserve energy'
      ]
    },
    {
      icon: Package,
      title: 'Equipment Checklist',
      color: 'from-cyan-500 to-teal-500',
      items: [
        'Wetsuit',
        'Bright swim cap',
        'Goggles',
        'Safety buoy',
        'Whistle'
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-50 to-white h-full">
      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={() => onNavigate('courses')}
            className="w-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-2 rounded-xl">
                <BookOpen size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold">Training Courses</div>
                <div className="text-blue-100 text-sm opacity-90">Beginner to Advanced programs</div>
              </div>
            </div>
            <div className="text-blue-200 group-hover:translate-x-1 transition-transform">→</div>
          </button>

          <button
            onClick={() => onNavigate('safetyessentials')}
            className="w-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-2 rounded-xl">
                <FileText size={24} />
              </div>
              <div className="text-left">
                <div className="font-semibold">Safety Essentials</div>
                <div className="text-indigo-100 text-sm opacity-90">Essential safety information</div>
              </div>
            </div>
            <div className="text-indigo-200 group-hover:translate-x-1 transition-transform">→</div>
          </button>
        </div>


      </div>

    </div>
  );
}