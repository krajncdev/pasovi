'use client';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import { store } from '@/store';

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
        <Provider store={store}>{children}</Provider>
      </SessionProvider>
    </PayPalScriptProvider>
  );
};
