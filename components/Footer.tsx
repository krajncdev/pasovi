import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import FooterWave from '@/public/wave-footer.svg';
import SmallRedLogo from '@/public/logo-small-red.svg';
import { SocialList } from './';
import { footerSocialMediaList } from '@/config/constants';

const Footer = () => {
  return (
    <footer
      className={`relative mt-auto flex  items-center justify-center h-64 md:h-96 w-full bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url(${process.env.URL}/wave-footer.svg)` }}
    >
      <div className='relative z-10 container top-10 grid grid-cols-2 justify-items-center sm:flex justify-between items-center'>
        <div className='flex flex-nowrap'>
          <p className=' text-bright_red'>@</p>
          <p className=' text-gray-500'>2023</p>
          <p className=' text-white'>PASISTERN</p>
        </div>

        <Link href={'/'}>
          <Image
            src={SmallRedLogo}
            alt='small-company-logo'
            className='h-16 w-16'
          />
        </Link>

        <SocialList
          list={footerSocialMediaList}
          className='col-span-2 mt-6 sm:mt-0'
        />
      </div>
    </footer>
  );
};

export default Footer;
