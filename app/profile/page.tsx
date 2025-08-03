'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import SavedSearches from './SavedSearches';
import BookingHistory from './BookingHistory';
import Preferences from './Preferences';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('saved');

  const tabs = [
    { id: 'saved', label: 'Saved Searches', icon: 'ri-bookmark-line' },
    { id: 'bookings', label: 'Booking History', icon: 'ri-calendar-line' },
    { id: 'preferences', label: 'Preferences', icon: 'ri-settings-line' }
  ];

  const userInfo = {
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 9876543210',
    joinDate: 'January 2024',
    avatar: ''
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-user-line text-blue-600 text-3xl"></i>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{userInfo.name}</h2>
                <p className="text-gray-600 text-sm">{userInfo.email}</p>
                <p className="text-gray-500 text-sm mt-1">Member since {userInfo.joinDate}</p>
              </div>
              
              <div className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-500'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <i className={`${tab.icon} mr-3`}></i>
                    {tab.label}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <button className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <i className="ri-logout-circle-line mr-3"></i>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {activeTab === 'saved' && <SavedSearches />}
              {activeTab === 'bookings' && <BookingHistory />}
              {activeTab === 'preferences' && <Preferences />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}