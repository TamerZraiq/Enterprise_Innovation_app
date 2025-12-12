import { useState } from 'react';
import { Waves, ArrowLeft } from 'lucide-react';

interface SignInScreenProps {
  onSignIn: () => void;
}

export function SignInScreen({ onSignIn }: SignInScreenProps) {
  const [email, setEmail] = useState('');
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [acceptedGuidelines, setAcceptedGuidelines] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowGuidelines(true);
  };

  const handleAcceptGuidelines = () => {
    if (acceptedGuidelines) {
      onSignIn();
    }
  };

  if (showGuidelines) {
    return (
      <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-50 to-white h-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-6 shadow-lg flex-shrink-0">
          <button
            onClick={() => setShowGuidelines(false)}
            className="text-white mb-4 flex items-center gap-2 hover:gap-3 transition-all"
          >
            <ArrowLeft size={24} />
            <span>Back</span>
          </button>
          <h1 className="text-white mb-2">App Guidelines</h1>
          <p className="text-indigo-100">Please read and accept to continue</p>
        </div>

        {/* Guidelines Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-gray-900 mb-4">General Safety Rules</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-red-500 flex-shrink-0">•</span>
                <span><strong>Never swim alone:</strong> Always use the buddy system. Swimming with a partner is essential for safety.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 flex-shrink-0">•</span>
                <span><strong>Check conditions:</strong> Always check water temperature, wave height, currents, and weather before entering the water.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 flex-shrink-0">•</span>
                <span><strong>Know your limits:</strong> Don't push beyond your skill level. Progress gradually through the beginner program.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 flex-shrink-0">•</span>
                <span><strong>Wear proper equipment:</strong> Use a wetsuit in cold water, bright swim cap, and swim buoy for visibility.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 flex-shrink-0">•</span>
                <span><strong>Stay visible:</strong> Wear bright colors and use a safety buoy to ensure you can be seen by boats and rescue services.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-gray-900 mb-4">Water Conditions Guidelines</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-500 flex-shrink-0">•</span>
                <span><strong>Water Temperature:</strong> Below 15°C requires wetsuit. Below 10°C is for experienced swimmers only.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 flex-shrink-0">•</span>
                <span><strong>Wave Height:</strong> Waves over 1.5m are dangerous for most swimmers. Stay out if waves exceed 2m.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 flex-shrink-0">•</span>
                <span><strong>Wind Speed:</strong> Winds over 25 km/h create dangerous conditions. Avoid swimming in strong winds.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 flex-shrink-0">•</span>
                <span><strong>Currents & Tides:</strong> Check tide times and current strength. Avoid swimming during strong tidal flows.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 flex-shrink-0">•</span>
                <span><strong>Visibility:</strong> Poor visibility (fog, rain) significantly increases risk. Postpone swim if visibility is limited.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-gray-900 mb-4">Buddy System Guidelines</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-500 flex-shrink-0">•</span>
                <span><strong>Communication:</strong> Establish clear communication signals before entering the water.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 flex-shrink-0">•</span>
                <span><strong>Stay together:</strong> Keep your buddy within visual range at all times.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 flex-shrink-0">•</span>
                <span><strong>Match skill levels:</strong> Pair with someone of similar ability to ensure both swimmers are comfortable.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-500 flex-shrink-0">•</span>
                <span><strong>Emergency plan:</strong> Discuss what to do in case of emergency before swimming.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-gray-900 mb-4">Community Standards</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-3">
                <span className="text-purple-500 flex-shrink-0">•</span>
                <span><strong>Be supportive:</strong> Encourage fellow swimmers and celebrate their achievements.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 flex-shrink-0">•</span>
                <span><strong>Share knowledge:</strong> Help beginners by sharing your experiences and tips.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 flex-shrink-0">•</span>
                <span><strong>No harassment:</strong> Any form of harassment or bullying will result in account suspension.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-500 flex-shrink-0">•</span>
                <span><strong>Respect privacy:</strong> Don't share others' location or personal information without consent.</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-2xl shadow-lg p-6 text-white">
            <h2 className="text-white mb-4">Emergency Procedures</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0">1.</span>
                <span><strong>If you're in trouble:</strong> Signal for help immediately. Float on your back and conserve energy.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">2.</span>
                <span><strong>If your buddy is in trouble:</strong> Call emergency services (999 in UK) before attempting rescue.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">3.</span>
                <span><strong>Never attempt rescue alone:</strong> Alert nearby swimmers and lifeguards if available.</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0">4.</span>
                <span><strong>Know the location:</strong> Always know your exact location to provide to emergency services.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accept Section */}
        <div className="p-6 bg-white border-t border-gray-200">
          <label className="flex items-start gap-3 mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={acceptedGuidelines}
              onChange={(e) => setAcceptedGuidelines(e.target.checked)}
              className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-gray-700">
              I have read and agree to follow the SwimSafe guidelines and safety rules
            </span>
          </label>
          <button
            onClick={handleAcceptGuidelines}
            disabled={!acceptedGuidelines}
            className={`w-full py-3 rounded-xl transition-colors ${
              acceptedGuidelines
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue to SwimSafe
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cyan-500 to-blue-600 p-8">
      <div className="flex flex-col justify-center items-center mt-32 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 mb-6">
          <Waves className="text-white" size={64} />
        </div>
        
        <h1 className="text-white mb-2">SwimSafe</h1>
        <p className="text-cyan-100 text-center mb-12">
          Build confidence in open-water swimming
        </p>
      </div>

      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border-0 outline-none focus:ring-2 focus:ring-white/50"
          />
          
          <button 
            type="submit"
            className="w-full bg-white text-blue-600 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Continue
          </button>
        </form>
        
        <div className="text-center text-white/80">or</div>
        
        <button 
          onClick={() => setShowGuidelines(true)}
          className="w-full bg-white text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 border border-gray-300"
        >
          <svg className="w-3 h-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>
        
        <button 
          onClick={() => setShowGuidelines(true)}
          className="w-full bg-black text-white px-4 py-3 rounded-xl hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Continue with Apple
        </button>
      </div>
    </div>
  );
}
