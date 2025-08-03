'use client';

interface DetailsTabProps {
  pgData: {
    id: string;
    name: string;
    price: number;
    location: string;
    rating: number;
    reviews: number;
    roomType: string;
    description: string;
    amenities: string[];
  };
}

export default function DetailsTab({ pgData }: DetailsTabProps) {
  const details = [
    { label: 'Room Type', value: pgData.roomType },
    { label: 'Occupancy', value: '2 persons' },
    { label: 'Deposit', value: '₹17,000 (2 months)' },
    { label: 'Notice Period', value: '1 month' },
    { label: 'Electricity', value: 'Included' },
    { label: 'Water', value: 'Included' },
    { label: 'Maintenance', value: 'Included' },
    { label: 'Food', value: 'Available (₹3,000/month)' }
  ];

  const rules = [
    'No smoking inside the premises',
    'No pets allowed',
    'Visitors allowed till 9 PM',
    'Quiet hours: 10 PM - 7 AM',
    'No alcohol consumption',
    'Keep common areas clean'
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">About this PG</h3>
        <p className="text-gray-700 leading-relaxed">{pgData.description}</p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Property Details</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {details.map((detail, index) => (
            <div key={index} className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">{detail.label}</span>
              <span className="font-medium">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">House Rules</h3>
        <div className="space-y-2">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-center">
              <i className="ri-check-line text-green-600 mr-3"></i>
              <span className="text-gray-700">{rule}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Location</h3>
        <p className="text-gray-700 mb-4">{pgData.location}</p>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8967!2d77.6117!3d12.9279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15019d6a2a3b%3A0x22d65e1e1b6d4c!2sKoramangala%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1639123456789!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}