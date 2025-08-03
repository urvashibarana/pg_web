'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredPGs = [
    {
      id: 1,
      name: "Sunrise PG",
      price: 8500,
      location: "Koramangala, Bangalore",
      rating: 4.5,
      image: "https://readdy.ai/api/search-image?query=Modern%20paying%20guest%20accommodation%20room%20with%20bed%2C%20study%20table%2C%20wardrobe%2C%20clean%20and%20well-lit%20interior%2C%20contemporary%20furniture%2C%20comfortable%20living%20space%20for%20students%20and%20professionals&width=300&height=200&seq=pg-1&orientation=landscape"
    },
    {
      id: 2,
      name: "Green Valley PG",
      price: 12000,
      location: "Gurgaon, Delhi NCR",
      rating: 4.3,
      image: "https://readdy.ai/api/search-image?query=Spacious%20paying%20guest%20room%20with%20modern%20amenities%2C%20AC%2C%20comfortable%20bed%2C%20study%20area%2C%20clean%20and%20organized%20interior%20design%2C%20professional%20accommodation%20for%20working%20professionals&width=300&height=200&seq=pg-2&orientation=landscape"
    },
    {
      id: 3,
      name: "City Heights PG",
      price: 15000,
      location: "Andheri, Mumbai",
      rating: 4.7,
      image: "https://readdy.ai/api/search-image?query=Premium%20paying%20guest%20accommodation%20with%20modern%20furniture%2C%20air%20conditioning%2C%20study%20table%2C%20wardrobe%2C%20bright%20and%20airy%20room%2C%20upscale%20interior%20design%20for%20professionals&width=300&height=200&seq=pg-3&orientation=landscape"
    },
    {
      id: 4,
      name: "Student Haven PG",
      price: 7000,
      location: "Anna Nagar, Chennai",
      rating: 4.2,
      image: "https://readdy.ai/api/search-image?query=Budget-friendly%20paying%20guest%20room%20for%20students%2C%20basic%20furniture%2C%20study%20table%2C%20bed%2C%20clean%20and%20simple%20interior%2C%20affordable%20accommodation%20with%20essential%20amenities&width=300&height=200&seq=pg-4&orientation=landscape"
    },
    {
      id: 5,
      name: "Executive PG",
      price: 18000,
      location: "Whitefield, Bangalore",
      rating: 4.8,
      image: "https://readdy.ai/api/search-image?query=Luxury%20paying%20guest%20room%20with%20premium%20furniture%2C%20modern%20amenities%2C%20spacious%20layout%2C%20executive%20accommodation%20for%20professionals%2C%20elegant%20interior%20design&width=300&height=200&seq=pg-5&orientation=landscape"
    },
    {
      id: 6,
      name: "Comfort Zone PG",
      price: 10500,
      location: "Sector 18, Noida",
      rating: 4.4,
      image: "https://readdy.ai/api/search-image?query=Comfortable%20paying%20guest%20accommodation%20with%20modern%20amenities%2C%20well-furnished%20room%2C%20study%20area%2C%20wardrobe%2C%20clean%20and%20organized%20living%20space&width=300&height=200&seq=pg-6&orientation=landscape"
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(featuredPGs.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured PGs</h2>
          <p className="text-gray-600">Discover top-rated paying guest accommodations</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredPGs
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((pg) => (
                        <Link href={`/pg/${pg.id}`} key={pg.id} className="group cursor-pointer">
                          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                              <img
                                src={pg.image}
                                alt={pg.name}
                                className="w-full h-full object-cover object-top"
                              />
                              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                                <i className="ri-star-fill text-yellow-400 mr-1"></i>
                                {pg.rating}
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold text-lg text-gray-900 mb-1">{pg.name}</h3>
                              <p className="text-gray-600 text-sm mb-2">
                                <i className="ri-map-pin-line mr-1"></i>
                                {pg.location}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-blue-600">₹{pg.price}</span>
                                <span className="text-gray-500 text-sm">/month</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <i className="ri-arrow-left-line text-xl text-gray-600"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <i className="ri-arrow-right-line text-xl text-gray-600"></i>
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}