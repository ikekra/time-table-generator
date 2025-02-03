import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Course } from '../types';

interface CourseListProps {
  courses: Course[];
  onRemoveCourse: (id: string) => void;
}

export function CourseList({ courses, onRemoveCourse }: CourseListProps) {
  if (courses.length === 0) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Added Courses</h2>
      <div className="space-y-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
          >
            <div>
              <h3 className="font-medium">{course.name}</h3>
              <p className="text-sm text-gray-600">
                {course.instructor} • {course.duration}h
              </p>
            </div>
            <button
              onClick={() => onRemoveCourse(course.id)}
              className="p-1 text-red-600 hover:text-red-800"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}