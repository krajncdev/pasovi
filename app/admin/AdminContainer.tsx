'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { IProduct, IUserMongo, IOrderMongo } from '@/config/types';
import { useState } from 'react';

import { columns, adminButtons } from '@/config/constants';
import { DataTable } from '@/components/ui/DataTable';

interface IAdminContainerProps {
  data: {
    products: IProduct[];
    users: IUserMongo[];
    orders: IOrderMongo[];
  };
}

type TData = 'orders' | 'products' | 'users';

const AdminContainer = ({ data }: IAdminContainerProps) => {
  const router = useRouter();
  const [currentDisplayedData, setCurrentDisplayedData] =
    useState<TData>('orders');
  const { data: session, status } = useSession();

  if (typeof window !== 'undefined' && session?.user?.role !== 'admin') {
    router.push('/');
  }

  const handleButtonClick = (key: TData) => {
    setCurrentDisplayedData(key);
  };

  return (
    <>
      <ul className='flex gap-4 my-10'>
        {adminButtons.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleButtonClick(item.key as TData)}
              className={`${
                currentDisplayedData === item.key
                  ? 'border-gray-600'
                  : 'border-gray-300'
              } border rounded-md px-2 py-1.5`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
      <DataTable
        data={data[currentDisplayedData]}
        columns={columns[currentDisplayedData]}
      />
    </>
  );
};

export default AdminContainer;
