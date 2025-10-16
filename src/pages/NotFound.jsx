import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <AnimatedSection className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4" direction="fade">
      <div className="max-w-2xl mx-auto">
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-primary/10 dark:text-primary-light/10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
          </div>
        </div>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            as={Link} 
            to="/" 
            variant="primary"
            size="lg"
          >
            Back to Home
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
          
          <Button 
            as={Link} 
            to="/contact" 
            variant="outline"
            size="lg"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default NotFound;