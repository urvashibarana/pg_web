'use client';

import { useState } from 'react';

interface PropertyDetailsProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function PropertyDetails({ formData, setFormData }: PropertyDetailsProps) {
  const [details, setDetails] = useState({
    propertyType: '',
    roomType: '',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 1,
    area: '',
    floor: '',
    description: '',
    rules: '',
    ...formData.propertyDetails
  });

  const handleChange = (field: string, value: any) => {
    const updatedDetails = { ...details, [field]: value };
    setDetails(updatedDetails);
    setFormData({
      ...formData,
      propertyDetails: updatedDetails
    });
  };

  const propertyTypes = [
    { id: 'apartment', name: 'Apartment', icon: 'ri-building-line' },
    { id: 'house', name: 'House', icon: 'ri-home-line' },
    { id: 'room', name: 'Private Room', icon: 'ri-door-line' },
    { id: 'studio', name: 'Studio', icon: 'ri-home-2-line' },
    { id: 'villa', name: 'Villa', icon: 'ri-home-3-line' },
    { id: 'hostel', name: 'Hostel', icon: 'ri-hotel-line' }
  ];

  const roomTypes = [
    { id: 'single', name: 'Single Room' },
    { id: 'double', name: 'Double Room' },
    { id: 'shared', name: 'Shared Room' },
    { id: 'entire', name: 'Entire Place' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Details</h2>
        <p className="text-gray-600 mb-8">Tell us more about your property</p>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Property Type
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {propertyTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => handleChange('propertyType', type.id)}
              className={`p-4 border rounded-lg text-left transition-colors ${
                details.propertyType === type.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center">
                <i className={`${type.icon} text-xl mr-3`}></i>
                <span className="font-medium">{type.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Room Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Room Type
        </label>
        <div className="grid grid-cols-2 gap-4">
          {roomTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => handleChange('roomType', type.id)}
              className={`p-4 border rounded-lg text-left transition-colors ${
                details.roomType === type.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="font-medium">{type.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Room Configuration */}
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bedrooms
          </label>
          <div className="flex items-center border rounded-lg">
            <button
              type="button"
              onClick={() => handleChange('bedrooms', Math.max(1, details.bedrooms - 1))}
              className="p-3 hover:bg-gray-50"
            >
              <i className="ri-subtract-line"></i>
            </button>
            <span className="flex-1 text-center py-3 font-medium">{details.bedrooms}</span>
            <button
              type="button"
              onClick={() => handleChange('bedrooms', details.bedrooms + 1)}
              className="p-3 hover:bg-gray-50"
            >
              <i className="ri-add-line"></i>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bathrooms
          </label>
          <div className="flex items-center border rounded-lg">
            <button
              type="button"
              onClick={() => handleChange('bathrooms', Math.max(1, details.bathrooms - 1))}
              className="p-3 hover:bg-gray-50"
            >
              <i className="ri-subtract-line"></i>
            </button>
            <span className="flex-1 text-center py-3 font-medium">{details.bathrooms}</span>
            <button
              type="button"
              onClick={() => handleChange('bathrooms', details.bathrooms + 1)}
              className="p-3 hover:bg-gray-50"
            >
              <i className="ri-add-line"></i>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Max Guests
          </label>
          <div className="flex items-center border rounded-lg">
            <button
              type="button"
              onClick={() => handleChange('maxGuests', Math.max(1, details.maxGuests - 1))}
              className="p-3 hover:bg-gray-50"
            >
              <i className="ri-subtract-line"></i>
            </button>
            <span className="flex-1 text-center py-3 font-medium">{details.maxGuests}</span>
            <button
              type="button"
              onClick={() => handleChange('maxGuests', details.maxGuests + 1)}
              className="p-3 hover:bg-gray-50"
            >
              <i className="ri-add-line"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Area and Floor */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Area (sq ft)
          </label>
          <input
            type="number"
            value={details.area}
            onChange={(e) => handleChange('area', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Floor
          </label>
          <input
            type="text"
            value={details.floor}
            onChange={(e) => handleChange('floor', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 2nd Floor"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Property Description
        </label>
        <textarea
          value={details.description}
          onChange={(e) => handleChange('description', e.target.value)}
          rows={4}
          maxLength={500}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe your property, its features, and what makes it special..."
        />
        <div className="text-sm text-gray-500 mt-1">
          {details.description.length}/500 characters
        </div>
      </div>

      {/* House Rules */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          House Rules
        </label>
        <textarea
          value={details.rules}
          onChange={(e) => handleChange('rules', e.target.value)}
          rows={3}
          maxLength={500}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="No smoking, No pets, Check-in after 2 PM, etc."
        />
        <div className="text-sm text-gray-500 mt-1">
          {details.rules.length}/500 characters
        </div>
      </div>
    </div>
  );
}