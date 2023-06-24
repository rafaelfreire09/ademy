import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    cartItems: cartSlice.reducer,
    userItems: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
