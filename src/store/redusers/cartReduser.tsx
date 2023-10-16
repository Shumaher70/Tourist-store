import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
   products: [],
   totalPrice: 0,
   totalQuantity: 0,
};

export const productCart = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action: PayloadAction<Product>) => {
         const productExist = state.products.find(
            (p) => p.title === action.payload.title
         );
         if (productExist) {
            productExist.quantity! += 1;

            productExist.totalPriceProduct =
               productExist.price * productExist.quantity!;
         } else {
            state.products.push(action.payload);
         }
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
      },

      totalCart: (state) => {
         state.totalQuantity = state.products
            .map((item) => item.quantity)
            .reduce((sum, acc) => sum + acc, 0);

         state.totalPrice = state.products
            .map((item) => item.totalPriceProduct)
            .reduce((sum, acc) => sum + acc, 0);
      },

      removeCart: (state, action: PayloadAction<Product>) => {
         state.products = state.products.filter(
            (item) => item.id !== action.payload.id
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
