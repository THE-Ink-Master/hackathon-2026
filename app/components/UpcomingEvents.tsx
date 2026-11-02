"use client";

import { useRouter } from "next/navigation";
import EventCard from "./EventCard";
import SectionHeader from "./SectionHeader";
import { events } from "../data/dashboard-data";

export default function UpcomingEvents() {
  const router = useRouter();

  return (
    <section>
      <SectionHeader
        title="Upcoming Events"
        subtitle="Don't miss these opportunities"
        action={
          <button
            onClick={() => router.push("/events")}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View calendar
          </button>
        }
      />

      <div className="space-y-3">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onView={(id) => router.push(`/events/${id}`)}
          />
        ))}
      </div>
    </section>
  );
}
