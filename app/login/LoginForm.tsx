'use client';

import { FormEvent, useRef, useState } from 'react';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setErrorMessage('');
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(email, password);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    console.log(result);

    if (result?.error) {
      setErrorMessage(result.error);
      console.log(result);
    } else {
      console.log('successfully logged in!');
      router.push('/');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-6'>
      <input
        type='text'
        ref={emailRef}
        placeholder='E-naslov'
        className=' bg-opacity-75 bg-white rounded-md px-2 py-1.5 outline-none placeholder:text-gray-500 w-60 sm:w-auto'
      />
      <input
        type='password'
        ref={passwordRef}
        placeholder='Geslo'
        className=' bg-opacity-75 bg-white rounded-md px-2 py-1.5 outline-none placeholder:text-gray-500 w-60 sm:w-auto'
      />
      {errorMessage && (
        <span className='text-sm text-error_red'>
          {errorMessage === 'CredentialsSignin'
            ? 'Geslo ni pravilno!'
            : 'E-naslov ne obstaja'}
        </span>
      )}
      <div className='w-full flex justify-end mt-2'>
        <button
          type='submit'
          className='justify-self-end text-bright_red rounded-md border border-bright_red px-2 py-1 font-medium'
        >
          Prijava
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
