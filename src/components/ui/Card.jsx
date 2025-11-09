import React from 'react';
import { motion as Motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = true,
  onClick,
  ...props
}) => {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white dark:bg-dark-light shadow-md',
    outlined: 'border border-gray-200 dark:border-gray-700',
    elevated: 'bg-white dark:bg-dark-light shadow-lg',
    glass: 'backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 shadow-[0_0_10px_rgba(127,90,240,0.3)] hover:shadow-[0_0_20px_rgba(127,90,240,0.6)] hover:scale-105',
    gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary-light/10 dark:to-secondary-light/10'
  };

  const hoverClasses = hoverEffect 
    ? 'hover:shadow-xl hover:transform hover:-translate-y-1' 
    : '';

  return (
  <Motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      onClick={onClick}
      whileHover={hoverEffect ? { y: -5 } : {}}
      {...props}
    >
      {children}
  </Motion.div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-4 border-b border-gray-100 dark:border-gray-800 ${className}`} {...props}>
    {children}
  </div>
);

export const CardBody = ({ children, className = '', ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`p-4 border-t border-gray-100 dark:border-gray-800 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;