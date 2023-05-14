import React from 'react';

import Link from 'next/link';

import { connectToDatabase } from '@/lib/mongoConnection';
import { IProduct, IAllProduct } from '@/config/types';
import MostSoldListItem from './MostSoldListItem';

const MostSold = async () => {
  const products = (await getData()) as IProduct[];
  const allProducts: IAllProduct[] = [];

  products.map((product) => {
    for (const color of Object.keys(product.colors)) {
      allProducts.push({
        id: product._id,
        name: product.name,
        price: product.price,
        color: color,
        sold: product.colors[color].sold,
        imgSrc: product.colors[color].imgSrc,
        quantity: product.colors[color].quantity,
        blurhash: product.blurHash,
      });
    }
  });

  const mostSoldProducts = allProducts.sort((a, b) => b.sold - a.sold);

  return (
    <section className='container mb-24 mx-auto flex flex-col items-center'>
      <h2 className='text-3xl font-semibold'>Najbolj prodajani izdelki</h2>
      <ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-24 mt-24 w-fit'>
        {mostSoldProducts.slice(0, 8).map((product, i) => (
          <MostSoldListItem product={product} i={i} key={i} />
        ))}
      </ul>
    </section>
  );
};

const getData = async () => {
  const { db } = await connectToDatabase();
  const collection = db.collection('products');
  const cursor = await collection.find();
  const products = await cursor.toArray();
  return products;
};

export default MostSold;
