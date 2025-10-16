import React from 'react';
import { useAuth } from '../context/AuthContext';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import ProjectList from '../components/dashboard/ProjectList';
import ChatWidget from '../components/dashboard/ChatWidget';
import AISuggestions from '../components/dashboard/AISuggestions';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <AnimatedSection direction="up" className="mb-8">
        <Card className="p-6 md:p-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary-light/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {user?.name ? user.name[0].toUpperCase() : user?.email[0].toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Welcome back, {user?.name || 'User'}!</h1>
              <p className="text-gray-600 dark:text-gray-400">Here's what's happening with your projects</p>
            </div>
          </div>
        </Card>
      </AnimatedSection>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Projects Section - Takes up 2 columns */}
        <div className="lg:col-span-2 space-y-8">
          <AnimatedSection direction="up">
            <ProjectList />
          </AnimatedSection>

          {/* AI Suggestions Section */}
          <AnimatedSection direction="up">
            <AISuggestions />
          </AnimatedSection>
        </div>

        {/* Chat Widget - Takes up 1 column */}
        <div className="lg:col-span-1">
          <AnimatedSection direction="right">
            <ChatWidget />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;