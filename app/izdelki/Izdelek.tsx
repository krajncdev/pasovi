import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBasket } from '@/store/slices/basketSlice';
import {
  IBasketProduct,
  IProduct,
  IProductColor,
  TColor,
} from '@/config/types';
import ImageComponent from '@/components/ImageComponent';
import { toast } from 'react-toastify';

interface IIZdelekProps {
  item: IProduct;
}

const Izdelek = ({ item }: IIZdelekProps) => {
  const [productColor, setProductColor] = useState<TColor>('black');
  const visibleColors: TColor[] = [];

  const bgColors = {
    red: 'bg-[#8B0000]',
    blue: 'bg-[#203354]',
    black: 'bg-black',
    brown: 'bg-[#6A452C]',
  };

  const dispatch = useDispatch();

  const handleColorButtonClick = (color: TColor) => {
    setProductColor(color);
  };

  const handleBasketButtonClick = (productToBasket: IBasketProduct) => {
    toast.success('Izdelek dodan v košarico', {
      position: 'top-center',
      autoClose: 4000,
      draggable: false,
      theme: 'light',
      progressClassName: '!bg-bright_red',
      icon: (
        <svg
          className='w-10 h-10 fill-none stroke-bright_red stroke-2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
          <polyline points='22 4 12 14.01 9 11.01'></polyline>
        </svg>
      ),
    });
    dispatch(addBasket(productToBasket));
  };

  Object.entries(item.colors).forEach((entry) => {
    const [key] = entry as [TColor, IProductColor];
    visibleColors.push(key);
  });

  return (
    <li className='flex flex-col justify-center items-center border border-gray-500 rounded-xl px-4 py-8'>
      <ImageComponent
        src={`${process.env.NEXT_PUBLIC_URL}/izdelki/${item.colors[productColor].imgSrc}.png`}
        alt={item.name}
        className='w-full aspect-[4/5]'
        blurhash={item.blurHash}
      />

      <div className='flex justify-between w-full mt-4'>
        <p>{item.name}</p>
        <p>{item.price}€</p>
      </div>

      <ul className='flex gap-2 self-start mt-4'>
        {visibleColors.map((color: TColor, i) => (
          <li key={i}>
            <button
              onClick={() => handleColorButtonClick(color)}
              className={`rounded-full h-6 w-6  ${
                productColor === color && 'border-2 border-bright_red'
              }  ${bgColors[color]}`}
            ></button>
          </li>
        ))}
      </ul>

      <button
        className='w-full h-10 rounded-xl border border-bright_red text-bright_red mt-4'
        onClick={() =>
          handleBasketButtonClick({
            id: `${item._id}${productColor}`,
            name: item.name,
            maxQuantity: item.colors[productColor].quantity,
            price: item.price,
            color: productColor,
            imgSrc: item.colors[productColor].imgSrc,
          })
        }
      >
        V košarico
      </button>
    </li>
  );
};

export default Izdelek;
