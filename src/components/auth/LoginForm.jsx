import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/AuthContext';

const LoginForm = ({ onSuccess }) => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    loginType: 'user',
    adminKey: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Frontend validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.loginType === 'admin' && !formData.adminKey) {
      newErrors.adminKey = 'Admin key is required for admin login';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const result = await login(formData.email, formData.password, formData.loginType, formData.adminKey);

      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: formData.loginType === 'admin' ? 'Welcome back, Admin!' : 'Welcome back to Naitify AI Tech',
          timer: 2000,
          showConfirmButton: false
        });

        if (onSuccess) onSuccess();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: result.error || 'Login failed. Please try again.',
          confirmButtonColor: '#3B82F6'
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Server Error',
        text: 'Unable to connect to server. Please try again later.',
        confirmButtonColor: '#3B82F6'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Login Type Toggle */}
      <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            formData.loginType === 'user'
              ? 'bg-white dark:bg-gray-600 text-blue-600 shadow'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => setFormData(prev => ({ ...prev, loginType: 'user' }))}
        >
          User Login
        </button>
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            formData.loginType === 'admin'
              ? 'bg-white dark:bg-gray-600 text-blue-600 shadow'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => setFormData(prev => ({ ...prev, loginType: 'admin' }))}
        >
          Admin Login
        </button>
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your email"
          required
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 ${
            errors.password ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter your password"
          required
        />
        {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
      </div>

      {/* Admin Key Field */}
      {formData.loginType === 'admin' && (
        <div>
          <label className="block text-sm font-medium mb-1">Admin Key</label>
          <input
            type="password"
            name="adminKey"
            value={formData.adminKey || ''}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 ${
              errors.adminKey ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter admin key"
            required={formData.loginType === 'admin'}
          />
          {errors.adminKey && <p className="text-sm text-red-500 mt-1">{errors.adminKey}</p>}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
