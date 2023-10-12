import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Product {
   mainImg: string;
   title: string;
   price: number;
   quantity: number;
   totalPriceProduct: number;
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
         const productTotalQuantity = state.products
            .map((product) => product.quantity)
            .reduce((sum, product) => sum + product, 1);

         state.totalQuantity = productTotalQuantity;

         if (productExist) {
            productExist.quantity += action.payload.quantity;
            productExist.totalPriceProduct =
               productExist.price * productExist.quantity;
         } else {
            state.products.push(action.payload);
         }
      },
   },
});

export const { addToCart } = productCart.actions;

export default productCart.reducer;
