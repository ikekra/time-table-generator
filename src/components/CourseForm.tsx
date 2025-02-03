import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import type { Course } from '../types';

interface CourseFormProps {
  onAddCourse: (course: Course) => void;
}

export function CourseForm({ onAddCourse }: CourseFormProps) {
  const [course, setCourse] = useState<Course>({
    id: '',
    name: '',
    instructor: '',
    duration: 1,
    preferredTime: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddCourse({ ...course, id: crypto.randomUUID() });
    setCourse({
      id: '',
      name: '',
      instructor: '',
      duration: 1,
      preferredTime: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">Add New Course</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Course Name</label>
        <input
          type="text"
          required
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Instructor</label>
        <input
          type="text"
          required
          value={course.instructor}
          onChange={(e) => setCourse({ ...course, instructor: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Duration (hours)</label>
        <input
          type="number"
          min="1"
          max="4"
          required
          value={course.duration}
          onChange={(e) => setCourse({ ...course, duration: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <PlusCircle className="w-4 h-4 mr-2" />
        Add Course
      </button>
    </form>
  );
}