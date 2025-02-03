import React from 'react';
import type { TimeSlot } from '../types';

interface TimetableGridProps {
  slots: TimeSlot[];
}

export function TimetableGrid({ slots }: TimetableGridProps) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = Array.from({ length: 9 }, (_, i) => `${i + 9}:00`);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2 bg-gray-50">Time</th>
            {days.map((day) => (
              <th key={day} className="border p-2 bg-gray-50">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td className="border p-2 font-medium bg-gray-50">{time}</td>
              {days.map((day) => {
                const slot = slots.find((s) => s.day === day && s.time === time);
                return (
                  <td
                    key={`${day}-${time}`}
                    className={`border p-2 ${
                      slot?.course ? 'bg-blue-50' : 'bg-white'
                    }`}
                  >
                    {slot?.course && (
                      <div>
                        <div className="font-medium">{slot.course.name}</div>
                        <div className="text-sm text-gray-600">
                          {slot.course.instructor}
                        </div>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}