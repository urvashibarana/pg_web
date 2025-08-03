
'use client';

import { useState } from 'react';
import Button from '../components/ui/Button';

export default function HomeHero() {
  const [city, setCity] = useState('');
  const [radius, setRadius] = useState('5');
  const [showRadiusDropdown, setShowRadiusDropdown] = useState(false);

  const radiusOptions = [
    { value: '2', label: 'Within 2 km' },
    { value: '5', label: 'Within 5 km' },
    { value: '10', label: 'Within 10 km' },
    { value: '20', label: 'Within 20 km' },
  ];

  const handleSearch = () => {
    if (city) {
      window.location.href = `/search?city=${encodeURIComponent(city)}&radius=${radius}`;
    }
  };

  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat h-96 pt-16 md:pt-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20city%20skyline%20with%20apartment%20buildings%20and%20residential%20areas%2C%20urban%20landscape%20with%20clear%20sky%2C%20professional%20real%20estate%20photography%20style%2C%20bright%20and%20inviting%20atmosphere%2C%20contemporary%20architecture%2C%20wide%20view%20of%20metropolitan%20area&width=1200&height=400&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center pt-16 md:pt-0">
        <div className="text-center text-white w-full max-w-4xl px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Perfect PG</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Discover comfortable paying guest accommodations in your city</p>
          
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <i className="ri-map-pin-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm"
                  />
                </div>
              </div>
              
              <div className="relative">
                <button
                  onClick={() => setShowRadiusDropdown(!showRadiusDropdown)}
                  className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm flex items-center justify-between min-w-[140px]"
                >
                  <span>Within {radius} km</span>
                  <i className="ri-arrow-down-s-line ml-2"></i>
                </button>
                
                {showRadiusDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {radiusOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setRadius(option.value);
                          setShowRadiusDropdown(false);
                        }}
                        className="w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-700 text-sm"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <Button onClick={handleSearch} size="lg" className="whitespace-nowrap">
                Search PGs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
