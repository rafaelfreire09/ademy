import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  userId: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserID: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
  },
});

export const { setUserID } = userSlice.actions;

export default userSlice;
