'use client';

import { useState, useEffect } from 'react';

interface CalendarProps {
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

interface Event {
  id: string;
  title: string;
  date: string;
  color: string;
}

const Calendar: React.FC<CalendarProps> = ({ currentDate, setCurrentDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<Event[]>([
    { id: '1', title: 'Team Meeting', date: '2025-01-15', color: 'bg-blue-500' },
    { id: '2', title: 'Project Deadline', date: '2025-01-22', color: 'bg-red-500' },
    { id: '3', title: 'Birthday Party', date: '2025-01-28', color: 'bg-green-500' },
  ]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const hasEvent = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.find(event => event.date === dateStr);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-12 sm:h-16"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const event = hasEvent(day);
      const isCurrentDay = isToday(day);
      
      days.push(
        <div
          key={day}
          onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
          className={`
            h-12 sm:h-16 flex flex-col items-center justify-center cursor-pointer rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl transform
            ${isCurrentDay 
              ? 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 text-white font-bold shadow-2xl animate-pulse' 
              : 'bg-gradient-to-br from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white backdrop-blur-sm'
            }
            ${event ? 'ring-2 ring-yellow-400 ring-opacity-60' : ''}
            hover:rotate-1
          `}
        >
          <span className="text-sm sm:text-base font-bold drop-shadow-sm">{day}</span>
          {event && (
            <div className={`w-3 h-3 rounded-full ${event.color} mt-1 shadow-lg animate-bounce`}></div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="w-full">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigateMonth('prev')}
          className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mx-auto mt-2"></div>
        </div>
        
        <button
          onClick={() => navigateMonth('next')}
          className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayNames.map((day, index) => (
          <div 
            key={day} 
            className="text-center text-white font-bold py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg backdrop-blur-sm"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {renderCalendarDays()}
      </div>

      {/* Events Section */}
      <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-4 sm:p-6 backdrop-blur-lg border border-white/20 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <span className="mr-3 text-2xl animate-bounce">🎉</span>
          Upcoming Events
          <div className="ml-auto w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">{events.length}</span>
          </div>
        </h3>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="flex items-center space-x-4 bg-gradient-to-r from-white/15 to-white/5 rounded-xl p-4 hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm border border-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-5 h-5 rounded-full ${event.color} shadow-lg animate-pulse`}></div>
              <div className="flex-1">
                <p className="text-white font-bold text-lg drop-shadow-sm">{event.title}</p>
                <p className="text-white/80 text-sm font-medium">{new Date(event.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
              <div className="text-2xl">✨</div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Date Info */}
      {selectedDate && (
        <div className="mt-6 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-2xl p-4 sm:p-6 backdrop-blur-lg border border-white/20 shadow-xl animate-pulse">
          <h3 className="text-xl font-bold text-white mb-3 flex items-center">
            <span className="mr-3 text-2xl">🗓️</span>
            Selected Date: {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h3>
          <p className="text-white/90 text-lg font-medium">
            ✨ Click on any date to see more details or add events! ✨
          </p>
          <div className="mt-4 flex space-x-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;





