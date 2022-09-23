import { addItemCart, removeItemCart } from "./cart";
import { ADD_PRODUCT, CLEAR_CART, REMOVE_PRODUCT, TOGGLE_CART } from "./cart-action";


const INITIAL_STATE={
    items:[],
    totalCost:0,
    visible: false,
}

export const cartReducer= (state=INITIAL_STATE, action)=>{

    const {type, payload}= action;

    switch(type){
        case TOGGLE_CART:
            return {
                ...state,
                visible: !state.visible,
            };
        case ADD_PRODUCT:
            const newAddedProd= addItemCart(state.items, payload);
            const subtotal= newAddedProd.reduce((sub, item)=>(sub +=item.price * item.quantity), 0);
            return{
                ...state,
                items:newAddedProd,
                totalCost: subtotal,
            };
        case CLEAR_CART:
            return{
                ...state,
                items:[],
                totalCost: 0,
            }
        case REMOVE_PRODUCT:
            const newRemoveProd= removeItemCart(state.items, payload);
            const subtotalRemove= newRemoveProd.reduce((sub, item)=>(sub +=item.price * item.quantity), 0);
            return{
                ...state,
                items: newRemoveProd,
                totalCost: subtotalRemove,
            }
        default:
            return state;
    }
}