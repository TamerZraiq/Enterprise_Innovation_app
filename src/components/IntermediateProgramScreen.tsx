import { ArrowLeft, Check, Lock } from 'lucide-react';
import { Screen } from '../App';
import { useState } from 'react';

interface IntermediateProgramScreenProps {
  onNavigate: (screen: Screen) => void;
  onCourseComplete: (courseId: string) => void;
}

export function IntermediateProgramScreen({ onNavigate, onCourseComplete }: IntermediateProgramScreenProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    { id: 1, title: 'Distance Building', description: 'Swim 1km continuously', duration: '30 min' },
    { id: 2, title: 'Navigation Skills', description: 'Learn sighting and course correction', duration: '25 min' },
    { id: 3, title: 'Cold Water Adaptation', description: 'Practice in cooler temperatures', duration: '20 min' },
    { id: 4, title: 'Group Swimming', description: 'Swim with multiple buddies', duration: '35 min' },
    { id: 5, title: 'Open Water Challenge', description: 'Complete 2km open water swim', duration: '45 min' },
  ];

  const progress = (completedSteps.length / steps.length) * 100;

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      const newCompleted = [...completedSteps, stepId];
      setCompletedSteps(newCompleted);
      if (newCompleted.length === steps.length) {
        onCourseComplete('intermediate');
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
            <span className="text-indigo-600">{completedSteps.length} / {steps.length}</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
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
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                  : isCurrent
                  ? 'bg-white border-2 border-indigo-300 hover:border-indigo-500'
                  : 'bg-gray-100 opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCompleted ? 'bg-white/20' : isCurrent ? 'bg-indigo-100' : 'bg-gray-200'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="text-white" size={24} />
                  ) : isCurrent ? (
                    <span className="text-indigo-600">{step.id}</span>
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
                  <div className={`${isCompleted ? 'text-indigo-100' : isCurrent ? 'text-gray-500' : 'text-gray-400'}`}>
                    {step.description}
                  </div>
                </div>

                <div className={`${isCompleted ? 'text-indigo-100' : isCurrent ? 'text-gray-500' : 'text-gray-400'}`}>
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
