import { BookOpen, Lock, CheckCircle } from 'lucide-react';
import { Screen } from '../App';

interface CoursesScreenProps {
  onNavigate: (screen: Screen) => void;
  completedCourses: string[];
}

export function CoursesScreen({ onNavigate, completedCourses }: CoursesScreenProps) {
  const courses = [
    {
      id: 'beginner',
      title: 'Beginner Program',
      description: 'Learn the fundamentals of open water swimming',
      duration: '4 lessons',
      color: 'from-blue-500 to-indigo-500',
      screen: 'beginner' as Screen,
    },
    {
      id: 'intermediate',
      title: 'Intermediate Program',
      description: 'Build endurance and advanced techniques',
      duration: '5 lessons',
      color: 'from-indigo-500 to-purple-500',
      screen: 'intermediate' as Screen,
      requiresCourse: 'beginner',
    },
    {
      id: 'advanced',
      title: 'Advanced Program',
      description: 'Master challenging conditions and long distances',
      duration: '6 lessons',
      color: 'from-purple-500 to-pink-500',
      screen: 'advanced' as Screen,
      requiresCourse: 'intermediate',
    },
  ];

  const isCourseUnlocked = (course: typeof courses[0]) => {
    if (!course.requiresCourse) return true;
    return completedCourses.includes(course.requiresCourse);
  };

  const isCourseCompleted = (courseId: string) => {
    return completedCourses.includes(courseId);
  };

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-blue-50 to-white h-full">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {courses.map((course) => {
          const unlocked = isCourseUnlocked(course);
          const completed = isCourseCompleted(course.id);

          return (
            <button
              key={course.id}
              onClick={() => unlocked && onNavigate(course.screen)}
              disabled={!unlocked}
              className={`w-full rounded-2xl p-6 shadow-lg transition-all ${
                !unlocked
                  ? 'bg-gray-200 opacity-60 cursor-not-allowed'
                  : completed
                  ? `bg-gradient-to-r ${course.color} text-white`
                  : 'bg-white border-2 border-gray-200 hover:border-blue-400'
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                    !unlocked
                      ? 'bg-gray-300'
                      : completed
                      ? 'bg-white/20'
                      : 'bg-blue-100'
                  }`}
                >
                  {!unlocked ? (
                    <Lock className="text-gray-500" size={28} />
                  ) : completed ? (
                    <CheckCircle className="text-white" size={28} />
                  ) : (
                    <BookOpen className="text-blue-600" size={28} />
                  )}
                </div>

                <div className="flex-1 text-left">
                  <div
                    className={`text-xl font-bold mb-1 ${
                      !unlocked ? 'text-gray-500' : completed ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {course.title}
                  </div>
                  <div
                    className={`text-sm mb-1 ${
                      !unlocked ? 'text-gray-400' : completed ? 'text-white/90' : 'text-gray-600'
                    }`}
                  >
                    {course.description}
                  </div>
                  <div
                    className={`text-xs ${
                      !unlocked ? 'text-gray-400' : completed ? 'text-white/80' : 'text-gray-500'
                    }`}
                  >
                    {course.duration}
                  </div>
                  {!unlocked && course.requiresCourse && (
                    <div className="text-xs text-gray-500 mt-2">
                      Complete {courses.find(c => c.id === course.requiresCourse)?.title} to unlock
                    </div>
                  )}
                  {completed && (
                    <div className="text-xs text-white/90 mt-2 font-semibold">✓ Completed</div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
