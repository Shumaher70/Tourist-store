import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SizeComponents {
  hightNav: string;
}

const initialState: SizeComponents = {
  hightNav: '',
};

export const size = createSlice({
  name: 'size',
  initialState,
  reducers: {
    hightNav: (state, action: PayloadAction<string>) => {
      state.hightNav = action.payload;
    },
  },
});

export const { hightNav } = size.actions;

export default size.reducer;
