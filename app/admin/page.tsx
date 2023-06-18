import { connectToDatabase } from '@/lib/mongoConnection';
import AdminContainer from './AdminContainer';
import Link from 'next/link';

const AdminPage = async () => {
  const data = await getData();

  return (
    <main className='container mx-auto mt-12'>
      <Link
        href='/'
        className='text-gray-600 flex gap-2 w-full items-center text-sm'
      >
        <svg
          className='h-8 w-8 stroke-gray-600 stroke-2 fill-none'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='19' x2='5' y1='12' y2='12'></line>
          <polyline points='12 19 5 12 12 5'></polyline>
        </svg>
        <p className=' whitespace-nowrap text-lg'>Domov</p>
      </Link>
      <AdminContainer data={data} />
    </main>
  );
};

const getData = async () => {
  const { db } = await connectToDatabase();
  const productsCollection = db.collection('products');
  const usersCollection = db.collection('users');
  const ordersCollection = db.collection('orders');

  const productsCursor = await productsCollection.find();
  const usersCursor = await usersCollection.find();
  const ordersCursor = await ordersCollection.find();

  const products = await productsCursor.toArray();
  const users = await usersCursor.toArray();
  const orders = await ordersCursor.toArray();

  return {
    products,
    users,
    orders,
  };
};

export default AdminPage;
