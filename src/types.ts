export interface Course {
  id: string;
  name: string;
  instructor: string;
  duration: number;
  preferredTime?: string[];
}

export interface TimeSlot {
  day: string;
  time: string;
  course: Course | null;
}

export interface Timetable {
  slots: TimeSlot[];
}