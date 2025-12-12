import { Thermometer, Waves, Wind, Droplets, MapPin, AlertTriangle, CheckCircle } from 'lucide-react';
import { Screen } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  location: string;
  showLocationOptions: boolean;
}

export function HomeScreen({ onNavigate, location }: HomeScreenProps) {

  const getConditionColor = (status: string) => {
    if (status === 'Dangerous' || status === 'High' || status === 'Strong') return { bgColor: '#fee', borderColor: '#ef4444', textColor: '#991b1b' };
    if (status === 'Caution' || status === 'Moderate' || status === 'Medium') return { bgColor: '#fef9c3', borderColor: '#eab308', textColor: '#854d0e' };
    return { bgColor: '#dcfce7', borderColor: '#22c55e', textColor: '#166534' };
  };

  const getOverallSafety = (conditions: any[]) => {
    const hasDangerous = conditions.some(c => ['Dangerous', 'High', 'Strong'].includes(c.status));
    const hasCaution = conditions.some(c => ['Caution', 'Moderate', 'Medium'].includes(c.status));
    
    if (hasDangerous) return { level: 'Dangerous', bgColor: '#ef4444', borderColor: '#b91c1c', icon: AlertTriangle };
    if (hasCaution) return { level: 'Caution', bgColor: '#eab308', borderColor: '#a16207', icon: AlertTriangle };
    return { level: 'Safe', bgColor: '#22c55e', borderColor: '#16a34a', icon: CheckCircle };
  };

  const beachMaps = {
    'Salthill Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-9.070%2C53.260%2C-9.040%2C53.280&amp;layer=mapnik',
    'Killiney Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-6.130%2C53.270%2C-6.100%2C53.290&amp;layer=mapnik',
    'Sandycove': 'https://www.openstreetmap.org/export/embed.html?bbox=-6.115%2C53.285%2C-6.085%2C53.305&amp;layer=mapnik',
    'Inchydoney Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-8.930%2C51.630%2C-8.900%2C51.650&amp;layer=mapnik',
    'Lahinch Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-9.360%2C52.930%2C-9.330%2C52.950&amp;layer=mapnik',
    'Strandhill': 'https://www.openstreetmap.org/export/embed.html?bbox=-8.610%2C54.270%2C-8.580%2C54.290&amp;layer=mapnik',
    'Portmarnock Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-6.145%2C53.420%2C-6.115%2C53.440&amp;layer=mapnik',
    'Curracloe Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-6.370%2C52.390%2C-6.340%2C52.410&amp;layer=mapnik',
    'Rossnowlagh Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-8.350%2C54.580%2C-8.320%2C54.600&amp;layer=mapnik',
    'Brittas Bay': 'https://www.openstreetmap.org/export/embed.html?bbox=-6.070%2C52.890%2C-6.040%2C52.910&amp;layer=mapnik',
    'Tramore Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-7.160%2C52.160%2C-7.130%2C52.180&amp;layer=mapnik',
    'Banna Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-9.880%2C52.310%2C-9.850%2C52.330&amp;layer=mapnik',
    'Inch Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-10.000%2C52.130%2C-9.970%2C52.150&amp;layer=mapnik',
    'Ballybunion Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-9.680%2C52.510%2C-9.650%2C52.530&amp;layer=mapnik',
    'Enniscrone Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-9.110%2C54.210%2C-9.080%2C54.230&amp;layer=mapnik',
    'Keem Bay': 'https://www.openstreetmap.org/export/embed.html?bbox=-10.220%2C53.970%2C-10.190%2C53.990&amp;layer=mapnik',
    'Dunmore East': 'https://www.openstreetmap.org/export/embed.html?bbox=-6.995%2C52.145%2C-6.965%2C52.165&amp;layer=mapnik',
    'Garretstown Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-8.590%2C51.640%2C-8.560%2C51.660&amp;layer=mapnik',
    'Barleycove Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-9.730%2C51.460%2C-9.700%2C51.480&amp;layer=mapnik',
    'Bundoran Beach': 'https://www.openstreetmap.org/export/embed.html?bbox=-8.290%2C54.475%2C-8.260%2C54.495&amp;layer=mapnik',
  };

  const locationData = {
    'Salthill Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '15°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.6m - 1.0m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '18 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Killiney Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '8°C', status: 'Dangerous' },
      { icon: Waves, label: 'Wave Height', value: '2.5m - 3.0m', status: 'High' },
      { icon: Wind, label: 'Wind Speed', value: '45 km/h', status: 'Strong' },
      { icon: Droplets, label: 'Current', value: 'High tide', status: 'Caution' },
    ],
    'Sandycove': [
      { icon: Thermometer, label: 'Water Temp', value: '13°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.3m - 0.8m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '10 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Inchydoney Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '15°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.8m - 1.2m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '18 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Lahinch Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '12°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '1.5m - 2.0m', status: 'Moderate' },
      { icon: Wind, label: 'Wind Speed', value: '25 km/h', status: 'Moderate' },
      { icon: Droplets, label: 'Current', value: 'Mid tide', status: 'Caution' },
    ],
    'Strandhill': [
      { icon: Thermometer, label: 'Water Temp', value: '11°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '1.8m - 2.5m', status: 'High' },
      { icon: Wind, label: 'Wind Speed', value: '30 km/h', status: 'Moderate' },
      { icon: Droplets, label: 'Current', value: 'High tide', status: 'Caution' },
    ],
    'Portmarnock Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '14°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.4m - 0.9m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '12 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Curracloe Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '13°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.6m - 1.1m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '16 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Rossnowlagh Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '12°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '1.4m - 1.9m', status: 'Moderate' },
      { icon: Wind, label: 'Wind Speed', value: '27 km/h', status: 'Moderate' },
      { icon: Droplets, label: 'Current', value: 'Mid tide', status: 'Caution' },
    ],
    'Brittas Bay': [
      { icon: Thermometer, label: 'Water Temp', value: '14°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.5m - 1.0m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '14 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Tramore Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '13°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.7m - 1.3m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '20 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Banna Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '12°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '1.0m - 1.5m', status: 'Moderate' },
      { icon: Wind, label: 'Wind Speed', value: '22 km/h', status: 'Moderate' },
      { icon: Droplets, label: 'Current', value: 'Mid tide', status: 'Caution' },
    ],
    'Inch Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '11°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '1.3m - 1.9m', status: 'Moderate' },
      { icon: Wind, label: 'Wind Speed', value: '26 km/h', status: 'Moderate' },
      { icon: Droplets, label: 'Current', value: 'Mid tide', status: 'Caution' },
    ],
    'Ballybunion Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '10°C', status: 'Caution' },
      { icon: Waves, label: 'Wave Height', value: '2.0m - 2.8m', status: 'High' },
      { icon: Wind, label: 'Wind Speed', value: '35 km/h', status: 'Strong' },
      { icon: Droplets, label: 'Current', value: 'High tide', status: 'Caution' },
    ],
    'Enniscrone Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '11°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '1.5m - 2.2m', status: 'Moderate' },
      { icon: Wind, label: 'Wind Speed', value: '24 km/h', status: 'Moderate' },
      { icon: Droplets, label: 'Current', value: 'Mid tide', status: 'Caution' },
    ],
    'Keem Bay': [
      { icon: Thermometer, label: 'Water Temp', value: '13°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.4m - 0.8m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '11 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Dunmore East': [
      { icon: Thermometer, label: 'Water Temp', value: '14°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.6m - 1.0m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '17 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Garretstown Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '12°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '1.1m - 1.6m', status: 'Moderate' },
      { icon: Wind, label: 'Wind Speed', value: '23 km/h', status: 'Moderate' },
      { icon: Droplets, label: 'Current', value: 'Mid tide', status: 'Caution' },
    ],
    'Barleycove Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '13°C', status: 'Good' },
      { icon: Waves, label: 'Wave Height', value: '0.7m - 1.2m', status: 'Calm' },
      { icon: Wind, label: 'Wind Speed', value: '19 km/h', status: 'Light' },
      { icon: Droplets, label: 'Current', value: 'Low tide', status: 'Safe' },
    ],
    'Bundoran Beach': [
      { icon: Thermometer, label: 'Water Temp', value: '9°C', status: 'Dangerous' },
      { icon: Waves, label: 'Wave Height', value: '2.3m - 3.2m', status: 'High' },
      { icon: Wind, label: 'Wind Speed', value: '42 km/h', status: 'Strong' },
      { icon: Droplets, label: 'Current', value: 'High tide', status: 'Caution' },
    ],
  };

  const hasValidLocation = locationData[location];
  const conditions = hasValidLocation ? locationData[location] : [];
  const overallSafety = hasValidLocation ? getOverallSafety(conditions) : null;

  return (
    <div className="flex-1 flex flex-col bg-gray-50 h-full">
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        
        {/* Overall Safety Status */}
        {hasValidLocation && overallSafety && (
          <div 
            className="border-4 text-white rounded-2xl p-6 shadow-lg"
            style={{ backgroundColor: overallSafety.bgColor, borderColor: overallSafety.borderColor }}
          >
            <div className="flex items-center gap-3 mb-2">
              <overallSafety.icon size={32} />
              <h2 className="text-2xl font-bold">{overallSafety.level} to Swim</h2>
            </div>
            <p className="text-white/90">
              {overallSafety.level === 'Safe' ? 'All conditions are favorable for swimming' :
               overallSafety.level === 'Caution' ? 'Some conditions require attention' :
               'Dangerous conditions - avoid swimming'}
            </p>
          </div>
        )}

        {/* Water Conditions Grid */}
        {hasValidLocation && (
          <div className="grid grid-cols-2 gap-4">
            {conditions.map((condition, index) => {
              const colors = getConditionColor(condition.status);
              return (
                <div 
                  key={index} 
                  className="border-4 rounded-xl p-4 shadow-sm"
                  style={{ backgroundColor: colors.bgColor, borderColor: colors.borderColor, color: colors.textColor }}
                >
                  <div className="flex flex-col items-center text-center">
                    <condition.icon size={28} className="mb-2" />
                    <div className="font-semibold text-sm mb-1">{condition.label}</div>
                    <div className="text-lg font-bold mb-1">{condition.value}</div>
                    <div className="text-xs font-medium px-2 py-1 rounded-full bg-white/50">
                      {condition.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Map */}
        {hasValidLocation && (
          <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden shadow-md relative group">
            <iframe
              className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all opacity-90 group-hover:opacity-100"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src={beachMaps[location] || 'https://www.openstreetmap.org/export/embed.html?bbox=-9.070%2C53.260%2C-9.040%2C53.280&amp;layer=mapnik'}
              title="Location Map"
            />
            <div className="absolute bottom-3 right-3 bg-white p-1.5 rounded-lg shadow-sm">
              <MapPin size={16} className="text-blue-600" />
            </div>
          </div>
        )}

        {/* No Location Selected */}
        {!hasValidLocation && (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
            <h3 className="text-gray-900 font-semibold mb-2">Search for a location</h3>
            <p className="text-gray-600">Enter a location in the search bar to view water conditions</p>
          </div>
        )}
      </div>
    </div>
  );
}