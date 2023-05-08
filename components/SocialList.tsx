import React, { HTMLAttributes } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { ISocialMediaListItem } from '@/config/types';

interface ISocialListProps extends HTMLAttributes<HTMLUListElement> {
  list: ISocialMediaListItem[];
}
const SocialList = (props: ISocialListProps) => {
  const { list, className, ...otherProps } = props;
  return (
    <ul
      {...otherProps}
      className={`flex items-center justify-center gap-6 ${className} `}
    >
      {list.map((item: ISocialMediaListItem) => (
        <li key={item.id}>
          <Link href={item.link}>
            <Image src={item.src} alt={item.alt} className='h-8 w-8' />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
