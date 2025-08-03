'use client';

import { useState } from 'react';

export default function HelpSupport() {
  const [activeSection, setActiveSection] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketForm, setTicketForm] = useState({
    category: '',
    subject: '',
    description: '',
    priority: 'medium'
  });

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support ticket submitted:', ticketForm);
    // Reset form
    setTicketForm({
      category: '',
      subject: '',
      description: '',
      priority: 'medium'
    });
  };

  const sections = [
    { id: 'faq', label: 'FAQ', icon: 'ri-question-line' },
    { id: 'contact', label: 'Contact Us', icon: 'ri-phone-line' },
    { id: 'ticket', label: 'Support Ticket', icon: 'ri-customer-service-line' },
    { id: 'resources', label: 'Resources', icon: 'ri-book-line' }
  ];

  const faqs = [
    {
      question: 'How do I add a new property listing?',
      answer: 'To add a new property listing, click on the "Add New Listing" button in your dashboard. Fill out all the required information including property details, amenities, photos, and pricing. Once submitted, your listing will be reviewed and published.'
    },
    {
      question: 'How do I handle booking requests?',
      answer: 'Booking requests appear in your Bookings tab. You can view guest details, check availability, and either accept or reject requests. When you accept a booking, the guest will receive payment instructions.'
    },
    {
      question: 'What payment methods are supported?',
      answer: 'We support UPI payments and NEFT bank transfers. You can add your payment details in the Settings section. Guests can pay using these methods, and you will receive notifications about payments.'
    },
    {
      question: 'How do I update my property availability?',
      answer: 'Use the Calendar section to manage your property availability. You can block dates, update pricing, and see upcoming bookings. This helps you maintain accurate availability for potential guests.'
    },
    {
      question: 'What should I do if I have issues with a guest?',
      answer: 'If you encounter issues with a guest, you can report them through the Support Ticket system. Provide details about the situation, and our team will investigate and take appropriate action.'
    },
    {
      question: 'How do I improve my property rating?',
      answer: 'To improve your rating, focus on providing excellent amenities, maintaining cleanliness, being responsive to guest queries, and addressing any issues promptly. Regular maintenance and good communication help achieve higher ratings.'
    }
  ];

  const resources = [
    {
      title: 'Host Guidelines',
      description: 'Best practices for hosting guests and managing your property',
      icon: 'ri-guide-line',
      link: '#'
    },
    {
      title: 'Property Photography Tips',
      description: 'How to take great photos that attract more bookings',
      icon: 'ri-camera-line',
      link: '#'
    },
    {
      title: 'Pricing Strategy Guide',
      description: 'Learn how to set competitive prices for your property',
      icon: 'ri-money-rupee-circle-line',
      link: '#'
    },
    {
      title: 'Guest Communication',
      description: 'Templates and tips for effective guest communication',
      icon: 'ri-chat-3-line',
      link: '#'
    },
    {
      title: 'Legal Requirements',
      description: 'Understanding legal requirements for property rentals',
      icon: 'ri-file-text-line',
      link: '#'
    },
    {
      title: 'Tax Information',
      description: 'Important tax information for property hosts',
      icon: 'ri-file-paper-line',
      link: '#'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
        <p className="text-gray-600">Get help with your hosting questions and issues</p>
      </div>

      <div className="flex bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r">
          <div className="p-4">
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <i className={`${section.icon} mr-3`}></i>
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {activeSection === 'faq' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <i className="ri-search-line absolute left-3 top-3 text-gray-400"></i>
                </div>
              </div>

              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-phone-line text-blue-600 text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Phone Support</h3>
                      <p className="text-gray-600 text-sm">Mon-Fri, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                  <p className="text-gray-900 font-medium">+91 1800-123-4567</p>
                  <p className="text-gray-600 text-sm mt-2">For urgent issues and immediate assistance</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <i className="ri-mail-line text-green-600 text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Email Support</h3>
                      <p className="text-gray-600 text-sm">Response within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-gray-900 font-medium">support@pgbooking.com</p>
                  <p className="text-gray-600 text-sm mt-2">For general inquiries and detailed issues</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <i className="ri-chat-3-line text-purple-600 text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Live Chat</h3>
                      <p className="text-gray-600 text-sm">Available 24/7</p>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Start Chat
                  </button>
                  <p className="text-gray-600 text-sm mt-2">Get instant help from our support team</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <i className="ri-whatsapp-line text-orange-600 text-xl"></i>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600 text-sm">Quick messaging support</p>
                    </div>
                  </div>
                  <p className="text-gray-900 font-medium">+91 9876543210</p>
                  <p className="text-gray-600 text-sm mt-2">Send us a message for quick assistance</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'ticket' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Submit Support Ticket</h2>
              
              <form onSubmit={handleTicketSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={ticketForm.category}
                      onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="booking">Booking Issues</option>
                      <option value="payment">Payment Problems</option>
                      <option value="listing">Listing Management</option>
                      <option value="technical">Technical Issues</option>
                      <option value="account">Account Problems</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select
                      value={ticketForm.priority}
                      onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of your issue"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Provide detailed information about your issue..."
                    maxLength={500}
                    required
                  />
                  <div className="text-sm text-gray-500 mt-1">{ticketForm.description.length}/500 characters</div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Ticket
                </button>
              </form>
            </div>
          )}

          {activeSection === 'resources' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Resources & Guides</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <i className={`${resource.icon} text-blue-600 text-xl`}></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-gray-900">{resource.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                      Read More
                      <i className="ri-arrow-right-line ml-1"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}