import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';

const LoginModal = ({ isOpen, onClose }) => {
  const { login } = useAuth();
  const [loginType, setLoginType] = useState('user'); // 'user' or 'admin'
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    adminKey: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      try {
        // Verify admin key if trying to login as admin
        if (loginType === 'admin') {
          if (formData.adminKey !== 'naitify-dev-2025') {
            setSubmitStatus('error');
            setErrors({ submit: 'Invalid admin key' });
            return;
          }
        }

        const result = await login(formData.email, formData.password, loginType);
        
        if (result.success) {
          setSubmitStatus('success');
          setTimeout(() => {
            onClose();
          }, 1500);
        } else {
          setSubmitStatus('error');
          setErrors({ submit: result.error });
        }
      } catch (error) {
        setSubmitStatus('error');
        setErrors({ submit: 'An error occurred during login' });
      }
    } else {
      setErrors(newErrors);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md p-8 mx-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl transform transition-all">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          {loginType === 'admin' ? 'Admin Login' : 'Login'}
        </h2>

        {/* Login Type Toggle */}
        <div className="flex mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          <button
            type="button"
            className={`flex-1 py-2 rounded-md text-sm font-medium ${
              loginType === 'user'
                ? 'bg-white dark:bg-gray-600 text-blue-600 shadow'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => {
              setLoginType('user');
              setFormData({ ...formData, adminKey: '' });
            }}
          >
            User Login
          </button>
          <button
            type="button"
            className={`flex-1 py-2 rounded-md text-sm font-medium ${
              loginType === 'admin'
                ? 'bg-white dark:bg-gray-600 text-blue-600 shadow'
                : 'text-gray-500 dark:text-gray-400'
            }`}
            onClick={() => setLoginType('admin')}
          >
            Admin Login
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email field */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password field */}
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Admin Key field - only shown for admin login */}
          {loginType === 'admin' && (
            <div>
              <label 
                htmlFor="adminKey" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Admin Key
              </label>
              <input
                type="password"
                id="adminKey"
                name="adminKey"
                value={formData.adminKey}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.adminKey ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter developer admin key"
                required
              />
              {errors.adminKey && (
                <p className="mt-1 text-sm text-red-500">{errors.adminKey}</p>
              )}
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
          >
            Login
          </button>

          {/* Status messages */}
          {submitStatus === 'success' && (
            <p className="text-center text-green-500">Login successful!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-center text-red-500">Login failed. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginModal;