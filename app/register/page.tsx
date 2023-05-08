import React from 'react';

import Link from 'next/link';

import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <main className='w-full min-h-screen bg-dark flex justify-center items-center'>
      <div className='border border-white rounded-xl p-6'>
        <Link
          href='/login'
          className='text-bright_red flex gap-2 w-fit items-center text-sm'
        >
          <svg
            className='h-6 w-6 stroke-bright_red stroke-2 fill-none'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <line x1='19' x2='5' y1='12' y2='12'></line>
            <polyline points='12 19 5 12 12 5'></polyline>
          </svg>
        </Link>

        <RegisterForm />
      </div>
    </main>
  );
};

export default Register;
