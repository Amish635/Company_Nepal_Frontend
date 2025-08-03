'use client';

import React from 'react';
import { FiMail, FiCheckCircle, FiRefreshCcw, FiArrowLeft, FiInfo } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function VerifyEmailPage() {
  const router = useRouter();
  const userEmail = 'user@example.com'; // Replace this dynamically if needed

  const handleResend = () => {
    alert('Verification email resent!');
  };

  const handleBackToSignIn = () => {
    router.push('/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        
        {/* Mail Icon */}
        <FiMail className="text-blue-800 text-5xl mx-auto mb-4" />

        <h2 className="text-3xl font-bold text-blue-900 mb-2">Check your mail</h2>
        <p className="text-gray-600 mb-6 text-sm">
          We’ve sent a verification link to your email address.
        </p>

        {/* Email Box with Check Icon */}
        <div className="flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-6">
          <FiCheckCircle className="text-green-600 text-lg" />
          <span className="text-blue-900 font-medium text-sm">user@example.com</span>
        </div>

        {/* What’s Next */}
        <div className="text-left mb-6">
          <h3 className="text-sm font-semibold text-blue-800 mb-2">What’s next?</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            <li>Open your email inbox associated with this address.</li>
            <li>Click the verification link to confirm your email.</li>
            <li>Once verified, you’ll be redirected to your dashboard.</li>
          </ul>
        </div>

        {/* Resend Button */}
        <button
          onClick={handleResend}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 transition mb-4"
        >
          <FiRefreshCcw className="text-lg" />
          Resend Verification Email
        </button>

        {/* Back to Sign In */}
        <button
          onClick={handleBackToSignIn}
          className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition mb-4"
        >
          <FiArrowLeft className="text-lg" />
          Back to Sign In
        </button>

        {/* Help Text */}
        <div className="text-xs text-gray-500 flex items-start gap-2">
          <FiInfo className="mt-0.5 text-gray-400" />
          <p>
            Didn’t receive the mail?{' '}
            <span className="text-blue-800 font-medium underline cursor-pointer" onClick={handleResend}>
              Check your spam folder
            </span>{' '}
            or try{' '}
            <span className="text-blue-800 font-medium underline cursor-pointer" onClick={handleResend}>
              resending
            </span>.
          </p>
        </div>
      </div>
    </div>
  );
}
