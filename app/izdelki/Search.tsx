'use client';

import { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import { change } from '@/store/slices/searchSlice';

interface ISearchProps {}

const Search = ({}: ISearchProps) => {
  const dispatch = useDispatch();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    dispatch(change(input));
  };

  return (
    <div className='border-gray-300  border rounded-xl flex justify-center items-center py-1 px-3'>
      <input
        type='text'
        className='w-28  sm:w-60 outline-none'
        onChange={handleInputChange}
        placeholder='Išči...'
      />
      <button className=' flex-shrink-0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 stroke-2 fill-none stroke-gray-300'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='11' cy='11' r='8'></circle>
          <line x1='21' x2='16.65' y1='21' y2='16.65'></line>
        </svg>
      </button>
    </div>
  );
};

export default Search;
