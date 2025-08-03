'use client';

import Link from 'next/link';
import Button from '../components/ui/Button';

export default function CTASection() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-home-line text-blue-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">List Your PG</h3>
            <p className="text-gray-600 mb-6">
              Earn extra income by listing your property on our platform. 
              Reach thousands of potential tenants looking for quality accommodation.
            </p>
            <Link href="/host-dashboard/add-listing">
              <Button size="lg" className="w-full">
                <i className="ri-add-line mr-2"></i>
                List Your Property
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-user-star-line text-purple-600 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join as Host</h3>
            <p className="text-gray-600 mb-6">
              Create multiple listings, manage bookings, and build a successful 
              hosting business with our comprehensive host tools.
            </p>
            <Link href="/auth/signup?type=host">
              <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                <i className="ri-user-add-line mr-2"></i>
                Become a Host
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}