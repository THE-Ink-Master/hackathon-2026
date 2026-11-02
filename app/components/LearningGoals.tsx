"use client";

import { useState } from "react";
import { Target, CheckCircle2 } from "lucide-react";
import DashboardCard from "./DashboardCard";
import ProgressBar from "./ProgressBar";
import SectionHeader from "./SectionHeader";
import { learningGoals } from "../data/dashboard-data";

export default function LearningGoals() {
  const [goals, setGoals] = useState(learningGoals);

  const updateGoal = (id: number) => {
    setGoals((current) =>
      current.map((goal) =>
        goal.id === id
          ? {
              ...goal,
              progress: Math.min(goal.target, goal.progress + 1),
            }
          : goal,
      ),
    );
  };

  return (
    <DashboardCard>
      <SectionHeader title="My Learning Goals" subtitle="Your weekly targets" />

      <div className="space-y-5">
        {goals.map((goal) => {
          const completed = goal.progress >= goal.target;
          const percentage = Math.round((goal.progress / goal.target) * 100);

          return (
            <div key={goal.id}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {completed ? (
                    <CheckCircle2 size={18} className="text-green-600" />
                  ) : (
                    <Target size={18} className="text-blue-600" />
                  )}

                  <span className="text-sm font-medium text-gray-800">
                    {goal.title}
                  </span>
                </div>

                <span className="text-xs text-gray-500">
                  {goal.progress}/{goal.target}
                </span>
              </div>

              <ProgressBar
                progress={percentage}
                color={completed ? "bg-green-500" : "bg-blue-600"}
              />

              <button
                onClick={() => updateGoal(goal.id)}
                disabled={completed}
                className="mt-2 text-xs font-medium text-blue-600 hover:underline disabled:text-green-600 disabled:no-underline"
              >
                {completed ? "Completed" : "Update progress +1"}
              </button>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
}
