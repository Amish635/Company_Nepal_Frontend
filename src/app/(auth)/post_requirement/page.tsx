'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PostRequirement() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    quantity: '',
    budget: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone: string) => /^\+?\d{7,15}$/.test(phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic validation
    if (
      !formData.productName.trim() ||
      !formData.description.trim() ||
      !formData.quantity.trim() ||
      !formData.contactName.trim() ||
      !formData.contactEmail.trim()
    ) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!validateEmail(formData.contactEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (formData.contactPhone && !validatePhone(formData.contactPhone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      setSuccess('Your requirement has been posted successfully!');
      setFormData({
        productName: '',
        description: '',
        quantity: '',
        budget: '',
        contactName: '',
        contactEmail: '',
        contactPhone: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md">
      {/* Back button */}
      <div className="mb-4">
        <Link href="/" className="inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors">
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-6 text-blue-900">Post Your Requirement</h1>

      {error && <p className="mb-4 text-red-600">{error}</p>}
      {success && <p className="mb-4 text-green-600">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label htmlFor="productName" className="block font-medium mb-1 text-gray-700">
            Product / Service Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="Enter product or service name"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium mb-1 text-gray-700">
            Description <span className="text-red-600">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="Provide detailed description"
            required
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block font-medium mb-1 text-gray-700">
            Quantity <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="E.g., 100 units"
            required
          />
        </div>

        <div>
          <label htmlFor="budget" className="block font-medium mb-1 text-gray-700">
            Budget (optional)
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="E.g., $5000"
          />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-3">Contact Information</h2>

        <div>
          <label htmlFor="contactName" className="block font-medium mb-1 text-gray-700">
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="contactEmail" className="block font-medium mb-1 text-gray-700">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="contactPhone" className="block font-medium mb-1 text-gray-700">
            Phone Number (optional)
          </label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
            placeholder="Enter your phone number"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-blue-900 text-white font-semibold py-3 rounded hover:bg-blue-800 transition ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Posting...' : 'Post Requirement'}
        </button>
      </form>
    </div>
  );
}