import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Rocket Icon with Animation */}
        <div className="mb-12 animate-bounce">
          <span className="text-8xl md:text-9xl filter drop-shadow-2xl">🚀</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
          Blog Content
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
            Coming Soon!
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          We're crafting amazing insights and stories just for you.
          <span className="block mt-2 text-lg text-yellow-300 font-medium">
            Stay tuned for incredible updates.
          </span>
        </p>

        {/* Status Badge */}
        <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 shadow-2xl">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
          <span className="text-white font-semibold text-lg">In Development</span>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full animation-delay-1000"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
