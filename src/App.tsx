import React, { useState } from 'react';
import { Calendar, RefreshCw } from 'lucide-react';
import { CourseForm } from './components/CourseForm';
import { CourseList } from './components/CourseList';
import { TimetableGrid } from './components/TimetableGrid';
import { generateTimetable } from './utils/timetableGenerator';
import type { Course, TimeSlot } from './types';

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [timetable, setTimetable] = useState<TimeSlot[]>([]);

  const handleAddCourse = (course: Course) => {
    setCourses([...courses, course]);
  };

  const handleRemoveCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleGenerateTimetable = () => {
    const newTimetable = generateTimetable(courses);
    setTimetable(newTimetable);
  };

  return (
    <div className="min-h-screen relative">
      {/* Sophisticated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               opacity: 0.5
             }}
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
              <Calendar className="w-8 h-8 mr-2" />
              Automatic Timetable Generator
            </h1>
            <p className="mt-2 text-gray-600">
              Add your courses and generate an optimal timetable automatically
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <CourseForm onAddCourse={handleAddCourse} />
              <CourseList courses={courses} onRemoveCourse={handleRemoveCourse} />
              
              {courses.length > 0 && (
                <button
                  onClick={handleGenerateTimetable}
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Generate Timetable
                </button>
              )}
            </div>

            <div className="md:col-span-2">
              {timetable.length > 0 ? (
                <TimetableGrid slots={timetable} />
              ) : (
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md text-center">
                  <Calendar className="w-12 h-12 mx-auto text-gray-400" />
                  <p className="mt-2 text-gray-600">
                    Add courses and generate a timetable to see the schedule here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;