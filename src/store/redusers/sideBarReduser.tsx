// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface SideBar {
  toggleStore: boolean;
  toggleMagazine: boolean;
  toggleCompany: boolean;
  toggleSearch: boolean;
  toggleCart: boolean;
  translateStoreXr: string;
  translateMagazineXr: string;
  translateCompanyXr: string;
  translateSearchXl: string;
  translateCartXl: string;
}

const initialState: SideBar = {
  toggleStore: false,
  toggleMagazine: false,
  toggleCompany: false,
  toggleSearch: false,
  toggleCart: false,
  translateStoreXr: '-translate-x-full',
  translateMagazineXr: '-translate-x-full',
  translateCompanyXr: '-translate-x-full',
  translateSearchXl: 'translate-x-full',
  translateCartXl: 'translate-x-full',
};

export const sideBar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleStore: (state) => {
      state.toggleStore = !state.toggleStore;
      !state.toggleStore
        ? (state.translateStoreXr = '-translate-x-full')
        : (state.translateStoreXr = 'translate-x-0');
      state.translateMagazineXr = '-translate-x-full';
      state.translateCompanyXr = '-translate-x-full';
      state.toggleMagazine = false;
      state.toggleCompany = false;
    },

    toggleMagazine: (state) => {
      state.toggleMagazine = !state.toggleMagazine;
      !state.toggleMagazine
        ? (state.translateMagazineXr = '-translate-x-full')
        : (state.translateMagazineXr = 'translate-x-0');
      state.translateStoreXr = '-translate-x-full';
      state.translateCompanyXr = '-translate-x-full';
      state.toggleStore = false;
      state.toggleCompany = false;
    },

    toggleCompany: (state) => {
      state.toggleCompany = !state.toggleCompany;
      !state.toggleCompany
        ? (state.translateCompanyXr = '-translate-x-full')
        : (state.translateCompanyXr = 'translate-x-0');
      state.translateStoreXr = '-translate-x-full';
      state.translateMagazineXr = '-translate-x-full';
      state.toggleMagazine = false;
      state.toggleStore = false;
    },

    toggleSearch: (state) => {
      state.toggleSearch = !state.toggleSearch;
      !state.toggleSearch
        ? (state.translateSearchXl = 'translate-x-full')
        : (state.translateSearchXl = 'translate-x-0');
    },
    toggleCart: (state) => {
      state.toggleCart = !state.toggleCart;
      !state.toggleCart
        ? (state.translateCartXl = 'translate-x-full')
        : (state.translateCartXl = 'translate-x-0');
    },

    hideInfo: (state) => {
      state.toggleStore = false;
      state.toggleMagazine = false;
      state.toggleCompany = false;
      state.translateStoreXr = '-translate-x-full';
      state.translateMagazineXr = '-translate-x-full';
      state.translateCompanyXr = '-translate-x-full';
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
