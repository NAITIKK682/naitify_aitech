import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { profileAPI } from '../utils/api';

const Profile = () => {
  const { user, loading, getToken } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    socialLinks: {
      linkedin: '',
      github: '',
      twitter: ''
    }
  });
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      marketing: false
    },
    theme: 'system',
    language: 'en'
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        bio: user.bio || '',
        socialLinks: user.socialLinks || {
          linkedin: '',
          github: '',
          twitter: ''
        }
      });
      
      // Fetch user settings
      fetchSettings();
    }
  }, [user]);

  const fetchSettings = async () => {
    try {
      const data = await profileAPI.getSettings();
      setSettings(data);
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const handleProfilePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profilePicture', file);

    try {
      const data = await profileAPI.uploadPicture(formData);
      if (data.success) {
        setSuccess('Profile picture updated successfully');
        // Update user context or refetch user data
      }
    } catch (error) {
      setError('Error uploading profile picture');
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await profileAPI.update(profileData);
      setSuccess('Profile updated successfully');
      setIsEditing(false);
    } catch (error) {
      setError('Error updating profile');
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await profileAPI.updatePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });
      setSuccess('Password updated successfully');
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      setError('Error updating password');
    }
  };

  const handleSettingsUpdate = async () => {
    try {
      await profileAPI.updateSettings(settings);
      setSuccess('Settings updated successfully');
    } catch (error) {
      setError('Error updating settings');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Please log in to view your profile</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection direction="up">
        <Card className="max-w-2xl mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Profile</h1>
          
          <div className="space-y-8">
            {/* Profile Header */}
            <div className="text-center relative">
              <div className="inline-block">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    {user.profilePicture ? (
                      <img 
                        src={`http://localhost:5000${user.profilePicture}`}
                        alt={user.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-primary">
                        {user.name ? user.name[0].toUpperCase() : user.email[0].toUpperCase()}
                      </span>
                    )}
                  </div>
                  <button 
                    className="absolute bottom-4 right-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors duration-200"
                    onClick={() => document.getElementById('profile-photo').click()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                  <input 
                    type="file" 
                    id="profile-photo" 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleProfilePhotoUpload}
                  />
                </div>
                
                {isEditing ? (
                  <form onSubmit={handleProfileUpdate} className="mt-4 space-y-4">
                    <div>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <textarea
                        value={profileData.bio}
                        onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                        placeholder="Bio"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="space-x-4">
                      <Button type="submit">Save</Button>
                      <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold">{user.name || 'User'}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                    {user.phone && <p className="text-gray-600 dark:text-gray-400">{user.phone}</p>}
                    {user.bio && <p className="mt-2 text-gray-600 dark:text-gray-400">{user.bio}</p>}
                    <div className="mt-4 space-x-4">
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(true)}
                      >
                        Edit Profile
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveTab('security')}
                      >
                        Change Password
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            
            {success && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                {success}
              </div>
            )}

            {/* Settings Tabs */}
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
              {['profile', 'security', 'notifications', 'settings'].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-2 font-medium capitalize ${
                    activeTab === tab
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Security Tab Content */}
            {activeTab === 'security' && (
              <div className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                  <form onSubmit={handlePasswordChange} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Current Password</label>
                      <input
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">New Password</label>
                      <input
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                      <input
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <Button type="submit">Update Password</Button>
                  </form>
                </Card>
              </div>
            )}

            {/* Notifications Tab Content */}
            {activeTab === 'notifications' && (
              <div className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    {Object.entries(settings.notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) => {
                              setSettings({
                                ...settings,
                                notifications: {
                                  ...settings.notifications,
                                  [key]: e.target.checked
                                }
                              });
                            }}
                            className="rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <span className="ml-2 capitalize">{key} Notifications</span>
                        </label>
                      </div>
                    ))}
                    <Button onClick={handleSettingsUpdate}>Save Preferences</Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Settings Tab Content */}
            {activeTab === 'settings' && (
              <div className="mt-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Theme</label>
                      <select
                        value={settings.theme}
                        onChange={(e) => setSettings({...settings, theme: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Language</label>
                      <select
                        value={settings.language}
                        onChange={(e) => setSettings({...settings, language: e.target.value})}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                      >
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                      </select>
                    </div>
                    <Button onClick={handleSettingsUpdate}>Save Settings</Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Account Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Account Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Full Name</label>
                    <p className="mt-1 text-lg">{user.name || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Email Address</label>
                    <p className="mt-1 text-lg">{user.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400">Member Since</label>
                    <p className="mt-1 text-lg">{new Date(user.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</p>
                  </div>
                </div>
              </Card>

              {/* Account Stats */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  Account Activity
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="text-3xl font-bold text-primary mb-1">0</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="text-3xl font-bold text-primary mb-1">0</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Active Services</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <div className="text-3xl font-bold text-primary mb-1">0</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Support Tickets</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="text-center text-gray-600 dark:text-gray-400 py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <p>No recent activity</p>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default Profile;