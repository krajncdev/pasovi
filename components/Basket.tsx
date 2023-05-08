'use client';

import { Dispatch, SetStateAction, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeAllBasket } from '@/store/slices/basketSlice';
import { RootState } from '@/store';
import { BasketListItem, PopUp } from './';
import Link from 'next/link';

interface IBasketProps {
  isPopUpOpen: boolean;
  setIsPopUpOpen: Dispatch<SetStateAction<string>>;
}

const Basket = ({ isPopUpOpen, setIsPopUpOpen }: IBasketProps) => {
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basket);

  const handleButtonCloseClick = () => setIsPopUpOpen('');

  const handleDeleteAllButtonClick = () => {
    setIsPopUpOpen('');
    dispatch(removeAllBasket());
  };

  return (
    <PopUp
      isPopUpOpen={isPopUpOpen}
      setIsPopUpOpen={setIsPopUpOpen}
      className='hidden md:block px-8 right-12'
    >
      {basket.products.length > 0 ? (
        <>
          <div className='text-dark flex justify-between'>
            <p>Košarica</p>
            <button
              onClick={handleDeleteAllButtonClick}
              className='underline text-bright_red'
            >
              Odstrani vse
            </button>
          </div>
          <ul className='pt-4 flex flex-col gap-4'>
            {basket.products.map((item) => (
              <BasketListItem key={item.id} item={item} />
            ))}
          </ul>
          <div className='flex justify-end mt-8'>
            <Link
              href='/kosarica'
              onClick={handleButtonCloseClick}
              className='px-2 py-1.5 rounded-md bg-bright_red text-white'
            >
              Na blagajno
            </Link>
          </div>
        </>
      ) : (
        <p className='h-full w-full flex justify-center items-center px-10 pb-8'>
          Košarica je prazna!
        </p>
      )}
    </PopUp>
  );
};

export default memo(Basket);
