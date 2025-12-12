import { ArrowLeft, Check, Lock } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface BeginnerProgramScreenProps {
  onNavigate: (screen: Screen) => void;
  onCourseComplete: (courseId: string) => void;
}

export function BeginnerProgramScreen({ onNavigate, onCourseComplete }: BeginnerProgramScreenProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 1,
      title: 'Breathing & Calmness',
      description: 'Master controlled breathing techniques',
      duration: '10 min',
    },
    {
      id: 2,
      title: 'Understanding Conditions',
      description: 'Learn to read water and weather',
      duration: '15 min',
    },
    {
      id: 3,
      title: 'Staying Near the Shore',
      description: 'Practice safe distances',
      duration: '20 min',
    },
    {
      id: 4,
      title: 'Buddy Swim',
      description: 'Complete your first buddy swim',
      duration: '30 min',
    },
  ];

  const progress = (completedSteps.length / steps.length) * 100;

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-50 to-white h-full">
      {/* Back Button */}
      <div className="px-6 pt-4 flex-shrink-0">
        <button
          onClick={() => onNavigate('courses')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={20} />
          <span>Back to Courses</span>
        </button>
      </div>
      {/* Progress */}
      <div className="px-6 pb-6 pt-2 flex-shrink-0">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-900">Overall Progress</span>
            <span className="text-blue-600">{completedSteps.length} / {steps.length}</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4">
        {steps.map((step) => {
          const isCompleted = completedSteps.includes(step.id);
          const isCurrent = !isCompleted && completedSteps.length === step.id - 1;

          return (
            <button
              key={step.id}
              onClick={() => {
                if (!isCompleted) {
                  const newCompleted = [...completedSteps, step.id];
                  setCompletedSteps(newCompleted);
                  if (newCompleted.length === steps.length) {
                    onCourseComplete('beginner');
                  }
                }
              }}
              disabled={completedSteps.length < step.id - 1}
              className={`w-full rounded-2xl p-5 shadow-md transition-all ${isCompleted
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                : isCurrent
                  ? 'bg-white border-2 border-blue-300 hover:border-blue-500'
                  : completedSteps.length < step.id - 1
                    ? 'bg-gray-100 opacity-60 cursor-not-allowed'
                    : 'bg-white border-2 border-gray-200'
                }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${isCompleted
                  ? 'bg-white/20 backdrop-blur-sm'
                  : isCurrent
                    ? 'bg-purple-100'
                    : 'bg-gray-200'
                  }`}>
                  {isCompleted ? (
                    <Check className="text-white" size={24} />
                  ) : isCurrent ? (
                    <span className={isCurrent ? 'text-purple-600' : 'text-gray-400'}>{step.id}</span>
                  ) : (
                    <Lock className="text-gray-400" size={20} />
                  )}
                </div>

                <div className="flex-1 text-left">
                  <div className={`mb-1 ${isCompleted ? 'text-white' : isCurrent ? 'text-gray-900' : 'text-gray-500'}`}>
                    Step {step.id}
                  </div>
                  <div className={isCompleted ? 'text-white' : isCurrent ? 'text-gray-700' : 'text-gray-400'}>
                    {step.title}
                  </div>
                  <div className={`${isCompleted ? 'text-purple-100' : isCurrent ? 'text-gray-500' : 'text-gray-400'}`}>
                    {step.description}
                  </div>
                </div>

                <div className={`${isCompleted ? 'text-purple-100' : isCurrent ? 'text-gray-500' : 'text-gray-400'}`}>
                  {step.duration}
                </div>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
}