import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { addProduct } from "../components/cart/cart-action";
import { cartReducer } from "../components/cart/cart-reducer";
import { productsReducer } from "../components/Productos/products-reducer";
import { categoriesReducer } from "./categories/categories-reducer";
import { userReducer } from "./user/user-reducer";


const rootReducer= combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
});


export default persistReducer(
    {
        key:'global',
        storage,
        whitelist:[]
    },
    rootReducer
);