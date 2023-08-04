import { createSlice } from '@reduxjs/toolkit';

interface Accordion {
  shop: boolean;
  products: boolean;
  hptSelected: boolean;
  reStore: boolean;
  magazine: boolean;
  company: boolean;
  aboutUs: boolean;
  sustainability: boolean;
  disignSpace: boolean;
  toggle: boolean;
}

const initialState: Accordion = {
  shop: false,
  products: false,
  hptSelected: false,
  reStore: false,
  magazine: false,
  company: false,
  aboutUs: false,
  sustainability: false,
  disignSpace: false,
  toggle: false,
};

export const accordion = createSlice({
  name: 'accordion',
  initialState,
  reducers: {
    showAction: (state) => {
      state.toggle = true;
    },
    hiddeAction: (state) => {
      state.toggle = false;
    },
    shopAction: (state) => {
      state.shop = !state.shop;
    },
    productsAction: (state) => {
      state.products = !state.products;
    },
    hptSelectedAction: (state) => {
      state.hptSelected = !state.hptSelected;
    },
    reStoreAction: (state) => {
      state.reStore = !state.reStore;
    },
    magazineAction: (state) => {
      state.magazine = !state.magazine;
    },
    companyAction: (state) => {
      state.company = !state.company;
    },
    aboutUsAction: (state) => {
      state.aboutUs = !state.aboutUs;
    },
    sustainabilityAction: (state) => {
      state.sustainability = !state.sustainability;
    },
    disignSpaceAction: (state) => {
      state.disignSpace = !state.disignSpace;
    },
  },
});

export const {
  shopAction,
  productsAction,
  hptSelectedAction,
  reStoreAction,
  magazineAction,
  companyAction,
  aboutUsAction,
  sustainabilityAction,
  disignSpaceAction,
  showAction,
  hiddeAction,
} = accordion.actions;

export default accordion.reducer;
