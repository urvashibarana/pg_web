'use client';

import Link from 'next/link';

export default function SavedSearches() {
  const savedSearches = [
    {
      id: 1,
      title: 'PGs in Koramangala',
      filters: {
        location: 'Koramangala, Bangalore',
        budget: '₹8,000 - ₹12,000',
        amenities: ['Wi-Fi', 'AC', 'Food']
      },
      results: 12,
      createdAt: '2 days ago'
    },
    {
      id: 2,
      title: 'Budget PGs in BTM Layout',
      filters: {
        location: 'BTM Layout, Bangalore',
        budget: '₹5,000 - ₹8,000',
        amenities: ['Wi-Fi', 'Food']
      },
      results: 8,
      createdAt: '1 week ago'
    },
    {
      id: 3,
      title: 'Premium PGs in Whitefield',
      filters: {
        location: 'Whitefield, Bangalore',
        budget: '₹15,000 - ₹20,000',
        amenities: ['Wi-Fi', 'AC', 'Gym', 'Parking']
      },
      results: 5,
      createdAt: '2 weeks ago'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Saved Searches</h2>
        <Link href="/search" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Create New Search
        </Link>
      </div>
      
      {savedSearches.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-bookmark-line text-gray-400 text-2xl"></i>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No saved searches</h3>
          <p className="text-gray-500 mb-4">Save your searches to get notified about new listings</p>
          <Link href="/search" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Start Searching
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {savedSearches.map((search) => (
            <div key={search.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{search.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">{search.createdAt}</span>
                  <button className="text-gray-400 hover:text-red-500">
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <span className="text-sm font-medium text-gray-700">Location:</span>
                  <p className="text-sm text-gray-600">{search.filters.location}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Budget:</span>
                  <p className="text-sm text-gray-600">{search.filters.budget}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Amenities:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {search.filters.amenities.map((amenity) => (
                      <span key={amenity} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{search.results} results found</span>
                <div className="flex items-center space-x-3">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    <i className="ri-notification-line mr-1"></i>
                    Set Alert
                  </button>
                  <Link href={`/search?saved=${search.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    View Results
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}