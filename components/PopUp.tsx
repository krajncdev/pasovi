'use client';

import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

import { motion } from 'framer-motion';

import { popUpVariants } from '@/config/variants';

interface PopUpI extends HTMLAttributes<HTMLDivElement> {
  children: any;
  isPopUpOpen: boolean;
  setIsPopUpOpen: Dispatch<SetStateAction<string>>;
}

const PopUp = ({
  children,
  isPopUpOpen,
  setIsPopUpOpen,
  className,
}: PopUpI) => {
  const handlePopUpCloseButtonClick = () => setIsPopUpOpen('');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isPopUpOpen ? 'open' : 'closed'}
      variants={popUpVariants}
      transition={{ bounce: 0 }}
      className={`absolute top-16 bg-white px-4 py-4 rounded-md shadow-2xl ${className}`}
    >
      <button
        className='w-full flex justify-end pb-4'
        onClick={handlePopUpCloseButtonClick}
      >
        <svg
          className='w-6 h-6 fill-none stroke-black stroke-2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='18' x2='6' y1='6' y2='18'></line>
          <line x1='6' x2='18' y1='6' y2='18'></line>
        </svg>
      </button>
      {children}
    </motion.div>
  );
};

export default PopUp;
