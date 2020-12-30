import { HAS_DATA_CARTS, NO_DATA_CARTS, GET_DATA_CARTS } from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const cartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_CARTS:
            return {
                ...state,
                loading: true,
            };
        case HAS_DATA_CARTS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: "",
            };
        case NO_DATA_CARTS:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
