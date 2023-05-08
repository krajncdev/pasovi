import Image from 'next/image';
import Link from 'next/link';

import BigLogo from '@/public/logo-big.svg';
import SmallLogo from '@/public/logo-small.svg';

import { HamburgerMenu, HeaderButtonList } from '.';
import { navigationList } from '@/config/constants';

// test

const Header = () => {
  return (
    <header className='bg-dark w-full flex justify-center items-center md:py-3'>
      <div className='container relative flex items-center'>
        <Link href='/' className='w-fit flex flex-1'>
          <Image src={SmallLogo} alt='logo' className='h-10 w-10 md:hidden' />
          <Image
            src={BigLogo}
            alt='logo'
            className='h-16 w-fit hidden md:block'
          />
        </Link>
        <ul className=' gap-4 hidden md:flex flex-1 justify-center'>
          {navigationList.map((item) => (
            <li key={item.id}>
              <Link href={item.link} className='text-xs text-white'>
                {item.content.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        <HeaderButtonList />
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
