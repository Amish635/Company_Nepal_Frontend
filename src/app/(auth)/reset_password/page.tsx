'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FiEye, FiEyeOff, FiLock, FiShield, FiArrowLeft } from 'react-icons/fi';

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (!password || !confirmPassword) {
      setError('Both fields are required.');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((res) => setTimeout(res, 1500));

      setSuccess('Password reset successful! Redirecting...');
      setTimeout(() => {
        router.push('/signin');
      }, 2500);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        
        {/* Back to Sign In */}
        <div className="mb-4">
          <Link href="/signin" className="flex items-center text-sm text-blue-800 hover:underline font-medium">
            <FiArrowLeft className="mr-2" />
            Back to Sign In
          </Link>
        </div>

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">Reset Password</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Create a strong new password for your account</p>

        {error && <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</div>}
        {success && <div className="mb-4 text-sm text-green-700 bg-green-50 p-3 rounded-md">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-blue-900 focus:outline-none focus:ring-0"
              placeholder="New password"
            />
            <label
              htmlFor="password"
              className="absolute left-0 top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-900"
            >
              
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-1"
            >
              {showPassword ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-3 px-0 text-gray-900 focus:border-blue-900 focus:outline-none focus:ring-0"
              placeholder="Confirm Password "
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-0 top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-900"
            >
              
            </label>
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-1"
            >
              {showConfirm ? <FiEyeOff className="text-gray-400" /> : <FiEye className="text-gray-400" />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Resetting...
              </>
            ) : (
              <>
                <FiLock className="text-lg" />
                Reset Password
              </>
            )}
          </button>
        </form>

        {/* Security Tips */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-blue-800 flex items-start gap-2">
          <FiShield className="text-xl mt-0.5" />
          <div>
            <p className="font-semibold">Security Tips:</p>
            <ul className="list-disc pl-4 mt-1 space-y-1">
              <li>Use a strong password with symbols, numbers, and uppercase letters.</li>
              <li>Don’t reuse old passwords.</li>
              <li>Never share your password with anyone.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
