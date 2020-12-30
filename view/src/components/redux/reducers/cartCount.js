import { CART_INCREMENT, CART_DECREMENT } from "../actionTypes";

const initialState = {
    cart: 0,
};

export const cartCount = (state = initialState, action) => {
    switch (action.type) {
        case CART_INCREMENT:
            return {
                cart: state.cart + 1,
            };
        case CART_DECREMENT:
            return {
                cart: state.cart - 1,
            };
        default:
            return state;
    }
};
