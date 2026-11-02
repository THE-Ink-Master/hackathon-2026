"use client";

import { useRouter } from "next/navigation";
import CourseCard from "./CourseCard";
import SectionHeader from "./SectionHeader";
import { courses } from "../data/dashboard-data";

export default function EnrolledCourses() {
  const router = useRouter();

  const handleContinue = (courseId: number) => {
    router.push(`/courses/${courseId}`);
  };

  return (
    <section>
      <SectionHeader
        title="My Enrolled Courses"
        subtitle="Track your learning journey"
        action={
          <button
            onClick={() => router.push("/courses")}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View all
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onContinue={handleContinue}
          />
        ))}
      </div>
    </section>
  );
}
