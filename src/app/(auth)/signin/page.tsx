'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiMail, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const isFormFilled = email.trim() !== '' && password.trim() !== '';
  const canSubmit = isFormFilled && rememberMe;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (!canSubmit) {
        throw new Error('Please complete all fields and check the box.');
      }

      if (!/\S+@\S+\.\S+/.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log({ email, password, rememberMe });
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 text-sm rounded-md">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Email */}
          <div className="relative pt-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 pr-10 text-gray-900 focus:border-blue-900 focus:outline-none focus:ring-0 focus:shadow-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-900"
            >
              Email address
            </label>
            <div className="absolute bottom-2 right-0 pr-2 pointer-events-none">
              <FiMail className="text-gray-400 text-lg" />
            </div>
          </div>

          {/* Password */}
          <div className="relative pt-4">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 pr-10 text-gray-900 focus:border-blue-900 focus:outline-none focus:ring-0 focus:shadow-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="absolute left-0 top-2.5 text-sm text-gray-500 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-900"
            >
              Password
            </label>

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 focus:outline-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                disabled={!isFormFilled}
                className="mr-2 h-4 w-4 text-blue-900 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
              />
              Remember me
            </label>
            <Link href="/forgot_password" className="text-blue-900 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!canSubmit}
            className={`w-full font-semibold py-3 rounded-lg transition 
              ${canSubmit
                ? 'bg-blue-900 text-white hover:bg-blue-800'
                : 'bg-blue-900 text-white opacity-60 cursor-not-allowed'}
            `}
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">or continue with</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          onClick={() => alert('Google login')}
          className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl" />
          <span className="text-gray-700 text-sm">Continue with Google</span>
        </button>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/create_account" className="text-blue-900 hover:underline font-medium">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
