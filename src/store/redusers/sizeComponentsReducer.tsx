import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SizeComponents {
  heightNav: string;
  widthNav: string;
}

const initialState: SizeComponents = {
  heightNav: '',
  widthNav: '',
};

export const size = createSlice({
  name: 'size',
  initialState,
  reducers: {
    heightNav: (state, action: PayloadAction<string>) => {
      state.heightNav = action.payload;
    },
    widthNav: (state, action: PayloadAction<string>) => {
      state.widthNav = action.payload;
    },
  },
});

export const { heightNav, widthNav } = size.actions;

export default size.reducer;
