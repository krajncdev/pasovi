'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

import { headerButtonList } from '@/config/constants';
import Basket from './Basket';
import { RootState } from '@/store';
import { Account } from './';

const HeaderButtonList = () => {
  const session = useSession();
  const pathname = usePathname();
  const basket = useSelector((state: RootState) => state.basket);
  const [popUpNameOpen, setPopUpNameOpen] = useState('');

  const handleButtonClick = (name: string) => {
    if (name === 'cart' && pathname !== '/kosarica') {
      setPopUpNameOpen((prev) => (prev === 'basket' ? '' : 'basket'));
    }
    if (name === 'user') {
      setPopUpNameOpen((prev) => (prev === 'user' ? '' : 'user'));
    }
  };

  return (
    <>
      <ul className='md:flex hidden gap-4 flex-1 justify-end'>
        {headerButtonList.map((item) => {
          if (session.status === 'loading' && item.name === 'user-add') {
            return null;
          }
          if (session.status === 'loading' && item.name === 'user') {
            return (
              <div
                key='loading-key'
                className='h-4 w-4 rounded-full animate-pulse bg-gray-200'
              ></div>
            );
          }
          if (session.status === 'authenticated' && item.name === 'user-add') {
            return null;
          }
          if (session.status === 'unauthenticated' && item.name === 'user') {
            return null;
          }
          return (
            <li key={item.id} className='flex justify-center items-center'>
              {item.name === 'user-add' ? (
                <Link href={'/login'}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className='h-4 w-4'
                    priority
                  />
                </Link>
              ) : (
                <button
                  onClick={() => handleButtonClick(item.name)}
                  className='relative'
                >
                  <Image src={item.src} alt={item.alt} className='h-4 w-4' />
                  {item.name === 'cart' &&
                    basket.products.length > 0 &&
                    popUpNameOpen !== 'basket' && (
                      <div className='absolute left-4 bottom-3 text-black h-4 w-4 text-xs rounded-full bg-white'>
                        {basket.products.length}
                      </div>
                    )}
                </button>
              )}
            </li>
          );
        })}
        {session.data?.user?.role === 'admin' && (
          <Link href='/admin'>
            <svg
              className='h-4 w-4 fill-none stroke-white stroke-2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <rect width='18' height='11' x='3' y='11' rx='2' ry='2'></rect>
              <path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
            </svg>
          </Link>
        )}
      </ul>
      <Basket
        isPopUpOpen={popUpNameOpen === 'basket'}
        setIsPopUpOpen={setPopUpNameOpen}
      />
      <Account
        isPopUpOpen={popUpNameOpen === 'user'}
        setIsPopUpOpen={setPopUpNameOpen}
      />
    </>
  );
};

export default HeaderButtonList;
