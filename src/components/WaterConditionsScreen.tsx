import { ArrowLeft, Thermometer, Waves, Wind, Droplets, MapPin, LucideProps } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, ForwardRefExoticComponent, RefAttributes } from 'react';

interface WaterConditionsScreenProps {
  onNavigate: (screen: Screen) => void;
}

interface Condition {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  label: string;
  value: string;
  status: string;
}

interface LocationData {
  [key: string]: Condition[];
}

export function WaterConditionsScreen({ onNavigate }: WaterConditionsScreenProps) {
  const [location, setLocation] = useState('');

  const getConditionColor = (status: string) => {
    if (status === 'Dangerous' || status === 'High' || status === 'Strong' || status === 'Caution') {
      return '#ef4444';
    }
    return '#22c55e';
  };

  const locationData: LocationData = {
    'Brighton Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '18°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.5m - 1.0m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '12 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Salthill': [
      { icon: Thermometer, label: 'Water Temp', value: '8°C', status: 'Dangerous' },
      { icon: Waves, label: 'Wave Height', value: '2.5m - 3.0m', status: 'High' },
      { icon: Wind, label: 'Wind Speed', value: '45 km/h', status: 'Strong' },
      { icon: Droplets, label: 'Current', value: 'High tide', status: 'Caution' },
    ]
  };

  const hasValidLocation = locationData[location];
  const conditions = hasValidLocation ? locationData[location] : [];

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-cyan-50 to-white h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-6 shadow-lg flex-shrink-0">
        <button
          onClick={() => onNavigate('home')}
          className="text-white mb-4 flex items-center gap-2 hover:gap-3 transition-all"
        >
          <ArrowLeft size={24} />
          <span>Back</span>
        </button>
        <h1 className="text-white mb-4">Water Conditions</h1>

        {/* Location */}
        <div className="flex items-center gap-2 text-white bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">
          <MapPin size={20} />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 bg-transparent outline-none placeholder-white/70"
            placeholder="Enter location..."
          />
        </div>
      </div>

      {/* Conditions */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 space-y-4 pb-4">
        {!hasValidLocation && (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-gray-900 font-semibold mb-2">Enter a location</h3>
            <p className="text-gray-600">Type Brighton Beach or Salthill to view conditions</p>
          </div>
        )}
        
        {conditions.map((condition, index) => {
          const bgColor = getConditionColor(condition.status);
          return (
            <div 
              key={index} 
              style={{
                background: bgColor,
                borderRadius: '1rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                marginBottom: '1rem',
                padding: '1rem'
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                  <div style={{
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    display: 'flex'
                  }}>
                    <condition.icon color="white" size={24} />
                  </div>
                  <div>
                    <div style={{color: 'white', fontWeight: '500'}}>{condition.label}</div>
                    <div style={{color: 'rgba(255,255,255,0.9)'}}>{condition.value}</div>
                  </div>
                </div>
                <div style={{
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  color: 'white',
                  fontWeight: '500'
                }}>
                  {condition.status}
                </div>
              </div>
            </div>
          );
        })}

        {/* Additional Info */}
        {hasValidLocation && (
          <div className={`border-l-4 rounded-xl p-4 shadow-sm ${
            location === 'Salthill' 
              ? 'bg-red-50 border-red-500' 
              : 'bg-blue-50 border-blue-500'
          }`}>
            <div className={`font-semibold mb-1 ${
              location === 'Salthill' ? 'text-red-900' : 'text-blue-900'
            }`}>
              {location === 'Salthill' ? '⚠️ Dangerous conditions - Do not swim!' : '💡 Perfect conditions for swimming!'}
            </div>
            <div className={`text-sm ${location === 'Salthill' ? 'text-red-700' : 'text-blue-700'}`}>
              {location === 'Salthill' 
                ? 'Water is extremely cold with high waves and strong winds. Stay out of the water.' 
                : 'Water is calm with good visibility. Always swim with a buddy.'}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
