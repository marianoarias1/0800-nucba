import { Products } from "../ProductsArray/ProductsArray";

const INITIAL_STATE= {products: Products};

export const productsReducer=(state= INITIAL_STATE, action)=>{
    const {type, payload}=action;

    switch(type){
        default:
            return state;
    }
}