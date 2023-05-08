'use client';

import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { IProduct } from '@/config/types';
import Izdelek from './Izdelek';

interface IIzdelkiListProps {
  products: IProduct[];
}

const IzdelkiList = ({ products }: IIzdelkiListProps) => {
  const searchQuery = useSelector((state: RootState) => state.search.query);

  const visibleProducts = products?.filter((item) =>
    item.name
      .toLowerCase()
      .split(' ')
      .join('')
      .startsWith(searchQuery.toLowerCase().split(' ').join(''))
  );

  return (
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-20'>
      {visibleProducts?.map((item) => (
        <Izdelek item={item} key={item._id} />
      ))}
    </ul>
  );
};

export default IzdelkiList;
