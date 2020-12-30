import {
    HAS_DATA_KIDS_PRODUCT,
    NO_DATA_KIDS_PRODUCT,
    GET_DATA_KIDS_PRODUCT,
} from "../actionTypes";

const initialState = {
    loading: false,
    items: [],
    error: "",
};

export const kidsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_KIDS_PRODUCT:
            return {
                ...state,
                loading: true,
            };
        case HAS_DATA_KIDS_PRODUCT:
            return {
                ...state,
                loading: false,
                items: action.payload,
                error: "",
            };
        case NO_DATA_KIDS_PRODUCT:
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
