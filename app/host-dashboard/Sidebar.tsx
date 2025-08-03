'use client';

import Link from 'next/link';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-line' },
    { id: 'listings', label: 'My Listings', icon: 'ri-home-line' },
    { id: 'calendar', label: 'Calendar', icon: 'ri-calendar-line' },
    { id: 'bookings', label: 'Bookings', icon: 'ri-bookmark-line' },
  ];

  return (
    <div className="w-64 bg-white shadow-sm border-r h-screen">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">Host Dashboard</h2>
        <p className="text-sm text-gray-600 mt-1">Manage your properties</p>
      </div>
      
      <nav className="px-4 pb-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-500'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className={`${item.icon} mr-3 text-lg`}></i>
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <Link href="/host-dashboard/add-listing" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center whitespace-nowrap">
            <i className="ri-add-line mr-2"></i>
            Add New Listing
          </Link>
        </div>
        
        <div className="mt-4">
          <button 
            onClick={() => setActiveTab('settings')}
            className="w-full text-gray-600 hover:text-gray-700 py-2 px-4 text-left flex items-center"
          >
            <i className="ri-settings-line mr-3"></i>
            Settings
          </button>
          <button 
            onClick={() => setActiveTab('help')}
            className="w-full text-gray-600 hover:text-gray-700 py-2 px-4 text-left flex items-center"
          >
            <i className="ri-question-line mr-3"></i>
            Help & Support
          </button>
        </div>
      </nav>
    </div>
  );
}