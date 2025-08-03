'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuickFilters() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    { id: 'under-10k', label: 'Under ₹10k', icon: 'ri-money-rupee-circle-line' },
    { id: 'wifi', label: 'Wi-Fi', icon: 'ri-wifi-line' },
    { id: 'ac', label: 'AC', icon: 'ri-temp-cold-line' },
    { id: 'food', label: 'Food Included', icon: 'ri-restaurant-line' },
    { id: 'parking', label: 'Parking', icon: 'ri-car-line' },
    { id: 'gym', label: 'Gym', icon: 'ri-run-line' },
    { id: 'laundry', label: 'Laundry', icon: 'ri-shirt-line' },
    { id: 'power-backup', label: 'Power Backup', icon: 'ri-flashlight-line' },
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const handleSearchWithFilters = () => {
    const params = new URLSearchParams();
    selectedFilters.forEach(filter => params.append('filter', filter));
    window.location.href = `/search?${params.toString()}`;
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Filters</h2>
          <p className="text-gray-600">Find PGs with your preferred amenities</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                selectedFilters.includes(filter.id)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <div className="w-8 h-8 flex items-center justify-center mb-2">
                <i className={`${filter.icon} text-2xl`}></i>
              </div>
              <span className="text-sm font-medium text-center">{filter.label}</span>
            </button>
          ))}
        </div>

        {selectedFilters.length > 0 && (
          <div className="text-center">
            <button
              onClick={handleSearchWithFilters}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Search with Filters ({selectedFilters.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}