import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../utils/api';

// Create the auth context
const AuthContext = createContext(null);

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token with backend
      authAPI.me()
        .then(data => {
          if (data.success && data.data) {
            setUser(data.data);
          } else {
            localStorage.removeItem('token');
          }
        })
        .catch(() => {
          localStorage.removeItem('token');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  // Login function
  const login = async (email, password, loginType = 'user', adminKey = null) => {
    try {
      const body = loginType === 'admin'
        ? { email, password, adminKey }
        : { email, password };

      const data = loginType === 'admin' ? await authAPI.adminLogin(body) : await authAPI.login(body);

      // Store token and user data
      localStorage.setItem('token', data.token);
      setUser(loginType === 'admin' ? data.admin : data.data);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Signup function
  const signup = async (userData) => {
    try {
      const data = await authAPI.register(userData);

      // Automatically log in after successful signup
      localStorage.setItem('token', data.token);
      setUser(data.data);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // Get authentication token
  const getToken = () => localStorage.getItem('token');

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    getToken,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;