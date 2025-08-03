'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import PhotoCarousel from './PhotoCarousel';
import DetailsTab from './DetailsTab';
import AmenitiesTab from './AmenitiesTab';
import ReviewsTab from './ReviewsTab';
import HostInfoTab from './HostInfoTab';

interface PGDetailProps {
  pgId: string;
}

export default function PGDetail({ pgId }: PGDetailProps) {
  const [activeTab, setActiveTab] = useState('details');
  const [showBookingModal, setShowBookingModal] = useState(false);

  const pgData = {
    id: pgId,
    name: "Sunrise PG",
    price: 8500,
    location: "Koramangala, Bangalore",
    rating: 4.5,
    reviews: 128,
    images: [
      "https://readdy.ai/api/search-image?query=Modern%20paying%20guest%20accommodation%20room%20with%20bed%2C%20study%20table%2C%20wardrobe%2C%20clean%20and%20well-lit%20interior%2C%20contemporary%20furniture%2C%20comfortable%20living%20space%20for%20students%20and%20professionals&width=800&height=600&seq=detail-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Paying%20guest%20common%20area%20with%20seating%2C%20dining%20table%2C%20kitchen%20access%2C%20clean%20and%20organized%20shared%20space%2C%20modern%20furniture%20and%20lighting&width=800&height=600&seq=detail-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Paying%20guest%20bathroom%20with%20modern%20fixtures%2C%20clean%20tiles%2C%20shower%2C%20mirror%2C%20well-maintained%20sanitary%20facilities&width=800&height=600&seq=detail-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Paying%20guest%20building%20exterior%2C%20modern%20architecture%2C%20secure%20entrance%2C%20well-maintained%20property%20with%20parking%20area&width=800&height=600&seq=detail-4&orientation=landscape"
    ],
    amenities: ['Wi-Fi', 'AC', 'Food', 'Parking', 'Laundry', 'Security'],
    roomType: 'Double Sharing',
    description: 'A comfortable and well-maintained PG with modern amenities. Perfect for working professionals and students.',
    host: {
      name: 'Rajesh Kumar',
      rating: 4.7,
      experience: '5 years',
      properties: 3
    }
  };

  const tabs = [
    { id: 'details', label: 'Details', icon: 'ri-information-line' },
    { id: 'amenities', label: 'Amenities', icon: 'ri-shield-check-line' },
    { id: 'reviews', label: 'Reviews', icon: 'ri-star-line' },
    { id: 'host', label: 'Host Info', icon: 'ri-user-line' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <PhotoCarousel images={pgData.images} />
            
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{pgData.name}</h1>
                  <p className="text-gray-600">
                    <i className="ri-map-pin-line mr-1"></i>
                    {pgData.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">₹{pgData.price}</div>
                  <div className="text-sm text-gray-500">/month</div>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <i className="ri-star-fill text-yellow-400 mr-1"></i>
                  <span className="font-medium">{pgData.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">({pgData.reviews} reviews)</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-600">{pgData.roomType}</span>
              </div>
              
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center py-3 px-1 border-b-2 text-sm font-medium ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <i className={`${tab.icon} mr-2`}></i>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
              
              {/* Tab Content */}
              <div className="min-h-96">
                {activeTab === 'details' && <DetailsTab pgData={pgData} />}
                {activeTab === 'amenities' && <AmenitiesTab amenities={pgData.amenities} />}
                {activeTab === 'reviews' && <ReviewsTab pgId={pgData.id} />}
                {activeTab === 'host' && <HostInfoTab host={pgData.host} />}
              </div>
            </div>
          </div>
          
          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-blue-600 mb-2">₹{pgData.price}</div>
                <div className="text-sm text-gray-500">per month</div>
              </div>
              
              <button
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mb-4 whitespace-nowrap"
              >
                Request Booking
              </button>
              
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <i className="ri-shield-check-line mr-2 text-green-600"></i>
                  <span>Verified Property</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line mr-2 text-blue-600"></i>
                  <span>Instant Booking</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-customer-service-line mr-2 text-purple-600"></i>
                  <span>24/7 Support</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3">Contact Host</h3>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap">
                  <i className="ri-message-line mr-2"></i>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky CTA for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 z-50">
        <button
          onClick={() => setShowBookingModal(true)}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          Request Booking - ₹{pgData.price}/month
        </button>
      </div>
    </div>
  );
}