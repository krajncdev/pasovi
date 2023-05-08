import Link from 'next/link';
import GoogleSignInButton from './GoogleSignInButton';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <main className='w-full min-h-screen bg-dark flex justify-center items-center'>
      <div className='border border-white rounded-xl p-6'>
        <Link
          href='/'
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

        <LoginForm />

        <div className='flex gap-2 items-center mt-6'>
          <div className='h-px w-full bg-gray-200'></div>
          <div className=' text-gray-200'>Ali</div>
          <div className='h-px w-full bg-gray-200'></div>
        </div>

        <div className='flex gap-2 mt-2'>
          <Link
            href='/register'
            className='text-bright_red border rounded-md border-bright_red px-2 py-1 font-medium flex-1 text-center'
          >
            Registracija
          </Link>
          <GoogleSignInButton />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
