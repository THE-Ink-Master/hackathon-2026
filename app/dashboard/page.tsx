"use client";

import { useState } from "react";

import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import StatsCards from "../components/StatsCards";
import LearningActivity from "../components/LearningActivity";
import EnrolledCourses from "../components/EnrolledCourses";
import UpcomingEvents from "../components/UpcomingEvents";
import NetworkingProgress from "../components/NetworkingProgress";
import LearningGoals from "../components/LearningGoals";
import Achievements from "../components/Achievements";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">
      <DashboardSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="min-w-0 flex-1">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />

        <main className="mx-auto max-w-[1600px] space-y-8 p-4 sm:p-6 lg:p-8">
          {/* Welcome section */}
          <section>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, John! 👋
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Here's an overview of your learning journey and professional
              growth.
            </p>
          </section>

          {/* Statistics */}
          <StatsCards />

          {/* Activity and networking */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <LearningActivity />
            </div>

            <NetworkingProgress />
          </div>

          {/* Courses */}
          <EnrolledCourses />

          {/* Events and goals */}
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <UpcomingEvents />
            <LearningGoals />
          </div>

          {/* Achievements */}
          <Achievements />
        </main>
      </div>
    </div>
  );
}
