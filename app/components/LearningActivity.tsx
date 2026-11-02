"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import DashboardCard from "./DashboardCard";
import SectionHeader from "./SectionHeader";
import { learningActivity } from "../data/dashboard-data";

export default function LearningActivity() {
  return (
    <DashboardCard>
      <SectionHeader
        title="Learning Activity"
        subtitle="Your study hours throughout the week"
        action={
          <select className="rounded-lg border p-2 text-sm">
            <option>This week</option>
            <option>This month</option>
          </select>
        }
      />

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={learningActivity}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis dataKey="day" axisLine={false} tickLine={false} />

            <YAxis axisLine={false} tickLine={false} unit="h" />

            <Tooltip />

            <Bar
              dataKey="hours"
              fill="#4778E7"
              radius={[6, 6, 0, 0]}
              name="Study hours"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}
