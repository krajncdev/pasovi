'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

import { RootState } from '@/store';
import CartListItem from './CartListItem';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { removeAllBasket } from '@/store/slices/basketSlice';

const Cart = () => {
  const basket = useSelector((state: RootState) => state.basket);
  const router = useRouter();
  const dispatch = useDispatch();
  const totalValue = useMemo(() => {
    return basket.products.reduce((acc, item) => {
      return (
        acc + (item.quantity && item.price ? item.quantity * item.price : 0)
      );
    }, 0);
  }, [basket.products]);

  if (typeof window !== 'undefined') {
    basket.products.length === 0 && router.push('/izdelki');
  }

  return (
    <div>
      <ul className='w-full mt-12 flex flex-col gap-6'>
        {basket?.products?.map((item) => (
          <CartListItem key={item.id} item={item} />
        ))}
      </ul>

      <div className='w-full flex justify-end mt-12'>
        <div className='flex gap-6'>
          <p>Vmesni znesek</p>
          <p>{totalValue.toFixed(2)}€</p>
        </div>
      </div>

      <div className='flex w-full justify-end mt-4'>
        <PayPalButtons
          className='w-full sm:w-80'
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: basket.products.map((item, index) => {
                if (item.quantity) {
                  const totalPrice = item.quantity * item.price;
                  return {
                    reference_id: `unit_${index}`,
                    amount: {
                      value: totalPrice.toFixed(2) || '1.99',
                    },
                  };
                }
              }) as any,
            });
          }}
          onApprove={(data, actions) => {
            return actions?.order?.capture().then((details) => {
              const name = details.payer.name?.given_name;
              const email = details.payer.email_address;
              const item = {
                orderID: data.orderID,
                buyerName: name,
                buyerEmail: email,
                purchasedItems: basket.products,
                date: new Date(),
              };

              fetch(`${process.env.NEXT_PUBLIC_URL}/api/completed_checkout`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
              });
              dispatch(removeAllBasket());
              router.push('/');
            }) as any;
          }}
        />
      </div>
    </div>
  );
};

export default Cart;
