'use client';

import Link from 'next/link';

interface SearchResultsProps {
  filters: {
    budget: { min: number; max: number };
    roomType: string;
    amenities: string[];
    rating: number;
  };
}

export default function SearchResults({ filters }: SearchResultsProps) {
  const pgListings = [
    {
      id: 1,
      name: "Sunrise PG",
      price: 8500,
      location: "Koramangala, Bangalore",
      rating: 4.5,
      reviews: 128,
      image: "https://readdy.ai/api/search-image?query=Modern%20paying%20guest%20accommodation%20room%20with%20bed%2C%20study%20table%2C%20wardrobe%2C%20clean%20and%20well-lit%20interior%2C%20contemporary%20furniture%2C%20comfortable%20living%20space%20for%20students%20and%20professionals&width=300&height=200&seq=search-1&orientation=landscape",
      amenities: ['Wi-Fi', 'AC', 'Food', 'Parking'],
      roomType: 'Double Sharing',
      distance: '2.1 km'
    },
    {
      id: 2,
      name: "Green Valley PG",
      price: 12000,
      location: "Indiranagar, Bangalore",
      rating: 4.3,
      reviews: 94,
      image: "https://readdy.ai/api/search-image?query=Spacious%20paying%20guest%20room%20with%20modern%20amenities%2C%20AC%2C%20comfortable%20bed%2C%20study%20area%2C%20clean%20and%20organized%20interior%20design%2C%20professional%20accommodation%20for%20working%20professionals&width=300&height=200&seq=search-2&orientation=landscape",
      amenities: ['Wi-Fi', 'AC', 'Gym', 'Laundry'],
      roomType: 'Single Room',
      distance: '1.8 km'
    },
    {
      id: 3,
      name: "Student Haven PG",
      price: 7000,
      location: "BTM Layout, Bangalore",
      rating: 4.2,
      reviews: 156,
      image: "https://readdy.ai/api/search-image?query=Budget-friendly%20paying%20guest%20room%20for%20students%2C%20basic%20furniture%2C%20study%20table%2C%20bed%2C%20clean%20and%20simple%20interior%2C%20affordable%20accommodation%20with%20essential%20amenities&width=300&height=200&seq=search-3&orientation=landscape",
      amenities: ['Wi-Fi', 'Food', 'Security'],
      roomType: 'Triple Sharing',
      distance: '3.5 km'
    },
    {
      id: 4,
      name: "Executive PG",
      price: 18000,
      location: "Whitefield, Bangalore",
      rating: 4.8,
      reviews: 67,
      image: "https://readdy.ai/api/search-image?query=Luxury%20paying%20guest%20room%20with%20premium%20furniture%2C%20modern%20amenities%2C%20spacious%20layout%2C%20executive%20accommodation%20for%20professionals%2C%20elegant%20interior%20design&width=300&height=200&seq=search-4&orientation=landscape",
      amenities: ['Wi-Fi', 'AC', 'Gym', 'Parking', 'Food'],
      roomType: 'Single Room',
      distance: '4.2 km'
    },
    {
      id: 5,
      name: "Comfort Zone PG",
      price: 10500,
      location: "Electronic City, Bangalore",
      rating: 4.4,
      reviews: 89,
      image: "https://readdy.ai/api/search-image?query=Comfortable%20paying%20guest%20accommodation%20with%20modern%20amenities%2C%20well-furnished%20room%2C%20study%20area%2C%20wardrobe%2C%20clean%20and%20organized%20living%20space&width=300&height=200&seq=search-5&orientation=landscape",
      amenities: ['Wi-Fi', 'AC', 'Laundry', 'Security'],
      roomType: 'Double Sharing',
      distance: '5.1 km'
    },
    {
      id: 6,
      name: "Urban Nest PG",
      price: 13500,
      location: "HSR Layout, Bangalore",
      rating: 4.6,
      reviews: 112,
      image: "https://readdy.ai/api/search-image?query=Modern%20urban%20paying%20guest%20accommodation%20with%20stylish%20furniture%2C%20contemporary%20design%2C%20comfortable%20living%20space%2C%20premium%20amenities%20for%20professionals&width=300&height=200&seq=search-6&orientation=landscape",
      amenities: ['Wi-Fi', 'AC', 'Food', 'Gym', 'Parking'],
      roomType: 'Single Room',
      distance: '2.8 km'
    }
  ];

  return (
    <div className="p-4 space-y-4">
      {pgListings.map((pg) => (
        <Link href={`/pg/${pg.id}`} key={pg.id} className="block">
          <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-4">
            <div className="flex">
              <div className="w-48 h-32 flex-shrink-0 mr-4">
                <img
                  src={pg.image}
                  alt={pg.name}
                  className="w-full h-full object-cover object-top rounded-lg"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{pg.name}</h3>
                    <p className="text-gray-600 text-sm">
                      <i className="ri-map-pin-line mr-1"></i>
                      {pg.location} • {pg.distance}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">₹{pg.price}</div>
                    <div className="text-sm text-gray-500">/month</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <i className="ri-star-fill text-yellow-400 mr-1"></i>
                    <span className="font-medium">{pg.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({pg.reviews} reviews)</span>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{pg.roomType}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {pg.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    View Details
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm whitespace-nowrap">
                    Request Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}