"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Event {
  id: string;
  title: string;
  date: Date;
}

interface CalendarContextType {
  events: Event[];
  addEvent: (event: Omit<Event, "id">) => void;
  removeEvent: (id: string) => void;
}

const CalendarContext = createContext<CalendarContextType | null>(null);

export function useCalendar(): CalendarContextType {
  const context = useContext(CalendarContext);
  if (!context) throw new Error("useCalendar must be used within CalendarProvider");
  return context;
}

export function CalendarProvider({ children }: { children: ReactNode }): JSX.Element {
  const [events, setEvents] = useState<Event[]>([]);

  const addEvent = (event: Omit<Event, "id">): void => {
    setEvents(prev => [...prev, { ...event, id: crypto.randomUUID() }]);
  };

  const removeEvent = (id: string): void => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return (
    <CalendarContext.Provider value={{ events, addEvent, removeEvent }}>
      {children}
    </CalendarContext.Provider>
  );
}