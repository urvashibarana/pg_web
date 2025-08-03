'use client';

export default function MapView() {
  return (
    <div className="h-screen bg-gray-100">
      <div className="h-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124417.35447425636!2d77.49665139999999!3d12.9537421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1639123456789!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3">
          <div className="flex items-center text-sm text-gray-600">
            <i className="ri-map-pin-line mr-2"></i>
            <span>24 PGs found in this area</span>
          </div>
        </div>
      </div>
    </div>
  );
}