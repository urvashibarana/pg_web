'use client';

import { useState } from 'react';

interface AmenitiesProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function Amenities({ formData, setFormData }: AmenitiesProps) {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    formData.amenities || []
  );

  const handleAmenityToggle = (amenityId: string) => {
    const updated = selectedAmenities.includes(amenityId)
      ? selectedAmenities.filter(id => id !== amenityId)
      : [...selectedAmenities, amenityId];
    
    setSelectedAmenities(updated);
    setFormData({
      ...formData,
      amenities: updated
    });
  };

  const amenityCategories = [
    {
      title: 'Basic Amenities',
      items: [
        { id: 'wifi', name: 'Free WiFi', icon: 'ri-wifi-line' },
        { id: 'ac', name: 'Air Conditioning', icon: 'ri-temp-cold-line' },
        { id: 'heating', name: 'Heating', icon: 'ri-fire-line' },
        { id: 'hot_water', name: 'Hot Water', icon: 'ri-drop-line' },
        { id: 'power_backup', name: 'Power Backup', icon: 'ri-battery-charge-line' },
        { id: 'parking', name: 'Parking', icon: 'ri-parking-line' }
      ]
    },
    {
      title: 'Kitchen & Dining',
      items: [
        { id: 'kitchen', name: 'Kitchen', icon: 'ri-restaurant-line' },
        { id: 'refrigerator', name: 'Refrigerator', icon: 'ri-fridge-line' },
        { id: 'microwave', name: 'Microwave', icon: 'ri-computer-line' },
        { id: 'water_filter', name: 'Water Filter', icon: 'ri-drop-line' },
        { id: 'dining_table', name: 'Dining Table', icon: 'ri-table-line' },
        { id: 'gas_stove', name: 'Gas Stove', icon: 'ri-fire-line' }
      ]
    },
    {
      title: 'Living & Bedroom',
      items: [
        { id: 'bed', name: 'Bed', icon: 'ri-hotel-bed-line' },
        { id: 'wardrobe', name: 'Wardrobe', icon: 'ri-door-line' },
        { id: 'study_table', name: 'Study Table', icon: 'ri-table-2' },
        { id: 'chair', name: 'Chair', icon: 'ri-armchair-line' },
        { id: 'sofa', name: 'Sofa', icon: 'ri-sofa-line' },
        { id: 'tv', name: 'TV', icon: 'ri-tv-line' }
      ]
    },
    {
      title: 'Bathroom',
      items: [
        { id: 'attached_bathroom', name: 'Attached Bathroom', icon: 'ri-home-2-line' },
        { id: 'geyser', name: 'Geyser', icon: 'ri-temp-hot-line' },
        { id: 'washing_machine', name: 'Washing Machine', icon: 'ri-washing-machine-line' },
        { id: 'shower', name: 'Shower', icon: 'ri-drop-line' },
        { id: 'bathtub', name: 'Bathtub', icon: 'ri-drop-line' },
        { id: 'toiletries', name: 'Basic Toiletries', icon: 'ri-bottle-line' }
      ]
    },
    {
      title: 'Security & Services',
      items: [
        { id: 'security', name: '24/7 Security', icon: 'ri-shield-line' },
        { id: 'housekeeping', name: 'Housekeeping', icon: 'ri-service-line' },
        { id: 'laundry', name: 'Laundry Service', icon: 'ri-shirt-line' },
        { id: 'food_service', name: 'Food Service', icon: 'ri-restaurant-2-line' },
        { id: 'reception', name: 'Reception', icon: 'ri-customer-service-line' },
        { id: 'cctv', name: 'CCTV', icon: 'ri-camera-line' }
      ]
    },
    {
      title: 'Recreation & Fitness',
      items: [
        { id: 'gym', name: 'Gym', icon: 'ri-run-line' },
        { id: 'swimming_pool', name: 'Swimming Pool', icon: 'ri-swimming-line' },
        { id: 'games_room', name: 'Games Room', icon: 'ri-gamepad-line' },
        { id: 'garden', name: 'Garden', icon: 'ri-leaf-line' },
        { id: 'terrace', name: 'Terrace', icon: 'ri-building-2-line' },
        { id: 'balcony', name: 'Balcony', icon: 'ri-home-line' }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
        <p className="text-gray-600 mb-8">Select all the amenities your property offers</p>
      </div>

      {amenityCategories.map((category) => (
        <div key={category.title} className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {category.items.map((amenity) => (
              <button
                key={amenity.id}
                type="button"
                onClick={() => handleAmenityToggle(amenity.id)}
                className={`p-4 border rounded-lg text-left transition-colors ${
                  selectedAmenities.includes(amenity.id)
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <i className={`${amenity.icon} text-xl mr-3`}></i>
                  <span className="font-medium">{amenity.name}</span>
                  {selectedAmenities.includes(amenity.id) && (
                    <i className="ri-check-line text-blue-600 ml-auto"></i>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Selected Amenities</h4>
        <div className="text-sm text-blue-700">
          {selectedAmenities.length === 0 ? (
            'No amenities selected yet'
          ) : (
            `${selectedAmenities.length} amenities selected`
          )}
        </div>
      </div>
    </div>
  );
}