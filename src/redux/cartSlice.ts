import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EbookCart } from 'types/types';

const initialState: EbookCart[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<EbookCart>) => {
      const itemExists = state.find((item) => item.id === action.payload.id);

      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<EbookCart>) => {
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      state.splice(itemIndex, 1);
    },
    incrementQuantity: (state, action: PayloadAction<EbookCart>) => {
      const item = state.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<EbookCart>) => {
      const item = state.find((item) => item.id === action.payload.id);

      if (item) {
        if (item.quantity === 1) {
          const index = state.findIndex(
            (item) => item.id === action.payload.id
          );

          state.splice(index, 1);
        } else {
          item.quantity--;
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice;
