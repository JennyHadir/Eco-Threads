import { ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET, UPDATE_PRODUCT_AMOUNT_IN_BASKET } from "./ActionTypes"

const initialState = {
    basketProducts: [],
}


const BasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BASKET:
            return {
                ...state,
                basketProducts: [...state.basketProducts, action.payload]
            }
        case REMOVE_PRODUCT_FROM_BASKET:
            return {
                ...state,
                basketProducts: [...state.basketProducts.filter((product) => product.id !== action.payload)]
            }
        case UPDATE_PRODUCT_AMOUNT_IN_BASKET:
            return {
                ...state,
                basketProducts: state.basketProducts.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, basketAmount: action.payload.amount }
                        : product
                ),
            };
        default:
            return state;
    }
}


export default BasketReducer
