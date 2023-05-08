import {
  INavigationListItem,
  ISocialMediaListItem,
  IHeaderButtonList,
  IContact,
} from './types';

import InstagramIcon from '@/public/instagram.svg';
import FacebookIcon from '@/public/facebook.svg';
import MailIcon from '@/public/mail.svg';

import CartIcon from '@/public/cart.svg';
import SearchIcon from '@/public/search.svg';
import UserIcon from '@/public/user.svg';
import UserPlusIcon from '@/public/user-plus.svg';

import PhoneIcon from '@/public/phone.svg';
import LocationIcon from '@/public/map-pin.svg';

import FacebookWhiteIcon from '@/public/facebook-white.svg';
import InstagramWhiteIcon from '@/public/instagram-white.svg';
import MailWhiteIcon from '@/public/mail-white.svg';

export const navigationList: INavigationListItem[] = [
  { id: 0, content: 'Izdelki', link: '/izdelki' },
  { id: 1, content: 'O nas', link: '/#o-nas' },
  { id: 2, content: 'Kontakt', link: '/#kontakt' },
];

export const socialMediaList: ISocialMediaListItem[] = [
  {
    id: 0,
    alt: 'Facebook',
    link: '#',
    src: FacebookIcon,
  },
  {
    id: 1,
    alt: 'Instagram',
    link: '#',
    src: InstagramIcon,
  },
  {
    id: 2,
    alt: 'Mail',
    link: '#',
    src: MailIcon,
  },
];

export const footerSocialMediaList: ISocialMediaListItem[] = [
  {
    id: 0,
    alt: 'Facebook',
    link: '#',
    src: FacebookWhiteIcon,
  },
  {
    id: 1,
    alt: 'Instagram',
    link: '#',
    src: InstagramWhiteIcon,
  },
  {
    id: 2,
    alt: 'Mail',
    link: '#',
    src: MailWhiteIcon,
  },
];

export const headerButtonList: IHeaderButtonList[] = [
  { id: 0, src: UserIcon, alt: 'user-icon', name: 'user' },
  { id: 1, src: UserPlusIcon, alt: 'user-add-icon', name: 'user-add' },
  { id: 2, src: CartIcon, alt: 'shopping-cart-icon', name: 'cart' },
  { id: 3, src: SearchIcon, alt: 'search-icon', name: 'search' },
];

export const contactList: IContact[] = [
  { id: 0, image: MailIcon, paragraph: 'pasovistern@gmail.com' },
  { id: 1, image: PhoneIcon, paragraph: '02/605-44-61' },
  {
    id: 2,
    image: LocationIcon,
    paragraph: 'Ulica talcev 27, 2312 Orehova Vas',
  },
];

export const bgColors = {
  red: 'bg-[#8B0000]',
  blue: 'bg-[#203354]',
  black: 'bg-black',
  brown: 'bg-[#6A452C]',
};
