"use client";

import { Bell, Search, Menu } from "lucide-react";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={22} />
        </button>

        <div className="hidden items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 sm:flex">
          <Search size={18} className="text-gray-400" />
          <input
            placeholder="Search courses, events..."
            className="w-48 bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          aria-label="Notifications"
          className="relative rounded-full p-2 hover:bg-gray-100"
        >
          <Bell size={21} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
            JD
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>
      </div>
    </header>
  );
}
