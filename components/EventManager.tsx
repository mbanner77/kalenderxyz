"use client";

import React, { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
}

export function EventManager(): { events: Event[]; addEvent: (event: Event) => void; removeEvent: (id: number) => void; } {
  const [events, setEvents] = useState<Event[]>([]);

  const addEvent = (event: Event): void => {
    setEvents([...events, event]);
  };

  const removeEvent = (id: number): void => {
    setEvents(events.filter(event => event.id !== id));
  };

  return {
    events,
    addEvent,
    removeEvent,
  };
}