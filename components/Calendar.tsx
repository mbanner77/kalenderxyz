"use client";

import React, { useState } from 'react';
import { MonthlyCalendar, WeeklyCalendar, DailyCalendar } from './CalendarViews';

export function Calendar(): JSX.Element {
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');

  const renderCalendarView = (): JSX.Element => {
    switch (view) {
      case 'month':
        return <MonthlyCalendar />;
      case 'week':
        return <WeeklyCalendar />;
      case 'day':
        return <DailyCalendar />;
      default:
        return <MonthlyCalendar />;
    }
  };

  return (
    <div>
      <div className="flex justify-around mb-4">
        <button onClick={() => setView('month')}>Monat</button>
        <button onClick={() => setView('week')}>Woche</button>
        <button onClick={() => setView('day')}>Tag</button>
      </div>
      {renderCalendarView()}
    </div>
  );
}