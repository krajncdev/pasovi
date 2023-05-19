'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { IProduct, IUserMongo, IOrderMongo } from '@/config/types';

interface IAdminContainerProps {
  data: {
    products: IProduct[];
    users: IUserMongo[];
    orders: IOrderMongo[];
  };
}

const AdminContainer = ({
  data: { products, users, orders },
}: IAdminContainerProps) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (typeof window !== 'undefined' && session?.user?.role !== 'admin') {
    router.push('/');
  }
  console.log(products, users, orders);
  return <div>AdminContainer</div>;
};

export default AdminContainer;
