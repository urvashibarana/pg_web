'use client';

interface HostInfoTabProps {
  host: {
    name: string;
    rating: number;
    experience: string;
    properties: number;
  };
}

export default function HostInfoTab({ host }: HostInfoTabProps) {
  const hostDetails = [
    { label: 'Response Rate', value: '95%' },
    { label: 'Response Time', value: 'Within 2 hours' },
    { label: 'Languages', value: 'English, Hindi, Kannada' },
    { label: 'Joined', value: 'January 2019' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
          <i className="ri-user-line text-blue-600 text-4xl"></i>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{host.name}</h3>
          <div className="flex items-center mt-2">
            <i className="ri-star-fill text-yellow-400 mr-1"></i>
            <span className="font-medium">{host.rating}</span>
            <span className="text-gray-500 text-sm ml-1">Host Rating</span>
          </div>
          <div className="flex items-center mt-1 text-sm text-gray-600">
            <i className="ri-time-line mr-1"></i>
            <span>{host.experience} hosting experience</span>
          </div>
          <div className="flex items-center mt-1 text-sm text-gray-600">
            <i className="ri-home-line mr-1"></i>
            <span>{host.properties} properties</span>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">About {host.name}</h4>
        <p className="text-gray-700 leading-relaxed mb-4">
          I am a professional property manager with over 5 years of experience in providing 
          comfortable and safe accommodation to students and working professionals. I believe 
          in maintaining high standards of cleanliness and providing excellent customer service 
          to all my tenants.
        </p>
        <p className="text-gray-700 leading-relaxed">
          My properties are located in prime locations with easy access to public transportation, 
          shopping centers, and educational institutions. I am available 24/7 to address any 
          concerns and ensure a pleasant stay for all residents.
        </p>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Host Details</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {hostDetails.map((detail, index) => (
            <div key={index} className="flex justify-between py-3 border-b border-gray-100">
              <span className="text-gray-600">{detail.label}</span>
              <span className="font-medium">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Verification</h4>
        <div className="space-y-3">
          <div className="flex items-center">
            <i className="ri-check-line text-green-600 mr-3"></i>
            <span className="text-gray-700">Identity Verified</span>
          </div>
          <div className="flex items-center">
            <i className="ri-check-line text-green-600 mr-3"></i>
            <span className="text-gray-700">Phone Number Verified</span>
          </div>
          <div className="flex items-center">
            <i className="ri-check-line text-green-600 mr-3"></i>
            <span className="text-gray-700">Email Verified</span>
          </div>
          <div className="flex items-center">
            <i className="ri-check-line text-green-600 mr-3"></i>
            <span className="text-gray-700">Government ID Verified</span>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Contact Host</h4>
        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
            <i className="ri-message-line mr-2"></i>
            Send Message
          </button>
          <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap">
            <i className="ri-phone-line mr-2"></i>
            Call Host
          </button>
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-4">Other Properties</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <img
              src="https://readdy.ai/api/search-image?query=Another%20paying%20guest%20accommodation%20room%20with%20modern%20amenities%2C%20clean%20interior%2C%20comfortable%20furniture%2C%20professional%20accommodation%20setup&width=200&height=150&seq=host-prop-1&orientation=landscape"
              alt="Property 2"
              className="w-full h-32 object-cover object-top rounded-lg mb-3"
            />
            <h5 className="font-medium">Green Valley PG</h5>
            <p className="text-sm text-gray-600">₹12,000/month</p>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <img
              src="https://readdy.ai/api/search-image?query=Premium%20paying%20guest%20accommodation%20with%20luxury%20amenities%2C%20modern%20interior%20design%2C%20spacious%20room%2C%20high-end%20furniture%20and%20fixtures&width=200&height=150&seq=host-prop-2&orientation=landscape"
              alt="Property 3"
              className="w-full h-32 object-cover object-top rounded-lg mb-3"
            />
            <h5 className="font-medium">Executive PG</h5>
            <p className="text-sm text-gray-600">₹18,000/month</p>
          </div>
        </div>
      </div>
    </div>
  );
}