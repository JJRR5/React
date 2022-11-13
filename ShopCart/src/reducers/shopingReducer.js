import products from '../mock/products'
import { TYPES } from '../actions/shopingActions'

export const shoppingInitialState = {
    products,
    cart: []
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART:
            const itemExists = state.cart.some(item => item.id === action.payload.id);
            return !itemExists
                ? {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                }
                : {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
        case TYPES.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case TYPES.CLEAR_CART:
            return shoppingInitialState
        case TYPES.HANDLE_QUANTITY:
            const addOrRemove = action.payload.addOrRemove
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { 
                            ...item, 
                            quantity: addOrRemove === "add" ?  item.quantity + 1  : item.quantity - 1
                        }
                        : item
                ),
            }
        default:
            return state
    }
}


