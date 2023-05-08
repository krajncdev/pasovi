'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import GoogleIcon from '@/public/googleicon.svg';

const GoogleSignInButton = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const result = await signIn('google', { callbackUrl: '/' });
    if (!result?.error) {
      router.push('/');
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className='flex-1 flex gap-2 items-center justify-center border border-white rounded-md px-2 py-1.5'
    >
      <Image src={GoogleIcon} alt='google-icon' className='h-6 w-6' />
      <p className='text-white'>Prijava</p>
    </button>
  );
};

export default GoogleSignInButton;
