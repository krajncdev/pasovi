import Link from 'next/link';

import Search from './Search';
import IzdelkiList from './IzdelkiList';
import { connectToDatabase } from '@/lib/mongoConnection';
import PageLayout from '@/components/PageLayout';
import AnimationWrapper from '@/components/AnimationWrapper';

const Izdelki = async () => {
  const products = await getData();
  return (
    <PageLayout>
      <AnimationWrapper type='fadeup'>
        <div className='container mt-12 mx-auto'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-1'>
              <Link href='/'>Domov</Link>
              <p>/</p>
              <p className='font-semibold'>Izdelki</p>
            </div>

            <Search />
          </div>
          <IzdelkiList products={products} />
        </div>
      </AnimationWrapper>
    </PageLayout>
  );
};

const getData = async () => {
  const { db } = await connectToDatabase();
  const collection = db.collection('products');
  const cursor = await collection.find();
  const products = await cursor.toArray();
  return products;
};

export default Izdelki;
