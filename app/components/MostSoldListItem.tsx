'use client';

import ImageComponent from '@/components/ImageComponent';
import { IAllProduct } from '@/config/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface IMostSoldListItemProps {
  product: IAllProduct;
  i: number;
}

const MostSoldListItem = ({ product, i }: IMostSoldListItemProps) => {
  return (
    <motion.li
      initial={{ y: '50%', opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <Link href='/izdelki' className='flex flex-col items-center'>
        <ImageComponent
          src={`${process.env.NEXT_PUBLIC_URL}/izdelki/${product.imgSrc}.png`}
          alt={product.name}
          blurhash={product.blurhash}
          className={`w-3/5 sm:w-4/5 aspect-square object-cover blob${i + 1}`}
        />
        <p className=' font-bold'>
          {product.name} - {product.color}
        </p>
      </Link>
    </motion.li>
  );
};

export default MostSoldListItem;
