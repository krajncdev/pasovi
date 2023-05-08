import React from 'react';

import Link from 'next/link';

import Cart from './Cart';
import { Header } from '@/components';

const Kosarica = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto my-12'>
        <div className='grid grid-cols-3 '>
          <div className='w-full'>
            <Link
              href={'/izdelki'}
              className='text-bright_red flex gap-2 w-full items-center text-sm'
            >
              <svg
                className='h-4 w-4 stroke-bright_red stroke-2 fill-none'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='19' x2='5' y1='12' y2='12'></line>
                <polyline points='12 19 5 12 12 5'></polyline>
              </svg>
              <p className=' whitespace-nowrap'>Nadaljuj z nakupovanjem</p>
            </Link>
          </div>
          <h1 className='w-full text-center text-2xl'>Košarica</h1>
        </div>

        <Cart />
      </main>
    </>
  );
};

export default Kosarica;
