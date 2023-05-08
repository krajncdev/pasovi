'use client';

import { useDispatch } from 'react-redux';

import { bgColors } from '@/config/constants';
import { IBasketProduct } from '@/config/types';
import { removeBasket } from '@/store/slices/basketSlice';
import QuantityIncreaseDecrease from './QuantityIncreaseDecrease';

interface IBasketListItemProps {
  item: IBasketProduct;
}

const BasketListItem = ({ item }: IBasketListItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveFromCartButtonClick = (id: string) => {
    dispatch(removeBasket(id));
  };

  return (
    <li className='flex items-center justify-between gap-12'>
      <div className='flex gap-6'>
        <div className='w-12 h-12'>
          <img
            src={`${process.env.NEXT_PUBLIC_URL}/izdelki/${item.imgSrc}.png`}
            loading='lazy'
            alt={`${item.name}-${item.color}`}
            className='object-cover h-full w-full'
          />
        </div>

        <div>
          <p>{item.name}</p>
          <div className='flex gap-2'>
            <div
              className={`${bgColors[item.color]} h-4 w-4 rounded-full`}
            ></div>
            <p>{item.color}</p>
          </div>
        </div>
      </div>

      <div className='flex gap-6'>
        <QuantityIncreaseDecrease item={item} />

        <div>
          <p>{item.quantity && (item.price * item.quantity).toFixed(2)}€</p>
          <button
            className=' text-bright_red underline text-xs'
            onClick={() => handleRemoveFromCartButtonClick(item.id)}
          >
            Odstrani
          </button>
        </div>
      </div>
    </li>
  );
};

export default BasketListItem;
