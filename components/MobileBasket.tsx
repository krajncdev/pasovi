'use client';

import BasketIcon from '@/public/cart.svg';
import { RootState } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const MobileBasket = () => {
  const basket = useSelector((state: RootState) => state.basket);

  return (
    <>
      {basket.products.length > 0 && (
        <Link href='/kosarica' className='relative md:hidden'>
          <Image src={BasketIcon} alt='basket-icon' />
          <div className='absolute left-4 bottom-3 text-black h-4 w-4 text-xs flex items-center justify-center rounded-full bg-white'>
            {basket.products.length}
          </div>
        </Link>
      )}
    </>
  );
};

export default MobileBasket;
