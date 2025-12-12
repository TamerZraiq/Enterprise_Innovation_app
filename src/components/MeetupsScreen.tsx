import { ArrowLeft, Calendar, MapPin, Users, Clock, Plus } from 'lucide-react';
import { Screen } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface MeetupsScreenProps {
  onNavigate: (screen: Screen) => void;
}

export function MeetupsScreen({ onNavigate }: MeetupsScreenProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'my'>('upcoming');
  const [meetups, setMeetups] = useState([
    {
      id: 1,
      title: 'Saturday Morning Swim',
      date: 'Dec 7, 2025',
      time: '7:00 AM',
      location: 'Brighton Beach',
      attendees: 12,
      maxAttendees: 20,
      organizer: 'Sarah Mitchell',
      level: 'All Levels',
      joined: true,
    },
    {
      id: 2,
      title: 'Beginner Friendly Swim',
      date: 'Dec 9, 2025',
      time: '10:00 AM',
      location: 'Hove Lagoon',
      attendees: 8,
      maxAttendees: 15,
      organizer: 'David Chen',
      level: 'Beginner',
      joined: false,
    },
    {
      id: 3,
      title: 'Long Distance Training',
      date: 'Dec 10, 2025',
      time: '6:00 AM',
      location: 'Saltdean Beach',
      attendees: 15,
      maxAttendees: 15,
      organizer: 'Emma Thompson',
      level: 'Advanced',
      joined: false,
    },
    {
      id: 4,
      title: 'Sunset Swim Session',
      date: 'Dec 12, 2025',
      time: '5:30 PM',
      location: 'Brighton Marina',
      attendees: 6,
      maxAttendees: 12,
      organizer: 'Alex Morgan',
      level: 'Intermediate',
      joined: false,
    },
  ]);

  const toggleJoinMeetup = (meetupId: number) => {
    setMeetups(meetups.map(meetup => {
      if (meetup.id === meetupId && meetup.attendees < meetup.maxAttendees) {
        return {
          ...meetup,
          joined: !meetup.joined,
          attendees: meetup.joined ? meetup.attendees - 1 : meetup.attendees + 1
        };
      }
      return meetup;
    }));
  };

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-50 to-white h-full">
      {/* Tabs */}
      <div className="px-6 mb-4 flex gap-3 flex-shrink-0">
        <button 
          onClick={() => setActiveTab('upcoming')}
          className={`flex-1 py-2 rounded-xl shadow-md transition-all ${
            activeTab === 'upcoming' 
              ? 'bg-gradient-to-r from-sky-500 to-blue-500 text-white' 
              : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300'
          }`}
        >
          Upcoming
        </button>
        <button 
          onClick={() => setActiveTab('my')}
          className={`flex-1 py-2 rounded-xl shadow-md transition-all ${
            activeTab === 'my' 
              ? 'bg-gradient-to-r from-sky-500 to-blue-500 text-white' 
              : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-orange-300'
          }`}
        >
          My Meetups
        </button>
      </div>

      {/* Meetups List */}
      <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
        {meetups.filter(meetup => activeTab === 'my' ? meetup.joined : true).map((meetup) => (
          <div key={meetup.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-gray-900 flex-1">{meetup.title}</h3>
                <div className={`px-3 py-1 rounded-full text-xs ${meetup.level === 'Beginner'
                    ? 'bg-green-200 text-green-800'
                    : meetup.level === 'Intermediate'
                      ? 'bg-blue-200 text-blue-800'
                      : meetup.level === 'Advanced'
                        ? 'bg-purple-200 text-purple-800'
                        : 'bg-gray-200 text-gray-800'
                  }`}>
                  {meetup.level}
                </div>
              </div>
              <p className="text-gray-600">Organized by {meetup.organizer}</p>
            </div>

            {/* Details */}
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar size={18} className="text-amber-500" />
                <span>{meetup.date}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Clock size={18} className="text-amber-500" />
                <span>{meetup.time}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={18} className="text-amber-500" />
                <span>{meetup.location}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Users size={18} className="text-amber-500" />
                <span>{meetup.attendees} / {meetup.maxAttendees} swimmers</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all"
                  style={{ width: `${(meetup.attendees / meetup.maxAttendees) * 100}%` }}
                ></div>
              </div>

              {/* Action Button */}
              {meetup.attendees >= meetup.maxAttendees && !meetup.joined ? (
                <button className="w-full bg-gray-300 text-gray-600 py-3 rounded-xl cursor-not-allowed" disabled>
                  Meetup Full
                </button>
              ) : meetup.joined ? (
                <button
                  onClick={() => toggleJoinMeetup(meetup.id)}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  ✓ Joined - Click to Leave
                </button>
              ) : (
                <button
                  onClick={() => toggleJoinMeetup(meetup.id)}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  Join Meetup
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}