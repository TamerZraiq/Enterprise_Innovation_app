import { ArrowLeft, AlertCircle, Shield, Heart, Users, Waves, BookOpen } from 'lucide-react';
import { Screen } from '../App';

interface GuidelinesScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function GuidelinesScreen({ onNavigate }: GuidelinesScreenProps) {
  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-50 to-white h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 px-6 py-6 shadow-lg flex-shrink-0">
        <button
          onClick={() => onNavigate('home')}
          className="text-white mb-4 flex items-center gap-2 hover:gap-3 transition-all"
        >
          <ArrowLeft size={24} />
          <span>Back</span>
        </button>
        <h1 className="text-white mb-2">SwimSafe Guidelines</h1>
        <p className="text-indigo-100">Comprehensive safety and usage guidelines</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 pb-4">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full p-3">
              <BookOpen className="text-white" size={24} />
            </div>
            <h2 className="text-gray-900">Welcome to SwimSafe</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            SwimSafe is your companion for safe open-water swimming. These guidelines ensure that all users have
            a safe, respectful, and enjoyable experience. Please read through carefully before using the app.
          </p>
        </div>

        {/* General Safety */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full p-3">
              <Shield className="text-white" size={24} />
            </div>
            <h2 className="text-gray-900">General Safety Rules</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
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

        {/* Buddy System Guidelines */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
              <Users className="text-white" size={24} />
            </div>
            <h2 className="text-gray-900">Buddy System Guidelines</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
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
            <li className="flex gap-3">
              <span className="text-green-500 flex-shrink-0">•</span>
              <span><strong>Respect boundaries:</strong> Always respect your buddy's comfort level and don't pressure them.</span>
            </li>
          </ul>
        </div>

        {/* Mentor Interactions */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-3">
              <Heart className="text-white" size={24} />
            </div>
            <h2 className="text-gray-900">Mentor Interactions</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-500 flex-shrink-0">•</span>
              <span><strong>Be respectful:</strong> Treat all mentors with respect and courtesy.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 flex-shrink-0">•</span>
              <span><strong>Follow advice:</strong> Mentors are experienced swimmers. Listen to their guidance and safety recommendations.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 flex-shrink-0">•</span>
              <span><strong>Provide feedback:</strong> Rate your experience to help maintain quality mentorship.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 flex-shrink-0">•</span>
              <span><strong>Report issues:</strong> If you experience any inappropriate behavior, report it immediately.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 flex-shrink-0">•</span>
              <span><strong>Keep it professional:</strong> All mentorship should focus on swimming safety and skill development.</span>
            </li>
          </ul>
        </div>

        {/* Community Standards */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
              <Waves className="text-white" size={24} />
            </div>
            <h2 className="text-gray-900">Community Standards</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
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
              <span><strong>Keep it positive:</strong> Share encouraging posts and maintain a positive atmosphere.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-purple-500 flex-shrink-0">•</span>
              <span><strong>Respect privacy:</strong> Don't share others' location or personal information without consent.</span>
            </li>
          </ul>
        </div>

        {/* Meetup Guidelines */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-3">
              <AlertCircle className="text-white" size={24} />
            </div>
            <h2 className="text-gray-900">Meetup Guidelines</h2>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-amber-500 flex-shrink-0">•</span>
              <span><strong>Arrive on time:</strong> Respect organizers and other participants by being punctual.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 flex-shrink-0">•</span>
              <span><strong>Confirm attendance:</strong> If you can't make it, update your status so organizers can plan accordingly.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 flex-shrink-0">•</span>
              <span><strong>Follow group rules:</strong> Each organizer may have specific guidelines for their meetup.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 flex-shrink-0">•</span>
              <span><strong>Skill level honesty:</strong> Only join meetups appropriate for your skill level.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-500 flex-shrink-0">•</span>
              <span><strong>Safety first:</strong> The organizer has final say on safety decisions including cancellation.</span>
            </li>
          </ul>
        </div>

        {/* Emergency Procedures */}
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

        {/* Contact */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-gray-900 mb-2">Questions or Concerns?</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about these guidelines or need to report an issue, please contact our support team.
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-2 rounded-xl">
            Contact Support
          </button>
        </div>
      </div>

    </div>
  );
}