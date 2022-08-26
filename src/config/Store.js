import cartSlice from "../store/cartSlice"
import { configureStore } from '@reduxjs/toolkit';
import productSlice from "../store/productSlice";
import AddSlice from "../store/AddSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        cardAdd: AddSlice
    }
})
export default store