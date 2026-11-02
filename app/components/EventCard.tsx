import { CalendarDays, Clock, MapPin } from "lucide-react";
import DashboardCard from "./DashboardCard";

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  location: string;
}

interface EventCardProps {
  event: Event;
  onView?: (eventId: number) => void;
}

export default function EventCard({ event, onView }: EventCardProps) {
  const date = new Date(`${event.date}T12:00:00`);

  const day = date.getDate();
  const month = date.toLocaleString("en", {
    month: "short",
  });

  return (
    <DashboardCard className="flex items-center gap-4">
      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <span className="text-xl font-bold">{day}</span>
        <span className="text-xs uppercase">{month}</span>
      </div>

      <div className="min-w-0 flex-1">
        <span className="text-xs font-medium text-blue-600">{event.type}</span>

        <h3 className="mt-1 font-semibold text-gray-900">{event.title}</h3>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {event.time}
          </span>

          <span className="flex items-center gap-1">
            <MapPin size={13} />
            {event.location}
          </span>
        </div>
      </div>

      <button
        onClick={() => onView?.(event.id)}
        aria-label={`View ${event.title}`}
        className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-blue-600"
      >
        <CalendarDays size={20} />
      </button>
    </DashboardCard>
  );
}
