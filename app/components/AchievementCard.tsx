import { Zap, Users, Award, Trophy, LucideIcon } from "lucide-react";

const achievementIcons: Record<string, LucideIcon> = {
  Zap,
  Users,
  Award,
};

interface AchievementCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function AchievementCard({
  title,
  description,
  icon,
}: AchievementCardProps) {
  const Icon = achievementIcons[icon] || Trophy;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
      <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
        <Icon size={24} />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>

        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}
