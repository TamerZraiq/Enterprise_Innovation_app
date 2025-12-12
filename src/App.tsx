import { useState } from 'react';
import { User, MessageSquare, MapPin } from 'lucide-react';
import { SignInScreen } from './components/SignInScreen';
import { HomeScreen } from './components/HomeScreen';
import { SafetyInfoScreen } from './components/SafetyInfoScreen';
import { SafetyEssentialsScreen } from './components/SafetyEssentialsScreen';
import { RecentChatsScreen } from './components/RecentChatsScreen';
import { BeginnerProgramScreen } from './components/BeginnerProgramScreen';
import { WaterConditionsScreen } from './components/WaterConditionsScreen';
import { BuddySystemScreen } from './components/BuddySystemScreen';
import { MentorChatScreen } from './components/MentorChatScreen';
import { FeedScreen } from './components/FeedScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { MeetupsScreen } from './components/MeetupsScreen';
import { GuidelinesScreen } from './components/GuidelinesScreen';
import { CoursesScreen } from './components/CoursesScreen';
import { IntermediateProgramScreen } from './components/IntermediateProgramScreen';
import { AdvancedProgramScreen } from './components/AdvancedProgramScreen';
import { BottomNav } from './components/BottomNav';

export type Screen =
  | 'signin'
  | 'home'
  | 'safety'
  | 'safetyessentials'
  | 'courses'
  | 'beginner'
  | 'intermediate'
  | 'advanced'
  | 'conditions'
  | 'buddy'
  | 'recentchats'
  | 'chat'
  | 'feed'
  | 'profile'
  | 'meetups'
  | 'guidelines';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('signin');
  const [selectedMentor, setSelectedMentor] = useState<{ name: string; experience: string; bio: string; image?: string } | null>(null);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [friends, setFriends] = useState<string[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [location, setLocation] = useState('');
  const [showLocationOptions, setShowLocationOptions] = useState(false);
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);

  const handleSignIn = () => {
    setIsLoggedIn(true);
    setCurrentScreen('home');
  };

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleMentorSelect = (mentor: { name: string; experience: string; bio: string }) => {
    setSelectedMentor(mentor);
    setCurrentScreen('chat');
  };

  const handleUserProfileView = (userName: string) => {
    setSelectedUser(userName);
    setCurrentScreen('profile');
  };

  const handleAddFriend = (userName: string) => {
    if (!friends.includes(userName)) {
      setFriends([...friends, userName]);
    }
  };

  const handleRemoveFriend = (userName: string) => {
    setFriends(friends.filter(f => f !== userName));
  };

  const handleCourseComplete = (courseId: string) => {
    if (!completedCourses.includes(courseId)) {
      setCompletedCourses([...completedCourses, courseId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Phone Frame */}
        <div className="bg-black rounded-[3rem] p-4 shadow-2xl">
          <div className="bg-white rounded-[2.5rem] overflow-hidden h-[800px] flex flex-col relative">
            {currentScreen !== 'signin' && (
              <div className="px-6 py-6 flex items-center justify-between gap-4 flex-shrink-0">
                <button
                  onClick={() => {
                    setSelectedUser(null);
                    handleNavigate('profile');
                  }}
                  className="p-2 rounded-full bg-white shadow-sm hover:shadow-md text-blue-600 transition-all"
                >
                  <User size={24} />
                </button>

                {currentScreen === 'home' ? (
                  <div className="flex-1 relative">
                    <div className="flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-3 border border-gray-100">
                      <MapPin size={18} className="text-gray-400" />
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onFocus={() => setShowLocationOptions(true)}
                        onBlur={() => setTimeout(() => setShowLocationOptions(false), 200)}
                        placeholder="Search location..."
                        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm font-medium"
                      />
                    </div>
                    {showLocationOptions && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200" style={{zIndex: 9999, maxHeight: '240px', overflowY: 'auto'}}>
                        <div className="p-2">
                          {['Salthill Beach', 'Killiney Beach', 'Sandycove', 'Inchydoney Beach', 'Lahinch Beach', 'Strandhill', 'Portmarnock Beach', 'Curracloe Beach', 'Rossnowlagh Beach', 'Brittas Bay', 'Tramore Beach', 'Banna Beach', 'Inch Beach', 'Ballybunion Beach', 'Enniscrone Beach', 'Keem Bay', 'Dunmore East', 'Garretstown Beach', 'Barleycove Beach', 'Bundoran Beach'].map((loc) => (
                            <button
                              key={loc}
                              onClick={() => {
                                setLocation(loc);
                                setShowLocationOptions(false);
                              }}
                              className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-3"
                            >
                              <MapPin size={16} className="text-gray-400" />
                              <span className="text-gray-700">{loc}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex-1 text-center">
                    <h1 className="text-xl font-semibold text-gray-900">
                      {currentScreen === 'safety' ? 'Learn Center' :
                       currentScreen === 'safetyessentials' ? 'Safety Essentials' :
                       currentScreen === 'courses' ? 'Training Courses' :
                       currentScreen === 'beginner' ? 'Beginner Program' :
                       currentScreen === 'intermediate' ? 'Intermediate Program' :
                       currentScreen === 'advanced' ? 'Advanced Program' :
                       currentScreen === 'conditions' ? 'Water Conditions' :
                       currentScreen === 'buddy' ? 'Buddy System' :
                       currentScreen === 'recentchats' ? 'Recent Chats' :
                       currentScreen === 'chat' ? 'Mentor Chat' :
                       currentScreen === 'feed' ? 'Community Feed' :
                       currentScreen === 'profile' ? 'Profile' :
                       currentScreen === 'meetups' ? 'Swim Meetups' :
                       currentScreen === 'guidelines' ? 'App Guidelines' : 'SwimSafe'}
                    </h1>
                  </div>
                )}

                <button
                  onClick={() => handleNavigate('recentchats')}
                  className="p-2 rounded-full bg-white shadow-sm hover:shadow-md text-blue-600 transition-all"
                >
                  <MessageSquare size={24} />
                </button>
              </div>
            )}
            <div className="flex-1 overflow-hidden">
              {currentScreen === 'signin' && <SignInScreen onSignIn={handleSignIn} />}
              {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} location={location} showLocationOptions={showLocationOptions} />}
              {currentScreen === 'safety' && <SafetyInfoScreen onNavigate={handleNavigate} />}
              {currentScreen === 'safetyessentials' && <SafetyEssentialsScreen onNavigate={handleNavigate} />}
              {currentScreen === 'courses' && <CoursesScreen onNavigate={handleNavigate} completedCourses={completedCourses} />}
              {currentScreen === 'beginner' && <BeginnerProgramScreen onNavigate={handleNavigate} onCourseComplete={handleCourseComplete} />}
              {currentScreen === 'intermediate' && <IntermediateProgramScreen onNavigate={handleNavigate} onCourseComplete={handleCourseComplete} />}
              {currentScreen === 'advanced' && <AdvancedProgramScreen onNavigate={handleNavigate} onCourseComplete={handleCourseComplete} />}
              {currentScreen === 'conditions' && <WaterConditionsScreen onNavigate={handleNavigate} />}
              {currentScreen === 'buddy' && <BuddySystemScreen onNavigate={handleNavigate} onMentorSelect={handleMentorSelect} onUserClick={handleUserProfileView} />}
              {currentScreen === 'recentchats' && <RecentChatsScreen onNavigate={handleNavigate} onMentorSelect={handleMentorSelect} friends={friends} />}
              {currentScreen === 'chat' && <MentorChatScreen onNavigate={handleNavigate} mentor={selectedMentor} />}
              {currentScreen === 'feed' && <FeedScreen onNavigate={handleNavigate} onUserClick={handleUserProfileView} />}
              {currentScreen === 'profile' && <ProfileScreen onNavigate={handleNavigate} userName={selectedUser} onMessageUser={handleMentorSelect} onAddFriend={handleAddFriend} onRemoveFriend={handleRemoveFriend} isFriend={selectedUser ? friends.includes(selectedUser) : false} />}
              {currentScreen === 'meetups' && <MeetupsScreen onNavigate={handleNavigate} />}
              {currentScreen === 'guidelines' && <GuidelinesScreen onNavigate={handleNavigate} />}
            </div>
            {currentScreen !== 'signin' && <BottomNav currentScreen={currentScreen} onNavigate={handleNavigate} />}
          </div>
        </div>
      </div>
    </div>
  );
}