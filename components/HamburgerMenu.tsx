'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { hamburgerVariants } from '@/config/variants';
import BigLogo from '@/public/logo-big-red.svg';
import { navigationList, socialMediaList } from '@/config/constants';
import { SocialList } from './';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenButtonClick = () => setIsOpen(true);
  const handleCloseButtonClick = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpenButtonClick} className='md:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7 stroke-white stroke-2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='4' x2='20' y1='12' y2='12'></line>
          <line x1='4' x2='20' y1='6' y2='6'></line>
          <line x1='4' x2='20' y1='18' y2='18'></line>
        </svg>
      </button>

      <motion.div
        className='h-[100dvh] w-full md:hidden fixed flex flex-col bg-white justify-between right-0 top-0 max-w-[450px] p-4 z-[9999]'
        animate={isOpen ? 'open' : 'closed'}
        variants={hamburgerVariants}
        initial={{ x: '100%' }}
        transition={{ bounce: 0 }}
      >
        <div className='flex justify-between'>
          <Link href='/' className='flex w-fit'>
            <Image src={BigLogo} alt='logo' className='h-14 w-fit' />
          </Link>
          <button onClick={handleCloseButtonClick}>
            <svg
              className='h-6 w-6 stroke-bright_red stroke-2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='18' x2='6' y1='6' y2='18'></line>
              <line x1='6' x2='18' y1='6' y2='18'></line>
            </svg>
          </button>
        </div>

        <ul className='flex flex-col gap-12'>
          {navigationList.map((item) => (
            <li key={item.id} className='w-full flex justify-center'>
              <Link href={item.link} className='text-2xl text-dark'>
                {item.content}
              </Link>
            </li>
          ))}
        </ul>

        <SocialList list={socialMediaList} />
      </motion.div>
    </>
  );
};

export default HamburgerMenu;
