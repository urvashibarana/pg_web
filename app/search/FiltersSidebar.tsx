'use client';

import { useState } from 'react';

interface FiltersProps {
  filters: {
    budget: { min: number; max: number };
    roomType: string;
    amenities: string[];
    rating: number;
  };
  setFilters: (filters: any) => void;
}

export default function FiltersSidebar({ filters, setFilters }: FiltersProps) {
  const [budgetRange, setBudgetRange] = useState([filters.budget.min, filters.budget.max]);

  const roomTypes = [
    { id: 'single', label: 'Single Room' },
    { id: 'double', label: 'Double Sharing' },
    { id: 'triple', label: 'Triple Sharing' },
    { id: 'dormitory', label: 'Dormitory' }
  ];

  const amenities = [
    { id: 'wifi', label: 'Wi-Fi', icon: 'ri-wifi-line' },
    { id: 'ac', label: 'AC', icon: 'ri-temp-cold-line' },
    { id: 'food', label: 'Food', icon: 'ri-restaurant-line' },
    { id: 'parking', label: 'Parking', icon: 'ri-car-line' },
    { id: 'gym', label: 'Gym', icon: 'ri-run-line' },
    { id: 'laundry', label: 'Laundry', icon: 'ri-shirt-line' },
    { id: 'power-backup', label: 'Power Backup', icon: 'ri-flashlight-line' },
    { id: 'security', label: '24/7 Security', icon: 'ri-shield-line' }
  ];

  const handleAmenityToggle = (amenityId: string) => {
    const newAmenities = filters.amenities.includes(amenityId)
      ? filters.amenities.filter(a => a !== amenityId)
      : [...filters.amenities, amenityId];
    
    setFilters({ ...filters, amenities: newAmenities });
  };

  const clearFilters = () => {
    setFilters({
      budget: { min: 0, max: 50000 },
      roomType: '',
      amenities: [],
      rating: 0
    });
    setBudgetRange([0, 50000]);
  };

  return (
    <div className="h-screen overflow-y-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-blue-600 hover:text-blue-700 text-sm"
        >
          Clear All
        </button>
      </div>

      {/* Budget Range */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Budget Range</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={budgetRange[0]}
              onChange={(e) => setBudgetRange([parseInt(e.target.value) || 0, budgetRange[1]])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              value={budgetRange[1]}
              onChange={(e) => setBudgetRange([budgetRange[0], parseInt(e.target.value) || 50000])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>₹{budgetRange[0]}</span>
            <span>₹{budgetRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Room Type */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Room Type</h3>
        <div className="space-y-2">
          {roomTypes.map((type) => (
            <label key={type.id} className="flex items-center">
              <input
                type="radio"
                name="roomType"
                value={type.id}
                checked={filters.roomType === type.id}
                onChange={(e) => setFilters({ ...filters, roomType: e.target.value })}
                className="mr-3"
              />
              <span className="text-sm">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Amenities</h3>
        <div className="grid grid-cols-2 gap-2">
          {amenities.map((amenity) => (
            <button
              key={amenity.id}
              onClick={() => handleAmenityToggle(amenity.id)}
              className={`flex items-center p-2 rounded-lg border text-left ${
                filters.amenities.includes(amenity.id)
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center mr-2">
                <i className={`${amenity.icon} text-sm`}></i>
              </div>
              <span className="text-sm">{amenity.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Minimum Rating</h3>
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setFilters({ ...filters, rating: star })}
              className={`w-8 h-8 flex items-center justify-center ${
                filters.rating >= star ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              <i className="ri-star-fill"></i>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}