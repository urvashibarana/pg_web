'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOTP, setShowOTP] = useState(false);

  const handleSendOTP = () => {
    if (loginMethod === 'email' && email) {
      setShowOTP(true);
    } else if (loginMethod === 'phone' && phone) {
      setShowOTP(true);
    }
  };

  const handleLogin = () => {
    if (otp) {
      window.location.href = '/profile';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
                create a new account
              </Link>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <div className="flex rounded-md shadow-sm">
                  <button
                    onClick={() => setLoginMethod('email')}
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-md border ${
                      loginMethod === 'email'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    Email
                  </button>
                  <button
                    onClick={() => setLoginMethod('phone')}
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-md border ${
                      loginMethod === 'phone'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    Phone
                  </button>
                </div>
              </div>

              {!showOTP ? (
                <div className="space-y-4">
                  {loginMethod === 'email' ? (
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  )}

                  <button
                    onClick={handleSendOTP}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    Send OTP
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                      Enter OTP
                    </label>
                    <input
                      id="otp"
                      name="otp"
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      OTP sent to {loginMethod === 'email' ? email : phone}
                    </p>
                  </div>

                  <button
                    onClick={handleLogin}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    Verify & Login
                  </button>

                  <button
                    onClick={() => setShowOTP(false)}
                    className="w-full text-blue-600 hover:text-blue-700 text-sm"
                  >
                    ← Back to login
                  </button>
                </div>
              )}

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <i className="ri-google-fill text-xl text-red-500"></i>
                    <span className="ml-2">Google</span>
                  </button>
                  <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <i className="ri-facebook-fill text-xl text-blue-600"></i>
                    <span className="ml-2">Facebook</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}