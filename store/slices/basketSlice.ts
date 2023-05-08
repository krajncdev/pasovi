import { IBasketProduct } from '@/config/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IBasketState {
  products: IBasketProduct[];
}

const initialState: IBasketState = {
  products: [],
};

export const basketSlice = createSlice({
  name: 'hamburger',
  initialState,
  reducers: {
    addBasket: (state, action: PayloadAction<IBasketProduct>) => {
      const existingProductIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (existingProductIndex === -1) {
        state.products.push({ quantity: 1, ...action.payload });
      } else {
        const existingProduct = state.products[existingProductIndex];
        if (existingProduct && existingProduct.quantity !== undefined) {
          existingProduct.quantity += 1;
        }
      }
    },
    removeBasket: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseBasket: (state, action: PayloadAction<string>) => {
      state.products.map((item, i) => {
        if (item.id === action.payload) {
          const product = state.products[i];
          if (
            product.quantity !== undefined &&
            product.quantity !== product.maxQuantity
          ) {
            product.quantity++;
          }
        }
      });
    },
    decreaseBasket: (state, action: PayloadAction<string>) => {
      state.products.map((item, i) => {
        if (item.id === action.payload) {
          const product = state.products[i];
          if (product.quantity !== undefined && product.quantity !== 1) {
            product.quantity--;
          }
        }
      });
    },
    removeAllBasket: (state) => {
      state.products = [];
    },
  },
});

export const {
  addBasket,
  increaseBasket,
  decreaseBasket,
  removeAllBasket,
  removeBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
