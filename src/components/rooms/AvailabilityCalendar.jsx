// FILE: frontend/src/components/rooms/AvailabilityCalendar.jsx
// CREATED: New file

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/**
 * AvailabilityCalendar Component - Shows room availability by date
 * 
 * @param {string} roomId - Room ID for generating availability data
 * @param {function} onDateSelect - Callback when date is selected
 */
const AvailabilityCalendar = ({ roomId, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState({ checkIn: null, checkOut: null });
  const [availability, setAvailability] = useState({});

  // Generate mock availability data
  useEffect(() => {
    const generateAvailability = () => {
      const data = {};
      const today = new Date();
      const year = currentMonth.getFullYear();
      const month = currentMonth.getMonth();
      
      // Generate for 3 months
      for (let m = 0; m < 3; m++) {
        const monthDate = new Date(year, month + m, 1);
        const daysInMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0).getDate();
        
        for (let d = 1; d <= daysInMonth; d++) {
          const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), d);
          const key = date.toISOString().split('T')[0];
          
          // Generate availability (80% available, but make some patterns)
          let isAvailable = true;
          
          // Randomly mark as unavailable
          if (Math.random() < 0.2) {
            isAvailable = false;
          }
          
          // Weekend availability slightly lower (more booked)
          const dayOfWeek = date.getDay();
          if (dayOfWeek === 5 || dayOfWeek === 6) {
            if (Math.random() < 0.25) {
              isAvailable = false;
            }
          }
          
          // If date is in the past, mark as unavailable
          if (date < today) {
            isAvailable = false;
          }
          
          data[key] = isAvailable;
        }
      }
      
      setAvailability(data);
    };
    
    generateAvailability();
  }, [currentMonth, roomId]);

  // Navigate month
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Select a date
  const handleDateClick = (dateKey, isAvailable) => {
    if (!isAvailable) return;
    
    const date = new Date(dateKey);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date < today) return;
    
    setSelectedDates(prev => {
      let newCheckIn = prev.checkIn;
      let newCheckOut = prev.checkOut;
      
      if (!prev.checkIn) {
        newCheckIn = dateKey;
      } else if (!prev.checkOut && new Date(dateKey) > new Date(prev.checkIn)) {
        newCheckOut = dateKey;
      } else if (new Date(dateKey) < new Date(prev.checkIn)) {
        newCheckIn = dateKey;
        newCheckOut = null;
      } else {
        newCheckIn = dateKey;
        newCheckOut = null;
      }
      
      // Call onDateSelect with the selected dates
      if (onDateSelect && newCheckIn && newCheckOut) {
        onDateSelect({ checkIn: newCheckIn, checkOut: newCheckOut });
      }
      
      return { checkIn: newCheckIn, checkOut: newCheckOut };
    });
  };

  // Render calendar
  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const days = [];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Header
    days.push(
      <div key="header" className="text-center font-semibold text-gray-900 dark:text-white col-span-7">
        {monthNames[month]} {year}
      </div>
    );

    // Day names
    dayNames.forEach((name) => {
      days.push(
        <div key={`day-${name}`} className="text-center text-xs font-medium text-gray-500 dark:text-gray-400">
          {name}
        </div>
      );
    });

    // Empty days before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-center" />);
    }

    // Calendar days
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const dateKey = date.toISOString().split('T')[0];
      const isAvailable = availability[dateKey] !== false;
      const isPast = date < today;
      const isSelected = dateKey === selectedDates.checkIn || dateKey === selectedDates.checkOut;
      const isInRange = selectedDates.checkIn && selectedDates.checkOut && 
                        date > new Date(selectedDates.checkIn) && 
                        date < new Date(selectedDates.checkOut);

      days.push(
        <button
          key={d}
          onClick={() => handleDateClick(dateKey, isAvailable && !isPast)}
          disabled={!isAvailable || isPast}
          className={`
            w-full py-2 rounded-lg text-sm font-medium transition-all duration-200
            min-h-[44px]
            ${isPast ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' : ''}
            ${!isAvailable && !isPast ? 'text-red-400 dark:text-red-500 cursor-not-allowed bg-red-50 dark:bg-red-900/20' : ''}
            ${isAvailable && !isPast && !isSelected ? 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700' : ''}
            ${isSelected ? 'bg-blue-600 text-white shadow-md' : ''}
            ${isInRange ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : ''}
          `}
          aria-label={`${monthNames[month]} ${d}, ${year} - ${isAvailable ? 'Available' : 'Unavailable'}`}
        >
          {d}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Availability Calendar
      </h3>

      <div className="grid grid-cols-7 gap-1">
        {/* Navigation */}
        <div className="col-span-7 flex items-center justify-between mb-2">
          <button
            onClick={goToPreviousMonth}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Previous month"
          >
            <FiChevronLeft size={20} />
          </button>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button
            onClick={goToNextMonth}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Next month"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        {/* Calendar Grid */}
        {renderCalendar()}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-4 h-4 rounded bg-green-500" />
          Available
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-4 h-4 rounded bg-red-400" />
          Unavailable
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="w-4 h-4 rounded bg-blue-600" />
          Selected
        </div>
      </div>

      {/* Selected dates display */}
      {selectedDates.checkIn && selectedDates.checkOut && (
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Selected: <span className="font-medium">{selectedDates.checkIn}</span> to{' '}
            <span className="font-medium">{selectedDates.checkOut}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AvailabilityCalendar;