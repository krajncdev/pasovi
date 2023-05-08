import { Dispatch, SetStateAction, memo } from 'react';

import { useSession, signOut } from 'next-auth/react';

import PopUp from './PopUp';
import UnknownProfileImage from '@/public/unknown-user.png';
import Image from 'next/image';

interface IAccountProps {
  isPopUpOpen: boolean;
  setIsPopUpOpen: Dispatch<SetStateAction<string>>;
}

const Account = ({ isPopUpOpen, setIsPopUpOpen }: IAccountProps) => {
  const session = useSession();
  const handleLogoutButtonClick = () => signOut();

  return (
    <PopUp
      isPopUpOpen={isPopUpOpen}
      setIsPopUpOpen={setIsPopUpOpen}
      className='hidden md:block px-8 top-16 right-20'
    >
      <div className='flex gap-4 items-center'>
        {session.data?.user?.image ? (
          <img
            src={session.data.user.image}
            alt='profile-picture'
            className='w-10 h-10'
          />
        ) : (
          <Image
            src={UnknownProfileImage}
            alt='unknown-user'
            className='w-10 h-10'
          />
        )}
        <div>
          <p className='font-medium'>{session.data?.user?.name}</p>

          <p className='text-sm opacity-75'>{session.data?.user?.email}</p>
        </div>
      </div>
      <div className='w-full justify-end flex mt-4'>
        <button
          className='text-bright_red text-sm underline'
          onClick={handleLogoutButtonClick}
        >
          Izpis
        </button>
      </div>
    </PopUp>
  );
};

export default memo(Account);
