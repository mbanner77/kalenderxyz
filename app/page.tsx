"use client";

import { CalendarProvider } from "@/components/CalendarContext";
import { Calendar } from "@/components/Calendar";

export default function Page(): JSX.Element {
  return (
    <CalendarProvider>
      <main className="min-h-screen p-8 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-8">Interaktiver Kalender</h1>
        <Calendar />
      </main>
    </CalendarProvider>
  );
}