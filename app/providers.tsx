'use client';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import { store } from '@/store';
import { ToastContainer } from 'react-toastify';

type Props = {
  children?: React.ReactNode;
};

const initialPayPalOptions = {
  'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '',
  currency: 'EUR',
  intent: 'capture',
};

export const Providers = ({ children }: Props) => {
  return (
    <PayPalScriptProvider options={initialPayPalOptions}>
      <SessionProvider>
        <Provider store={store}>
          <ToastContainer
            position='top-center'
            autoClose={4000}
            theme='light'
            className='md:hidden'
          />
          {children}
        </Provider>
      </SessionProvider>
    </PayPalScriptProvider>
  );
};
