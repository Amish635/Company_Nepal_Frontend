'use client';
import { FiUserPlus } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const router = useRouter();

  const isFormComplete = formData.username && formData.email && formData.password;
  const canSubmit = isFormComplete && rememberMe; // Only allow submit when form is complete AND checkbox is checked

  const evaluatePasswordStrength = (password: string) => {
    if (!password) return '';
    if (password.length < 6) return 'Weak';
    if (password.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/)) return 'Strong';
    return 'Moderate';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
    if (name === 'password') {
      setPasswordStrength(evaluatePasswordStrength(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Double check before processing
    if (!canSubmit) {
      setError('Please fill in all fields and agree to the Terms and Conditions');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      if (!formData.email || !formData.password || !formData.username) {
        throw new Error('Please fill in all fields');
      }

      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      if (!rememberMe) {
        throw new Error('Please agree to the Terms and Conditions');
      }

      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Login successful:', formData);
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="auth-container">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 max-w-md mx-auto mt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Create Account</h2>
          <p className="text-gray-600 text-14px">Join thousands of professionals already using our platform</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Username */}
          <div className="relative pt-4">
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-gray-900 focus:border-indigo-600 focus:outline-none focus:ring-0 focus:shadow-none"
              placeholder=" "
              required
            />
            <label htmlFor="username" className="absolute left-0 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm">
              Username
            </label>
          </div>

          {/* Email */}
          <div className="relative pt-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-gray-900 focus:border-indigo-600 focus:outline-none focus:ring-0 focus:shadow-none"
              placeholder=" "
              required
            />
            <label htmlFor="email" className="absolute left-0 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm">
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="relative pt-4">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 pr-10 text-gray-900 focus:border-indigo-600 focus:outline-none focus:ring-0 focus:shadow-none"
              placeholder=" "
              required
            />
            <label htmlFor="password" className="absolute left-0 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-2.5 peer-focus:text-sm">
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              )}
            </button>

            {/* Password strength */}
            {passwordStrength && (
              <p className={`mt-1 text-sm font-medium ${
                passwordStrength === 'Weak' ? 'text-red-500' :
                passwordStrength === 'Moderate' ? 'text-yellow-500' :
                'text-green-500'}`}>
                Password strength: {passwordStrength}
              </p>
            )}
          </div>

          {/* Checkbox */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                disabled={!isFormComplete}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded disabled:cursor-not-allowed disabled:opacity-50"
              />
              <label htmlFor="remember-me" className={`ml-2 block text-14px ${!isFormComplete ? 'text-gray-400' : 'text-gray-700'}`}>
                I agree with the <a href="#" className={`${!isFormComplete ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:underline'}`}>Terms and Conditions</a>
              </label>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            disabled={isLoading || !canSubmit}
            className={`
              w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm text-white 
              bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 
              disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold
              ${canSubmit && !isLoading ? 'hover:-translate-y-0.5 hover:shadow-md transform' : ''}
            `}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-35" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Signing Up...
              </>
            ) : (
              <>
                <FiUserPlus className="text-lg" />
                Create Account
              </>
            )}
          </button>

          {/* Helper text */}
          {!canSubmit && (
            <p className="text-sm text-gray-500 text-center mt-2">
              {!isFormComplete ? 'Please fill in all fields to continue' : 'Please agree to the Terms and Conditions'}
            </p>
          )}
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-14px">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <button
            onClick={() => alert('Google login')}
            className="w-full flex items-center justify-center gap-3 mt-4 p-3 border rounded-lg mb-6 hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            <span className="text-gray-600">Continue with Google</span>
          </button>

          <div className="mt-6 text-center">
            <p className="text-14px text-gray-600">
              Already have an account?{' '}
              <Link href="/signin" className="font-medium text-blue-900 hover:text-blue-800">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}