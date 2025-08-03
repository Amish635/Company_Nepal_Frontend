'use client';

import React, { useState } from 'react';
import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const isEmailValid = /\S+@\S+\.\S+/.test(email.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailValid) return;

    alert(`Reset link sent to ${email}`);
    router.push('/reset_password');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        
        {/* Back to Sign In */}
        <div className="mb-6">
          <Link
            href="/signin"
            className="flex items-center text-blue-800 hover:text-blue-700 text-sm font-medium"
          >
            <FiArrowLeft className="mr-2" />
            Back to Sign In
          </Link>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Reset Password</h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative pt-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-gray-900 focus:border-blue-900 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-900"
            >
              Email address
            </label>
          </div>

          {/* Send Reset Link Button */}
          <button
            type="submit"
            disabled={!isEmailValid}
            className={`w-full flex justify-center items-center gap-2 py-3 px-4 rounded-lg font-medium transition
              ${isEmailValid
                ? 'bg-blue-900 text-white hover:bg-blue-800'
                : 'bg-blue-900 text-white opacity-60 cursor-not-allowed'}
            `}
          >
            <FiMail className="text-lg" />
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
