// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface SideBar {
  toggleStore: boolean;
  sidebarStoreProduct: boolean;
  sidebarStoreHptSelected: boolean;
  sidebarStoreReStore: boolean;
  toggleMagazine: boolean;
  toggleCompany: boolean;
  sidebarleCompanyAboutUs: boolean;
  sidebarleCompanySustainAbility: boolean;
  sidebarleCompanyDisignSpace: boolean;
  toggleSearch: boolean;
  toggleCart: boolean;
}

const initialState: SideBar = {
  toggleStore: false,
  sidebarStoreProduct: false,
  sidebarStoreHptSelected: false,
  sidebarStoreReStore: false,
  toggleMagazine: false,
  toggleCompany: false,
  sidebarleCompanyAboutUs: false,
  sidebarleCompanySustainAbility: false,
  sidebarleCompanyDisignSpace: false,
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
    sidebarStoreProduct: (state) => {
      state.sidebarStoreProduct = !state.sidebarStoreProduct;
      state.sidebarStoreHptSelected = false;
      state.sidebarStoreReStore = false;
    },
    sidebarStoreHptSelected: (state) => {
      state.sidebarStoreHptSelected = !state.sidebarStoreHptSelected;
      state.sidebarStoreProduct = false;
      state.sidebarStoreReStore = false;
    },
    sidebarStoreReStore: (state) => {
      state.sidebarStoreReStore = !state.sidebarStoreReStore;
      state.sidebarStoreProduct = false;
      state.sidebarStoreHptSelected = false;
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

    sidebarleCompanyAboutUs: (state) => {
      state.sidebarleCompanyAboutUs = !state.sidebarleCompanyAboutUs;
      state.sidebarleCompanySustainAbility = false;
      state.sidebarleCompanyDisignSpace = false;
    },
    sidebarleCompanySustainAbility: (state) => {
      state.sidebarleCompanySustainAbility =
        !state.sidebarleCompanySustainAbility;
      state.sidebarleCompanyAboutUs = false;
      state.sidebarleCompanyDisignSpace = false;
    },
    sidebarleCompanyDisignSpace: (state) => {
      state.sidebarleCompanyDisignSpace = !state.sidebarleCompanyDisignSpace;
      state.sidebarleCompanySustainAbility = false;
      state.sidebarleCompanyAboutUs = false;
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
  sidebarStoreProduct,
  sidebarStoreHptSelected,
  sidebarStoreReStore,
  toggleMagazine,
  toggleCompany,
  sidebarleCompanyAboutUs,
  sidebarleCompanySustainAbility,
  sidebarleCompanyDisignSpace,
  toggleSearch,
  toggleCart,
  hideInfo,
} = sideBar.actions;

export default sideBar.reducer;
