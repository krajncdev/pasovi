import { useDispatch } from 'react-redux';

import { removeBasket } from '@/store/slices/basketSlice';
import { IBasketProduct } from '@/config/types';
import { bgColors } from '@/config/constants';
import QuantityIncreaseDecrease from '@/components/QuantityIncreaseDecrease';

interface ICartListItemProps {
  item: IBasketProduct;
}

const CartListItem = ({ item }: ICartListItemProps) => {
  const dispatch = useDispatch();

  const handleRemoveFromCartButtonClick = (id: string) =>
    dispatch(removeBasket(id));

  return (
    <li className=' p-4 md:p-10   bg-gray-100 rounded-xl'>
      <div className='flex gap-2 md:gap-4 md:hidden pb-4'>
        <h2 className='sm:text-lg md:text-xl font-medium'>{item.name}</h2>
        <div className='flex gap-2 items-center'>
          <div className={`${bgColors[item.color]} h-4 w-4 rounded-full`}></div>
          <p className='text-sm md:text-base hidden md:block'>{item.color}</p>
        </div>
      </div>

      <div className='w-full flex justify-between items-center'>
        <div className='flex gap-6 items-center'>
          <img
            src={`${process.env.NEXT_PUBLIC_URL}/izdelki/${item.imgSrc}.png`}
            alt={item.id + item.color}
            className='h-16 w-16 md:h-32 md:w-32 object-cover rounded-l-md flex-shrink-0'
          />
          <div className=' flex-col gap-2 md:gap-4 hidden md:flex'>
            <h2 className='sm:text-lg md:text-xl font-medium'>{item.name}</h2>
            <div className='flex gap-2 items-center'>
              <div
                className={`${bgColors[item.color]} h-4 w-4 rounded-full`}
              ></div>
              <p className='text-sm md:text-base hidden md:block'>
                {item.color}
              </p>
            </div>
          </div>
        </div>

        <div className='flex gap-6 md:gap-20 items-center justify-center w-full md:w-fit'>
          <div className='h-full w-1/2 md:w-auto flex flex-col items-end md:items-start'>
            <p className='text-sm md:text-base relative left-0.5 md:left-0'>
              Količina
            </p>
            <QuantityIncreaseDecrease item={item} />
          </div>

          <div className='flex flex-col gap-4 md:gap-12 ml-auto md:ml-0'>
            <button
              onClick={() => handleRemoveFromCartButtonClick(item.id)}
              className='flex justify-center'
            >
              <svg
                className='h-6 w-6 md:h-8 md:w-8 fill-none stroke-2 stroke-bright_red'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M3 6h18'></path>
                <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'></path>
                <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'></path>
              </svg>
            </button>

            <p className='text-sm md:text-base'>
              {(item.quantity && item.quantity * item.price)?.toFixed(2)}€
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
