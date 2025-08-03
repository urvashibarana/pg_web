'use client';

import Link from 'next/link';

export default function BookingHistory() {
  const bookings = [
    {
      id: 1,
      pgName: 'Sunrise PG',
      location: 'Koramangala, Bangalore',
      bookingDate: '2024-03-15',
      checkIn: '2024-04-01',
      checkOut: '2024-10-01',
      amount: 8500,
      status: 'active',
      image: 'https://readdy.ai/api/search-image?query=Modern%20paying%20guest%20accommodation%20room%20with%20bed%2C%20study%20table%2C%20wardrobe%2C%20clean%20and%20well-lit%20interior%2C%20contemporary%20furniture%2C%20comfortable%20living%20space%20for%20students%20and%20professionals&width=200&height=150&seq=booking-1&orientation=landscape'
    },
    {
      id: 2,
      pgName: 'Green Valley PG',
      location: 'Indiranagar, Bangalore',
      bookingDate: '2024-01-20',
      checkIn: '2024-02-01',
      checkOut: '2024-03-31',
      amount: 12000,
      status: 'completed',
      image: 'https://readdy.ai/api/search-image?query=Spacious%20paying%20guest%20room%20with%20modern%20amenities%2C%20AC%2C%20comfortable%20bed%2C%20study%20area%2C%20clean%20and%20organized%20interior%20design%2C%20professional%20accommodation%20for%20working%20professionals&width=200&height=150&seq=booking-2&orientation=landscape'
    },
    {
      id: 3,
      pgName: 'Student Haven PG',
      location: 'BTM Layout, Bangalore',
      bookingDate: '2024-02-10',
      checkIn: '2024-03-01',
      checkOut: '2024-03-15',
      amount: 7000,
      status: 'cancelled',
      image: 'https://readdy.ai/api/search-image?query=Budget-friendly%20paying%20guest%20room%20for%20students%2C%20basic%20furniture%2C%20study%20table%2C%20bed%2C%20clean%20and%20simple%20interior%2C%20affordable%20accommodation%20with%20essential%20amenities&width=200&height=150&seq=booking-3&orientation=landscape'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return 'ri-check-circle-line';
      case 'completed':
        return 'ri-checkbox-circle-line';
      case 'cancelled':
        return 'ri-close-circle-line';
      default:
        return 'ri-time-line';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Booking History</h2>
        <Link href="/search" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Book New PG
        </Link>
      </div>
      
      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-calendar-line text-gray-400 text-2xl"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
          <p className="text-gray-500 mb-4">Start exploring PGs and make your first booking</p>
          <Link href="/search" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Browse PGs
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex">
                <div className="w-32 h-24 flex-shrink-0 mr-4">
                  <img
                    src={booking.image}
                    alt={booking.pgName}
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{booking.pgName}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      <i className={`${getStatusIcon(booking.status)} mr-1`}></i>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">
                    <i className="ri-map-pin-line mr-1"></i>
                    {booking.location}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Check-in:</span>
                      <p className="text-sm text-gray-600">{new Date(booking.checkIn).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Check-out:</span>
                      <p className="text-sm text-gray-600">{new Date(booking.checkOut).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Amount:</span>
                      <p className="text-sm text-gray-600">₹{booking.amount}/month</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Booked on {new Date(booking.bookingDate).toLocaleDateString()}
                    </span>
                    <div className="flex items-center space-x-3">
                      {booking.status === 'active' && (
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          <i className="ri-message-line mr-1"></i>
                          Contact Host
                        </button>
                      )}
                      <Link href={`/pg/${booking.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}