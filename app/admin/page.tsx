'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (session?.user?.role !== 'admin') {
    router.push('/');
  }
  return <div>Admin page</div>;
};

export default AdminPage;
