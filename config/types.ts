export interface INavigationListItem {
  id: number;
  content: string;
  link: string;
}

export interface ISocialMediaListItem {
  id: number;
  alt: string;
  src: string;
  link: string;
}

export interface IHeaderButtonList {
  id: number;
  name: string;
  alt: string;
  src: string;
}

export interface IProductColor {
  sold: number;
  quantity: number;
  imgSrc: string;
}

export type TColor = 'black' | 'brown' | 'red' | 'blue';

export interface IProduct {
  _id: number;
  name: string;
  price: number;
  blurHash: string;
  colors: {
    [color: string]: IProductColor;
  };
}

export interface IAllProduct {
  id: number;
  name: string;
  price: number;
  color: string;
  sold: number;
  imgSrc: string;
  quantity: number;
  blurhash: string;
}

export interface IBasketProduct {
  id: string;
  name: string;
  quantity?: number;
  maxQuantity: number;
  price: number;
  color: TColor;
  imgSrc: string;
}

export interface IContact {
  id: number;
  image: string;
  paragraph: string;
}

export interface IUser {
  email: string;
  name: string;
  image?: string;
  password: string;
}

export interface IOrder {
  orderID: any;
  buyerName: string;
  buyerEmail: string;
  date: Date;
  products: {
    name: string;
    color: string;
    quantity: number;
  }[];
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface IUserMongo {
  _id: string;
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface IOrderMongo {
  _id: string;
  buyerEmail: string;
  buyerName: string;
  date: Date;
  orderID: string;
  products: {
    color: string;
    name: string;
    quantity: number;
  }[];
}
