import { Users, UserPlus, CalendarCheck, Target } from "lucide-react";

import DashboardCard from "./DashboardCard";
import ProgressBar from "./ProgressBar";
import SectionHeader from "./SectionHeader";
import { networkingStats } from "../data/dashboard-data";

export default function NetworkingProgress() {
  const stats = networkingStats;

  const percentage = Math.min(
    100,
    Math.round((stats.connections / stats.goal) * 100),
  );

  return (
    <DashboardCard>
      <SectionHeader
        title="Networking Progress"
        subtitle="Grow your professional network"
      />

      <div className="mb-5 flex items-center gap-4">
        <div className="rounded-xl bg-purple-50 p-4 text-purple-600">
          <Users size={30} />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900">
            {stats.connections}
          </h3>
          <p className="text-sm text-gray-500">Professional connections</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-gray-50 p-3">
          <UserPlus className="mb-2 text-purple-600" size={20} />
          <h4 className="text-xl font-bold">{stats.monthlyConnections}</h4>
          <p className="text-xs text-gray-500">New this month</p>
        </div>

        <div className="rounded-lg bg-gray-50 p-3">
          <CalendarCheck className="mb-2 text-purple-600" size={20} />
          <h4 className="text-xl font-bold">{stats.eventsAttended}</h4>
          <p className="text-xs text-gray-500">Events attended</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex justify-between">
          <span className="flex items-center gap-2 text-sm font-medium">
            <Target size={16} />
            Monthly networking goal
          </span>

          <span className="text-sm font-semibold">{percentage}%</span>
        </div>

        <ProgressBar progress={percentage} color="bg-purple-600" />

        <p className="mt-2 text-xs text-gray-500">
          {stats.connections} of {stats.goal} connections achieved
        </p>
      </div>

      <a
        href="/networking"
        className="mt-5 block rounded-lg border border-purple-200 px-4 py-2.5 text-center text-sm font-medium text-purple-700 hover:bg-purple-50"
      >
        Explore Network
      </a>
    </DashboardCard>
  );
}
