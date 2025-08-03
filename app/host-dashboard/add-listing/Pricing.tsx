'use client';

import { useState } from 'react';

interface PricingProps {
  formData: any;
  setFormData: (data: any) => void;
}

export default function Pricing({ formData, setFormData }: PricingProps) {
  const [pricing, setPricing] = useState({
    monthlyRent: '',
    securityDeposit: '',
    maintenanceCharges: '',
    electricityCharges: 'included',
    waterCharges: 'included',
    internetCharges: 'included',
    noticePeriod: '30',
    minimumStay: '1',
    availableFrom: '',
    ...formData.pricing
  });

  const handleChange = (field: string, value: any) => {
    const updatedPricing = { ...pricing, [field]: value };
    setPricing(updatedPricing);
    setFormData({
      ...formData,
      pricing: updatedPricing
    });
  };

  const chargeOptions = [
    { value: 'included', label: 'Included in rent' },
    { value: 'extra', label: 'Extra charges' },
    { value: 'not_available', label: 'Not available' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing & Availability</h2>
        <p className="text-gray-600 mb-8">Set your rental pricing and availability details</p>
      </div>

      {/* Main Pricing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Rent (₹) *
          </label>
          <input
            type="number"
            value={pricing.monthlyRent}
            onChange={(e) => handleChange('monthlyRent', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 15000"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Security Deposit (₹) *
          </label>
          <input
            type="number"
            value={pricing.securityDeposit}
            onChange={(e) => handleChange('securityDeposit', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 30000"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maintenance Charges (₹/month)
          </label>
          <input
            type="number"
            value={pricing.maintenanceCharges}
            onChange={(e) => handleChange('maintenanceCharges', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., 2000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Available From
          </label>
          <input
            type="date"
            value={pricing.availableFrom}
            onChange={(e) => handleChange('availableFrom', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Utility Charges */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Utility Charges</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Electricity
              </label>
              <select
                value={pricing.electricityCharges}
                onChange={(e) => handleChange('electricityCharges', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {chargeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Water
              </label>
              <select
                value={pricing.waterCharges}
                onChange={(e) => handleChange('waterCharges', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {chargeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Internet
              </label>
              <select
                value={pricing.internetCharges}
                onChange={(e) => handleChange('internetCharges', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {chargeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Terms & Conditions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notice Period (days)
            </label>
            <select
              value={pricing.noticePeriod}
              onChange={(e) => handleChange('noticePeriod', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="15">15 days</option>
              <option value="30">30 days</option>
              <option value="60">60 days</option>
              <option value="90">90 days</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Stay (months)
            </label>
            <select
              value={pricing.minimumStay}
              onChange={(e) => handleChange('minimumStay', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="1">1 month</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pricing Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Monthly Rent:</span>
            <span className="font-medium">₹{pricing.monthlyRent || '0'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Security Deposit:</span>
            <span className="font-medium">₹{pricing.securityDeposit || '0'}</span>
          </div>
          {pricing.maintenanceCharges && (
            <div className="flex justify-between">
              <span className="text-gray-600">Maintenance:</span>
              <span className="font-medium">₹{pricing.maintenanceCharges}/month</span>
            </div>
          )}
          <div className="border-t pt-2">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Upfront Cost:</span>
              <span>₹{Number(pricing.monthlyRent || 0) + Number(pricing.securityDeposit || 0)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">Important Notes</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Security deposit is refundable at the end of tenancy</li>
          <li>• Monthly rent is due on the 1st of each month</li>
          <li>• Maintenance charges cover common area upkeep</li>
          <li>• Notice period applies to both tenant and landlord</li>
        </ul>
      </div>
    </div>
  );
}