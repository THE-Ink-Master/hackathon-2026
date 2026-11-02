import {
  BookOpen,
  GraduationCap,
  CalendarDays,
  Users,
  LucideIcon,
} from "lucide-react";
import DashboardCard from "./DashboardCard";

const icons: Record<string, LucideIcon> = {
  BookOpen,
  GraduationCap,
  CalendarDays,
  Users,
};

const colors: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  orange: "bg-orange-50 text-orange-600",
  purple: "bg-purple-50 text-purple-600",
};

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: string;
  color: string;
}

export default function StatCard(props: StatCardProps) {
  const Icon = icons[props.icon] || BookOpen;

  return (
    <DashboardCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{props.title}</p>
          <h3 className="mt-2 text-3xl font-bold text-gray-900">
            {props.value}
          </h3>
          <p className="mt-1 text-xs text-gray-500">{props.description}</p>
        </div>

        <div className={`rounded-xl p-3 ${colors[props.color] || colors.blue}`}>
          <Icon size={24} />
        </div>
      </div>
    </DashboardCard>
  );
}
