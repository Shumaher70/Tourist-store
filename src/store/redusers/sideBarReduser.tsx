// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface SideBar {
  toggleStore: boolean;
  toggleMagazine: boolean;
  toggleCompany: boolean;
  toggleSearch: boolean;
  toggleCart: boolean;
}

const initialState: SideBar = {
  toggleStore: false,
  toggleMagazine: false,
  toggleCompany: false,
  toggleSearch: false,
  toggleCart: false,
};

export const sideBar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleStore: (state) => {
      state.toggleStore = !state.toggleStore;
      state.toggleMagazine = false;
      state.toggleCompany = false;
    },

    toggleMagazine: (state) => {
      state.toggleMagazine = !state.toggleMagazine;
      state.toggleStore = false;
      state.toggleCompany = false;
    },

    toggleCompany: (state) => {
      state.toggleCompany = !state.toggleCompany;
      state.toggleMagazine = false;
      state.toggleStore = false;
    },

    toggleSearch: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
    toggleCart: (state) => {
      state.toggleCart = !state.toggleCart;
    },
    hideInfo: (state) => {
      state.toggleStore = false;
      state.toggleMagazine = false;
      state.toggleCompany = false;
    },
  },
});

export const {
  toggleStore,
  toggleMagazine,
  toggleCompany,
  toggleSearch,
  toggleCart,
  hideInfo,
} = sideBar.actions;

export default sideBar.reducer;
