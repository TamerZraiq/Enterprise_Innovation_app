import { ArrowLeft, AlertTriangle, Heart, LifeBuoy, Package } from 'lucide-react';
import { Screen } from '../App';

interface SafetyEssentialsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function SafetyEssentialsScreen({ onNavigate }: SafetyEssentialsScreenProps) {
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
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {safetyCategories.map((section, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className={`bg-gradient-to-r ${section.color} p-4 flex items-center gap-3`}>
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                <section.icon className="text-white" size={24} />
              </div>
              <h3 className="text-white">{section.title}</h3>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}