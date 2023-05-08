import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addBasket } from '@/store/slices/basketSlice';
import {
  IBasketProduct,
  IProduct,
  IProductColor,
  TColor,
} from '@/config/types';
import { RootState } from '@/store';

interface IIZdelekProps {
  item: IProduct;
}

const Izdelek = ({ item }: IIZdelekProps) => {
  const [productColor, setProductColor] = useState<TColor>('black');
  const visibleColors: TColor[] = [];
  const basket = useSelector((state: RootState) => state.basket);

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
    dispatch(addBasket(productToBasket));
  };

  Object.entries(item.colors).forEach((entry) => {
    const [key, value] = entry as [TColor, IProductColor];
    visibleColors.push(key);
  });

  return (
    <li className='flex flex-col justify-center items-center border border-gray-500 rounded-xl px-4 py-8'>
      <img
        loading='lazy'
        src={`${process.env.NEXT_PUBLIC_URL}/izdelki/${item.colors[productColor].imgSrc}.png`}
        alt={item.name}
        className='w-full aspect-[4/5] object-center object-cover'
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
                productColor === color && 'border-2 border-black'
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
