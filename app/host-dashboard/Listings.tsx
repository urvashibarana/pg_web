'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Listings() {
  const [viewMode, setViewMode] = useState('grid');

  const listings = [
    {
      id: 1,
      name: 'Sunrise PG',
      location: 'Koramangala, Bangalore',
      price: 8500,
      rating: 4.5,
      reviews: 128,
      occupancy: 8,
      capacity: 10,
      status: 'active',
      image: 'https://readdy.ai/api/search-image?query=Modern%20paying%20guest%20accommodation%20room%20with%20bed%2C%20study%20table%2C%20wardrobe%2C%20clean%20and%20well-lit%20interior%2C%20contemporary%20furniture%2C%20comfortable%20living%20space%20for%20students%20and%20professionals&width=300&height=200&seq=host-listing-1&orientation=landscape'
    },
    {
      id: 2,
      name: 'Green Valley PG',
      location: 'Indiranagar, Bangalore',
      price: 12000,
      rating: 4.3,
      reviews: 94,
      occupancy: 6,
      capacity: 8,
      status: 'active',
      image: 'https://readdy.ai/api/search-image?query=Spacious%20paying%20guest%20room%20with%20modern%20amenities%2C%20AC%2C%20comfortable%20bed%2C%20study%20area%2C%20clean%20and%20organized%20interior%20design%2C%20professional%20accommodation%20for%20working%20professionals&width=300&height=200&seq=host-listing-2&orientation=landscape'
    },
    {
      id: 3,
      name: 'Executive PG',
      location: 'Whitefield, Bangalore',
      price: 18000,
      rating: 4.8,
      reviews: 67,
      occupancy: 4,
      capacity: 6,
      status: 'inactive',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20paying%20guest%20room%20with%20premium%20furniture%2C%20modern%20amenities%2C%20spacious%20layout%2C%20executive%20accommodation%20for%20professionals%2C%20elegant%20interior%20design&width=300&height=200&seq=host-listing-3&orientation=landscape'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Listings</h1>
          <p className="text-gray-600">Manage your properties and bookings</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex rounded-lg overflow-hidden border">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 text-sm ${
                viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className="ri-grid-line"></i>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 text-sm ${
                viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className="ri-list-check"></i>
            </button>
          </div>
          <Link href="/host-dashboard/add-listing" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
            <i className="ri-add-line mr-2"></i>
            Add New Listing
          </Link>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                    {listing.status}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{listing.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  <i className="ri-map-pin-line mr-1"></i>
                  {listing.location}
                </p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <i className="ri-star-fill text-yellow-400 mr-1"></i>
                    <span className="text-sm font-medium">{listing.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({listing.reviews})</span>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{listing.occupancy}/{listing.capacity} occupied</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-blue-600">₹{listing.price}</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap">
                    <i className="ri-edit-line mr-1"></i>
                    Edit
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors text-sm whitespace-nowrap">
                    <i className="ri-eye-line mr-1"></i>
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Occupancy
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {listings.map((listing) => (
                  <tr key={listing.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-16 h-12 flex-shrink-0 mr-4">
                          <img
                            src={listing.image}
                            alt={listing.name}
                            className="w-full h-full object-cover object-top rounded-lg"
                          />
                        </div>
                        <div className="text-sm font-medium text-gray-900">{listing.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {listing.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ₹{listing.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <i className="ri-star-fill text-yellow-400 mr-1"></i>
                        {listing.rating} ({listing.reviews})
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {listing.occupancy}/{listing.capacity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(listing.status)}`}>
                        {listing.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Edit
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}