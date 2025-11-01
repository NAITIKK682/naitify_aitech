import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechVision Inc.',
    content: 'NaitifyAi transformed our business operations with their cutting-edge AI solutions. The implementation was seamless and the results were immediate.',
    avatar: '👩‍💼'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Director of Innovation, FutureCorp',
    content: 'The machine learning models developed by NaitifyAi have increased our prediction accuracy by 78%. Their team\'s expertise is unmatched in the industry.',
    avatar: '👨‍💻'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Head of Data Science, DataDrive',
    content: 'Working with NaitifyAi was a game-changer for our data analytics capabilities. Their solutions are innovative, scalable, and incredibly effective.',
    avatar: '👩‍🔬'
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-12">
      <div className="absolute top-10 left-0 w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary-light/5 dark:to-secondary-light/5 rounded-2xl -z-10"></div>
      
      <div className="relative overflow-hidden h-64">
        <AnimatePresence initial={false} custom={direction}>
          <Motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute w-full h-full flex flex-col items-center justify-center text-center px-8"
          >
            <div className="text-5xl mb-4">{testimonials[currentIndex].avatar}</div>
            <p className="text-lg italic mb-6 text-gray-700 dark:text-gray-300">"{testimonials[currentIndex].content}"</p>
            <h3 className="font-bold text-primary dark:text-primary-light">{testimonials[currentIndex].name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
          </Motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary dark:bg-primary-light scale-125' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevTestimonial}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-dark-light shadow-lg flex items-center justify-center text-primary dark:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Previous testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextTestimonial}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-dark-light shadow-lg flex items-center justify-center text-primary dark:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Next testimonial"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialSlider;