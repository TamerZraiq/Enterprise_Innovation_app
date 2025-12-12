import { ArrowLeft, Send, Smile, Paperclip } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MentorChatScreenProps {
  onNavigate: (screen: Screen) => void;
  mentor: { name: string; experience: string; bio: string; image?: string } | null;
}

export function MentorChatScreen({ onNavigate, mentor }: MentorChatScreenProps) {
  const mentorName = mentor?.name || 'Sarah Mitchell';
  
  const chatHistory: { [key: string]: any[] } = {
    'Sarah Mitchell': [
      { id: 1, sender: 'mentor', text: 'Hey there! I saw your request. How can I help you today?' },
      { id: 2, sender: 'user', text: "I'm nervous about open water swimming." },
      { id: 3, sender: 'mentor', text: "No worries at all, that's completely normal! I can guide you step-by-step. Have you done any pool swimming before?" },
    ],
    'David Chen': [
      { id: 1, sender: 'mentor', text: 'Hi! Ready to push your limits today?' },
      { id: 2, sender: 'user', text: 'Yes! What do you recommend?' },
      { id: 3, sender: 'mentor', text: 'Let\'s work on your endurance. How about a 2km swim this weekend?' },
    ],
    'Emma Thompson': [
      { id: 1, sender: 'mentor', text: 'Hello! Excited to swim with you!' },
      { id: 2, sender: 'user', text: 'Me too! When are you free?' },
      { id: 3, sender: 'mentor', text: 'How about Saturday morning at Brighton Beach?' },
    ],
    'James Wilson': [
      { id: 1, sender: 'mentor', text: 'Hey! Want to explore some new swim spots?' },
      { id: 2, sender: 'user', text: 'Sounds great! Any suggestions?' },
    ],
    'Lisa Anderson': [
      { id: 1, sender: 'mentor', text: 'Hi! How are you feeling about your progress?' },
      { id: 2, sender: 'user', text: 'Getting more confident each day!' },
    ],
    'Michael Brown': [
      { id: 1, sender: 'mentor', text: 'Morning swim tomorrow at 6 AM?' },
      { id: 2, sender: 'user', text: 'Perfect! See you there!' },
    ],
  };

  const [messages, setMessages] = useState(chatHistory[mentorName] || [
    { id: 1, sender: 'mentor', text: 'Hey! Great to connect with you!' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      const userMsg = { id: messages.length + 1, sender: 'user', text: newMessage };
      setMessages(prev => [...prev, userMsg]);
      setNewMessage('');
      
      // Simulate mentor response
      setTimeout(() => {
        const responses = [
          "That sounds perfect! I'll send you the location details.",
          "Great! Looking forward to it!",
          "Absolutely! Let's make it happen.",
          "Perfect! I'll see you there.",
          "Sounds good! Can't wait!",
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prev => [...prev, { 
          id: prev.length + 1, 
          sender: 'mentor', 
          text: randomResponse
        }]);
      }, 1000);
    }
  };

  const mentorImage = mentor?.image || 'https://images.unsplash.com/photo-1763713518951-758e184992f8?w=400';

  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-400 to-cyan-500 px-6 py-4 shadow-lg">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => onNavigate('recentchats')}
            className="text-white hover:scale-110 transition-transform"
          >
            <ArrowLeft size={24} />
          </button>
          
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex-shrink-0">
            <ImageWithFallback
              src={mentorImage}
              alt={mentorName}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="text-white">{mentorName}</div>
            <div className="text-green-100 flex items-center gap-1">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-br-sm'
                  : 'bg-white text-gray-800 rounded-bl-sm shadow-md'
              }`}
            >
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Smile size={24} />
          </button>
          
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-3 flex items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none text-gray-800"
            />
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Paperclip size={20} />
            </button>
          </div>
          
          <button
            onClick={handleSend}
            className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-full p-3 hover:from-blue-500 hover:to-cyan-600 transition-all shadow-lg"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}