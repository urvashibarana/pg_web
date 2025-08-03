'use client';

import { useState } from 'react';
import Header from '../../../components/Header';
import BasicInfo from './BasicInfo';
import PropertyDetails from './PropertyDetails';
import Amenities from './Amenities';
import Photos from './Photos';
import Pricing from './Pricing';

export default function AddListingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    basicInfo: {},
    propertyDetails: {},
    amenities: [],
    photos: [],
    pricing: {}
  });

  const steps = [
    { id: 1, title: 'Basic Info', component: BasicInfo },
    { id: 2, title: 'Property Details', component: PropertyDetails },
    { id: 3, title: 'Amenities', component: Amenities },
    { id: 4, title: 'Photos', component: Photos },
    { id: 5, title: 'Pricing', component: Pricing }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    window.location.href = '/host-dashboard';
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Listing</h1>
          <p className="text-gray-600">Create a new property listing to attract guests</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step.id}
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-px mx-4 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <CurrentStepComponent
            formData={formData}
            setFormData={setFormData}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-medium ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Back
          </button>
          
          {currentStep < steps.length ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Next
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <i className="ri-check-line mr-2"></i>
              Publish Listing
            </button>
          )}
        </div>
      </div>
    </div>
  );
}