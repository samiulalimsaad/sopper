import {
    HAS_DATA_CHECKOUT,
    NO_DATA_CHECKOUT,
    GET_DATA_CHECKOUT,
} from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const checkOutReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_CHECKOUT:
            return {
                ...state,
                loading: true,
            };
        case HAS_DATA_CHECKOUT:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: "",
            };
        case NO_DATA_CHECKOUT:
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
