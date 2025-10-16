// API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// Generic API call function
export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API call failed');
    }

    return data;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

// Specific API functions
export const authAPI = {
  login: (credentials) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  register: (userData) => apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  me: () => apiCall('/auth/me'),
  adminLogin: (credentials) => apiCall('/auth/admin-login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
};

export const contactAPI = {
  submit: (formData) => apiCall('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  }),
  enhancedSubmit: (formData) => apiCall('/contact/enhanced', {
    method: 'POST',
    body: JSON.stringify(formData),
  }),
};

export const dashboardAPI = {
  getProjects: () => apiCall('/dashboard/projects'),
  getChat: () => apiCall('/dashboard/chat'),
  sendChatMessage: (message) => apiCall('/dashboard/chat', {
    method: 'POST',
    body: JSON.stringify({ message }),
  }),
  getSuggestions: () => apiCall('/dashboard/suggestions'),
  downloadInvoice: (projectId) => fetch(`${API_BASE_URL}/dashboard/invoice/${projectId}`, {
    headers: getAuthHeaders(),
  }),
};

export const productsAPI = {
  getAll: () => apiCall('/products'),
  getById: (id) => apiCall(`/products/${id}`),
};

export const profileAPI = {
  get: () => apiCall('/profile'),
  update: (profileData) => apiCall('/profile', {
    method: 'PUT',
    body: JSON.stringify(profileData),
  }),
  getSettings: () => apiCall('/profile/settings'),
  updateSettings: (settings) => apiCall('/profile/settings', {
    method: 'PUT',
    body: JSON.stringify(settings),
  }),
  updatePassword: (passwordData) => apiCall('/profile/password', {
    method: 'PUT',
    body: JSON.stringify(passwordData),
  }),
  uploadPicture: (formData) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_BASE_URL}/profile/picture`, {
      method: 'POST',
      headers: token ? { 'Authorization': `Bearer ${token}` } : {},
      body: formData,
    }).then(res => res.json());
  },
};

export const adminAPI = {
  getUsers: () => apiCall('/users'),
  getContacts: () => apiCall('/contact'),
  updateContactStatus: (contactId, status) => apiCall(`/contact/${contactId}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status }),
  }),
};
