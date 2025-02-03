import type { Course, TimeSlot } from '../types';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const TIMES = Array.from({ length: 9 }, (_, i) => `${i + 9}:00`);

export function generateTimetable(courses: Course[]): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const usedSlots = new Set<string>();

  // Initialize empty slots
  DAYS.forEach(day => {
    TIMES.forEach(time => {
      slots.push({ day, time, course: null });
    });
  });

  // Simple scheduling algorithm
  courses.forEach(course => {
    let placed = false;
    
    // Try to find a suitable slot
    for (let dayIndex = 0; dayIndex < DAYS.length && !placed; dayIndex++) {
      for (let timeIndex = 0; timeIndex < TIMES.length - course.duration + 1 && !placed; timeIndex++) {
        const slotKey = `${DAYS[dayIndex]}-${TIMES[timeIndex]}`;
        
        // Check if the slot and required consecutive slots are available
        let canPlace = true;
        for (let i = 0; i < course.duration; i++) {
          const checkKey = `${DAYS[dayIndex]}-${TIMES[timeIndex + i]}`;
          if (usedSlots.has(checkKey)) {
            canPlace = false;
            break;
          }
        }

        if (canPlace) {
          // Place the course
          for (let i = 0; i < course.duration; i++) {
            const placeKey = `${DAYS[dayIndex]}-${TIMES[timeIndex + i]}`;
            usedSlots.add(placeKey);
            
            const slotIndex = slots.findIndex(
              s => s.day === DAYS[dayIndex] && s.time === TIMES[timeIndex + i]
            );
            if (slotIndex !== -1) {
              slots[slotIndex].course = course;
            }
          }
          placed = true;
        }
      }
    }
  });

  return slots;
}