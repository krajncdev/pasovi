'use client';

import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { useRouter } from 'next/navigation';
import { z, ZodType } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface IFormError {
  message: string;
  type: string;
}

const Form = () => {
  const [formError, setFormError] = useState<IFormError>({
    message: '',
    type: '',
  });
  const router = useRouter();

  const schema: ZodType<IRegisterForm> = z
    .object({
      name: z
        .string()
        .min(2, { message: 'Ime mora vsebovati vsaj 2 črki' })
        .max(30, { message: 'Ime ne sme vsebovati več kot 30 črk' }),
      email: z
        .string()
        .email({ message: 'V polju mora biti veljaven e-naslov' }),
      password: z
        .string()
        .min(5, { message: 'Geslo mora vsebovati vsaj 5 znakov' })
        .max(20, { message: 'Geslo ne sme vsebovati več kot 20 znakov' }),
      confirmPassword: z
        .string()
        .min(5, { message: 'Geslo mora vsebovati vsaj 5 znakov' })
        .max(20, { message: 'Geslo ne sme vsebovati več kot 20 znakov' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Gesli se ne ujemata',
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submitData = async (data: FieldValues) => {
    const user = {
      email: data.email as string,
      password: data.password as string,
      name: data.name as string,
    };
    console.log(user);

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/send_users`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    );
    const response = (await result.json()) as IFormError;

    setFormError(response);

    if (response.type === 'success') {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className='flex flex-col gap-4 mt-6'
    >
      <input
        type='text'
        placeholder='Ime in priimek'
        {...register('name')}
        className=' bg-opacity-75 bg-white rounded-md px-2 py-1.5 outline-none placeholder:text-gray-500 w-60 sm:w-auto'
      />
      {errors.name && (
        <span className='text-error_red text-sm'>
          {errors.name.message as any}
        </span>
      )}
      <input
        type='email'
        placeholder='Email'
        {...register('email')}
        className=' bg-opacity-75 bg-white rounded-md px-2 py-1.5 outline-none placeholder:text-gray-500 w-60 sm:w-auto'
      />
      {errors.email && (
        <span className='text-error_red text-sm'>
          {errors.email.message as any}
        </span>
      )}
      <input
        type='password'
        placeholder='Geslo'
        {...register('password')}
        className=' bg-opacity-75 bg-white rounded-md px-2 py-1.5 outline-none placeholder:text-gray-500 w-60 sm:w-auto'
      />
      {errors.password && (
        <span className='text-error_red text-sm'>
          {errors.password.message as any}
        </span>
      )}
      <input
        type='password'
        placeholder='Ponovite geslo'
        {...register('confirmPassword')}
        className=' bg-opacity-75 bg-white rounded-md px-2 py-1.5 outline-none placeholder:text-gray-500 w-60 sm:w-auto'
      />
      {errors.confirmPassword && (
        <span className='text-error_red text-sm'>
          {errors.confirmPassword.message as any}
        </span>
      )}
      {formError.message && (
        <span className='text-error_red text-sm'>{formError.message}</span>
      )}
      <div className='w-full justify-end flex mt-6'>
        <button
          type='submit'
          className='text-bright_red rounded-md border border-bright_red px-2 py-1 font-medium w-fit'
        >
          Registracija
        </button>
      </div>
    </form>
  );
};

export default Form;
