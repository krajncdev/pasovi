'use client';
import { motion } from 'framer-motion';

const HomeLoading = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className='w-full h-screen bg-dark flex justify-center items-center'
    >
      <div
        className='animate-spin inline-block h-12 w-12 md:w-16 md:h-16 border-[3px] md:border-[5px] border-current border-t-transparent text-bright_red rounded-full'
        role='status'
        aria-label='loading'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </motion.div>
  );
};

export default HomeLoading;
