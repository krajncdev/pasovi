'use client';

import { motion } from 'framer-motion';

interface IAnimationWrapper {
  className?: string;
  children: any;
  type:
    | 'fadeup'
    | 'fadedown'
    | 'fadeleft'
    | 'faderight'
    | 'fadedownright'
    | 'fadedownleft';
}

const AnimationWrapper = ({ children, type, className }: IAnimationWrapper) => {
  const animationVariants = {
    fadeup: { y: 20, opacity: 0 },
    fadedownright: { y: -20, x: -20, opacity: 0 },
    fadedownleft: { y: -20, x: 20, opacity: 0 },
    fadedown: { y: -20, opacity: 0 },
    fadeleft: { x: 20, opacity: 0 },
    faderight: { x: -20, opacity: 0 },
  };

  return (
    <motion.div
      initial={animationVariants[type]}
      animate={{ y: 0, x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
