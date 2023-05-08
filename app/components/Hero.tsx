import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import AcordionBoy from '@/public/accordion-boy.png';

const Hero = () => {
  return (
    <section className=' bg-dark md:py-12 justify-center flex'>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-x-2 lg:gap-x-0'>
        <div className='flex justify-center order-2 md:order-1 mt-12 pb-4 md:pb-0 md:mt-0'>
          <div className='text-white lg:w-2/3 flex flex-col justify-center'>
            <h1 className='text-3xl sm:text-5xl lg:text-7xl font-semibold'>
              Izdelava pasov
            </h1>
            <p className='md:mt-12 mt-6 font-medium'>
              Vsaka harmonika rabi dobre pase, drugače ne gre
            </p>
            <p className='text-xs mt-2 opacity-70'>
              Naše pase izdelujemo že več kot 30 let. S tem imamo že kar nekaj
              izkušenj. Lahko nam zaupate, da so vsi pasi kvalitetni.
            </p>
            <div className='mt-12'>
              <Link
                href='/izdelki'
                className='px-6 py-3 bg-bright_red rounded-md '
              >
                PONUDBA
              </Link>
            </div>
          </div>
        </div>

        <div className='flex justify-center order-1 md:order-2'>
          <Image
            src={AcordionBoy}
            alt='accordion-boy'
            className='w-4/5 sm:w-2/3 lg:w-2/3'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
