import { ArrowLeft, Check, Lock } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface AdvancedProgramScreenProps {
  onNavigate: (screen: Screen) => void;
  onCourseComplete: (courseId: string) => void;
}

export function AdvancedProgramScreen({ onNavigate, onCourseComplete }: AdvancedProgramScreenProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    { id: 1, title: 'Rough Water Training', description: 'Master swimming in challenging conditions', duration: '40 min' },
    { id: 2, title: 'Long Distance Endurance', description: 'Complete 5km swim', duration: '90 min' },
    { id: 3, title: 'Night Swimming', description: 'Practice low visibility swimming', duration: '30 min' },
    { id: 4, title: 'Emergency Response', description: 'Advanced rescue techniques', duration: '45 min' },
    { id: 5, title: 'Tidal Current Navigation', description: 'Swim in strong currents', duration: '50 min' },
    { id: 6, title: 'Marathon Challenge', description: 'Complete 10km open water swim', duration: '120 min' },
  ];

  const progress = (completedSteps.length / steps.length) * 100;

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      const newCompleted = [...completedSteps, stepId];
      setCompletedSteps(newCompleted);
      if (newCompleted.length === steps.length) {
        onCourseComplete('advanced');
      }
    }
  };

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
            <span className="text-purple-600">{completedSteps.length} / {steps.length}</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4">
        {steps.map((step) => {
          const isCompleted = completedSteps.includes(step.id);
          const isCurrent = !isCompleted && completedSteps.length === step.id - 1;

          return (
            <button
              key={step.id}
              onClick={() => isCurrent && handleStepComplete(step.id)}
              disabled={completedSteps.length < step.id - 1}
              className={`w-full rounded-2xl p-5 shadow-md transition-all ${
                isCompleted
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : isCurrent
                  ? 'bg-white border-2 border-purple-300 hover:border-purple-500'
                  : 'bg-gray-100 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCompleted ? 'bg-white/20' : isCurrent ? 'bg-purple-100' : 'bg-gray-200'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="text-white" size={24} />
                  ) : isCurrent ? (
                    <span className="text-purple-600">{step.id}</span>
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
