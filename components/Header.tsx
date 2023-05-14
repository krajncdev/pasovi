import Image from 'next/image';
import Link from 'next/link';

import SmallLogo from '@/public/logo-small.svg';

import { HamburgerMenu, HeaderButtonList } from '.';
import { navigationList } from '@/config/constants';
import AnimationWrapper from './AnimationWrapper';
import ImageComponent from './ImageComponent';
import MobileBasket from './MobileBasket';

const Header = () => {
  return (
    <header className='bg-dark w-full flex justify-center items-center md:py-3'>
      <div className='container relative flex items-center'>
        <Link href='/' className='w-fit flex flex-1'>
          <Image
            src={SmallLogo}
            alt='logo'
            className='h-10 w-10 md:hidden'
            blurDataURL='LLH_ov.m=eR2:c9*#ZJP8wNE;bF#'
            priority
          />
          <AnimationWrapper type='fadedownright'>
            <ImageComponent
              src={`${process.env.NEXT_PUBLIC_URL}/logo-big.svg`}
              alt='logo'
              blurhash='LLH_ov.m=eR2:c9*#ZJP8wNE;bF#'
              className='h-16 w-full hidden md:block'
            />
          </AnimationWrapper>
        </Link>
        <AnimationWrapper type='fadedown' className='flex-1'>
          <ul className=' gap-4 hidden md:flex justify-center'>
            {navigationList.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className='text-xs text-white'>
                  {item.content.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </AnimationWrapper>
        <AnimationWrapper type='fadedownleft' className='flex-1'>
          <HeaderButtonList />
        </AnimationWrapper>
        <div className='flex gap-4'>
          <MobileBasket />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
