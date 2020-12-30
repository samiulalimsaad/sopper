import {
    HAS_DATA_WOMEN_PRODUCT,
    NO_DATA_WOMEN_PRODUCT,
    GET_DATA_WOMEN_PRODUCT,
} from "../actionTypes";

const initialState = {
    loading: false,
    items: [],
    error: "",
};

export const womenReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_WOMEN_PRODUCT:
            return {
                ...state,
                loading: true,
            };
        case HAS_DATA_WOMEN_PRODUCT:
            return {
                ...state,
                loading: false,
                items: action.payload,
                error: "",
            };
        case NO_DATA_WOMEN_PRODUCT:
            return {
                ...state,
                loading: false,
                items: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
