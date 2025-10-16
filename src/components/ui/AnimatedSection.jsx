import React from 'react';
import { motion as Motion } from 'framer-motion';

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.5,
  once = true,
  ...props
}) => {
  const directionVariants = {
    up: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  };

  const selectedVariant = directionVariants[direction];

  return (
  <Motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={selectedVariant}
      transition={{ duration, delay }}
      {...props}
    >
      {children}
  </Motion.section>
  );
};

export default AnimatedSection;