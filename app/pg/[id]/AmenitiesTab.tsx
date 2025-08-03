'use client';

interface AmenitiesTabProps {
  amenities: string[];
}

export default function AmenitiesTab({ amenities }: AmenitiesTabProps) {
  const allAmenities = [
    { id: 'wifi', label: 'Wi-Fi', icon: 'ri-wifi-line', available: amenities.includes('Wi-Fi') },
    { id: 'ac', label: 'AC', icon: 'ri-temp-cold-line', available: amenities.includes('AC') },
    { id: 'food', label: 'Food', icon: 'ri-restaurant-line', available: amenities.includes('Food') },
    { id: 'parking', label: 'Parking', icon: 'ri-car-line', available: amenities.includes('Parking') },
    { id: 'laundry', label: 'Laundry', icon: 'ri-shirt-line', available: amenities.includes('Laundry') },
    { id: 'security', label: '24/7 Security', icon: 'ri-shield-line', available: amenities.includes('Security') },
    { id: 'gym', label: 'Gym', icon: 'ri-run-line', available: amenities.includes('Gym') },
    { id: 'power-backup', label: 'Power Backup', icon: 'ri-flashlight-line', available: amenities.includes('Power Backup') },
    { id: 'housekeeping', label: 'Housekeeping', icon: 'ri-broom-line', available: amenities.includes('Housekeeping') },
    { id: 'cctv', label: 'CCTV', icon: 'ri-camera-line', available: amenities.includes('CCTV') },
    { id: 'water-purifier', label: 'Water Purifier', icon: 'ri-drop-line', available: amenities.includes('Water Purifier') },
    { id: 'study-room', label: 'Study Room', icon: 'ri-book-open-line', available: amenities.includes('Study Room') }
  ];

  const availableAmenities = allAmenities.filter(amenity => amenity.available);
  const unavailableAmenities = allAmenities.filter(amenity => !amenity.available);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-6">Available Amenities</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className={`${amenity.icon} text-xl text-green-600`}></i>
              </div>
              <span className="font-medium text-green-700">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {unavailableAmenities.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-6">Not Available</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {unavailableAmenities.map((amenity) => (
              <div
                key={amenity.id}
                className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg"
              >
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <i className={`${amenity.icon} text-xl text-gray-400`}></i>
                </div>
                <span className="font-medium text-gray-500">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div>
        <h3 className="text-xl font-semibold mb-6">Additional Information</h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center mb-2">
              <i className="ri-information-line text-blue-600 mr-2"></i>
              <span className="font-medium text-blue-700">Internet Speed</span>
            </div>
            <p className="text-blue-600 text-sm">High-speed broadband connection with 100 Mbps</p>
          </div>
          
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center mb-2">
              <i className="ri-restaurant-line text-yellow-600 mr-2"></i>
              <span className="font-medium text-yellow-700">Food Service</span>
            </div>
            <p className="text-yellow-600 text-sm">Breakfast, lunch, and dinner available. Vegetarian and non-vegetarian options.</p>
          </div>
          
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <div className="flex items-center mb-2">
              <i className="ri-shield-check-line text-purple-600 mr-2"></i>
              <span className="font-medium text-purple-700">Security</span>
            </div>
            <p className="text-purple-600 text-sm">24/7 security guard, CCTV surveillance, and secure entry system.</p>
          </div>
        </div>
      </div>
    </div>
  );
}