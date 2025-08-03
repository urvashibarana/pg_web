'use client';

import { useState } from 'react';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const bookings = [
    { date: '2024-04-15', guest: 'Priya Sharma', pg: 'Sunrise PG', type: 'checkin' },
    { date: '2024-04-16', guest: 'Rahul Mehta', pg: 'Green Valley PG', type: 'checkout' },
    { date: '2024-04-20', guest: 'Sneha Patel', pg: 'Executive PG', type: 'checkin' },
    { date: '2024-04-25', guest: 'Amit Kumar', pg: 'Sunrise PG', type: 'checkout' }
  ];

  const getBookingForDate = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return bookings.find(booking => booking.date === dateStr);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600">Track bookings and availability</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
            <i className="ri-add-line mr-2"></i>
            Block Dates
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap">
            <i className="ri-download-line mr-2"></i>
            Export
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {getDaysInMonth(currentMonth).map((day, index) => {
                const booking = day ? getBookingForDate(day) : null;
                return (
                  <div
                    key={index}
                    className={`aspect-square flex flex-col items-center justify-center text-sm border rounded-lg transition-colors ${
                      day
                        ? 'bg-white hover:bg-gray-50 cursor-pointer'
                        : 'bg-gray-50'
                    } ${
                      booking
                        ? booking.type === 'checkin'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                        : ''
                    }`}
                  >
                    {day && (
                      <>
                        <span className="font-medium">{day}</span>
                        {booking && (
                          <div className="text-xs mt-1">
                            <i className={`${booking.type === 'checkin' ? 'ri-login-circle-line' : 'ri-logout-circle-line'} text-xs`}></i>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {bookings.map((booking, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    booking.type === 'checkin' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{booking.guest}</div>
                    <div className="text-xs text-gray-600">{booking.pg}</div>
                    <div className="text-xs text-gray-500">
                      {booking.type === 'checkin' ? 'Check-in' : 'Check-out'} • {booking.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legend</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-100 rounded mr-3"></div>
                <span className="text-sm text-gray-700">Check-in</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-100 rounded mr-3"></div>
                <span className="text-sm text-gray-700">Check-out</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-100 rounded mr-3"></div>
                <span className="text-sm text-gray-700">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}