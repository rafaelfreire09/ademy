import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cartItems: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
