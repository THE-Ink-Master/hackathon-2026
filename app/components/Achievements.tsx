import SectionHeader from "./SectionHeader";
import AchievementCard from "./AchievementCard";
import { achievements } from "../data/dashboard-data";

export default function Achievements() {
  return (
    <section>
      <SectionHeader
        title="Recent Achievements"
        subtitle="Celebrate your learning milestones"
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} {...achievement} />
        ))}
      </div>
    </section>
  );
}
