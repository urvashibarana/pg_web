'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import FiltersSidebar from './FiltersSidebar';
import SearchResults from './SearchResults';
import MapView from './MapView';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [filters, setFilters] = useState({
    budget: { min: 0, max: 50000 },
    roomType: '',
    amenities: [],
    rating: 0
  });

  const city = searchParams.get('city') || '';
  const radius = searchParams.get('radius') || '5';

  return (
    <div className="flex">
      {/* Filters Sidebar */}
      <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-80 bg-white border-r`}>
        <FiltersSidebar filters={filters} setFilters={setFilters} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Search Results */}
        <div className={`${showMap ? 'lg:w-1/2' : 'w-full'} bg-gray-50`}>
          <div className="p-4 bg-white border-b">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">PGs in {city}</h1>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden bg-blue-600 text-white px-4 py-2 rounded-lg whitespace-nowrap"
                >
                  <i className="ri-filter-line mr-2"></i>
                  Filters
                </button>
                <button
                  onClick={() => setShowMap(!showMap)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg whitespace-nowrap"
                >
                  <i className="ri-map-pin-line mr-2"></i>
                  {showMap ? 'Hide Map' : 'Show Map'}
                </button>
              </div>
            </div>
            <p className="text-gray-600">Within {radius} km • 24 properties found</p>
          </div>
          
          <SearchResults filters={filters} />
        </div>

        {/* Map View */}
        {showMap && (
          <div className="hidden lg:block w-1/2">
            <MapView />
          </div>
        )}
      </div>
    </div>
  );
}