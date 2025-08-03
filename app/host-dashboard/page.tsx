'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Listings from './Listings';
import Calendar from './Calendar';
import Bookings from './Bookings';
import Settings from './Settings';
import HelpSupport from './HelpSupport';

export default function HostDashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'listings' && <Listings />}
          {activeTab === 'calendar' && <Calendar />}
          {activeTab === 'bookings' && <Bookings />}
          {activeTab === 'settings' && <Settings />}
          {activeTab === 'help' && <HelpSupport />}
        </div>
      </div>
    </div>
  );
}