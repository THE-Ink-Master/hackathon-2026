import { BookOpen } from "lucide-react";
import DashboardCard from "./DashboardCard";
import ProgressBar from "./ProgressBar";

export interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  progress: number;
  lessonsCompleted: number;
  totalLessons: number;
  image?: string;
}

interface CourseCardProps {
  course: Course;
  onContinue?: (courseId: number) => void;
}

export default function CourseCard({ course, onContinue }: CourseCardProps) {
  return (
    <DashboardCard>
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <BookOpen size={24} />
        </div>

        <div className="min-w-0 flex-1">
          <span className="text-xs font-medium text-blue-600">
            {course.category}
          </span>

          <h3 className="mt-1 font-semibold text-gray-900">{course.title}</h3>

          <p className="mt-1 text-xs text-gray-500">
            Instructor: {course.instructor}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-500">Course progress</span>
          <span className="font-semibold text-gray-900">
            {course.progress}%
          </span>
        </div>

        <ProgressBar progress={course.progress} />

        <p className="mt-2 text-xs text-gray-500">
          {course.lessonsCompleted} of {course.totalLessons} lessons completed
        </p>
      </div>

      <button
        onClick={() => onContinue?.(course.id)}
        className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        Continue Learning
      </button>
    </DashboardCard>
  );
}
