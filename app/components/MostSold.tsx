import React from 'react';

import Link from 'next/link';

import { connectToDatabase } from '@/lib/mongoConnection';
import { IProduct, IAllProduct } from '@/config/types';

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
      });
    }
  });

  const mostSoldProducts = allProducts.sort((a, b) => b.sold - a.sold);

  return (
    <section className='container mb-24 mx-auto flex flex-col items-center'>
      <h2 className='text-3xl font-semibold'>Najbolj prodajani izdelki</h2>
      <ul className='grid sm:grid-cols-2 lg:grid-cols-4 gap-24 mt-24 w-fit'>
        {mostSoldProducts.slice(0, 8).map((product, i) => (
          <li key={i}>
            <Link href='/izdelki' className='flex flex-col items-center'>
              <img
                loading='lazy'
                src={`${process.env.NEXT_PUBLIC_URL}/izdelki/${product.imgSrc}.png`}
                alt={product.name}
                className={`w-3/5 sm:w-4/5 aspect-square object-cover blob${
                  i + 1
                }`}
              />

              <p className=' font-bold'>
                {product.name} - {product.color}
              </p>
            </Link>
          </li>
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
