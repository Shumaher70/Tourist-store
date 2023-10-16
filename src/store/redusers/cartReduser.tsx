import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const cartItems =
   localStorage.getItem('cartItems') !== null
      ? JSON.parse(localStorage.getItem('cartItems')!)
      : [];
const totalPrice =
   localStorage.getItem('totalPrice') !== null
      ? JSON.parse(localStorage.getItem('totalPrice')!)
      : 0;

const totalQuantity =
   localStorage.getItem('totalQuantity') !== null
      ? JSON.parse(localStorage.getItem('totalQuantity')!)
      : 0;

interface Product {
   id: string;
   mainImg: string;
   title: string;
   price: number;
   quantity: number;
   totalPriceProduct: number;
   src: string;
}

interface Cart {
   products: Product[];
   totalPrice: number;
   totalQuantity: number;
}

const initialState: Cart = {
   products: cartItems,
   totalPrice,
   totalQuantity,
};

export const productCart = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<Product>) => {
         const newItem = action.payload.id;
         const productExist = state.products.find((p) => p.id === newItem);

         if (productExist) {
            productExist.quantity++;

            productExist.totalPriceProduct =
               productExist.price * productExist.quantity!;
         } else {
            state.products.push(action.payload);
         }

         localStorage.setItem(
            'cartItems',
            JSON.stringify(state.products.map((item) => item))
         );

         localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
         localStorage.setItem(
            'totalQuantity',
            JSON.stringify(state.totalQuantity)
         );
      },

      decreaseSingleProductQuantity: (
         state,
         action: PayloadAction<Product>
      ) => {
         const productExist = state.products.find(
            (p) => p.title === action.payload.title
         );

         if (productExist) {
            productExist.quantity! -= 1;
            productExist.totalPriceProduct =
               productExist.totalPriceProduct - productExist.price!;
         } else {
            state.products.push(action.payload);
         }
         localStorage.setItem(
            'cartItems',
            JSON.stringify(state.products.map((item) => item))
         );

         localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
         localStorage.setItem(
            'totalQuantity',
            JSON.stringify(state.totalQuantity)
         );
      },

      updateProductQuantity: (state, action: PayloadAction<Product>) => {
         const productExist = state.products.find(
            (p) => p.title === action.payload.title
         );
         if (productExist) {
            productExist.quantity! = action.payload.quantity;
            productExist.totalPriceProduct =
               productExist.price * productExist.quantity;
         }
         localStorage.setItem(
            'cartItems',
            JSON.stringify(state.products.map((item) => item))
         );

         localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
         localStorage.setItem(
            'totalQuantity',
            JSON.stringify(state.totalQuantity)
         );
      },

      totalCart: (state) => {
         state.totalQuantity = state.products
            .map((item) => item.quantity)
            .reduce((sum, acc) => sum + acc, 0);

         state.totalPrice = state.products
            .map((item) => item.totalPriceProduct)
            .reduce((sum, acc) => sum + acc, 0);
         localStorage.setItem(
            'cartItems',
            JSON.stringify(state.products.map((item) => item))
         );

         localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
         localStorage.setItem(
            'totalQuantity',
            JSON.stringify(state.totalQuantity)
         );
      },

      removeCart: (state, action: PayloadAction<Product>) => {
         state.products = state.products.filter(
            (item) => item.id !== action.payload.id
         );
         localStorage.setItem(
            'cartItems',
            JSON.stringify(state.products.map((item) => item))
         );

         localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
         localStorage.setItem(
            'totalQuantity',
            JSON.stringify(state.totalQuantity)
         );
      },
   },
});

export const {
   addToCart,
   decreaseSingleProductQuantity,
   totalCart,
   updateProductQuantity,
   removeCart,
} = productCart.actions;

export default productCart.reducer;
