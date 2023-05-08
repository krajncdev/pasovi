import { IBasketProduct } from '@/config/types';
import { decreaseBasket, increaseBasket } from '@/store/slices/basketSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

interface IQuantityIncreaseDecreaseProps {
  item: IBasketProduct;
}

const QuantityIncreaseDecrease = ({ item }: IQuantityIncreaseDecreaseProps) => {
  const dispatch = useDispatch();

  const handleIncrementButtonClick = (id: string) => {
    dispatch(increaseBasket(id));
  };
  const handleDecrementButtonClick = (id: string) => {
    dispatch(decreaseBasket(id));
  };

  return (
    <div className='flex gap-2 items-center justify-center'>
      <button onClick={() => handleDecrementButtonClick(item.id)}>
        <svg
          className='h-4 w-4 stroke-2 fill-none stroke-dark'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='5' x2='19' y1='12' y2='12'></line>
        </svg>
      </button>
      <p>{item.quantity}</p>
      <button onClick={() => handleIncrementButtonClick(item.id)}>
        <svg
          className='h-4 w-4 stroke-2 fill-none stroke-dark'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='12' x2='12' y1='5' y2='19'></line>
          <line x1='5' x2='19' y1='12' y2='12'></line>
        </svg>
      </button>
    </div>
  );
};

export default QuantityIncreaseDecrease;
