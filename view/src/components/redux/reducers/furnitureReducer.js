import {
    HAS_DATA_FURNITURE_PRODUCT,
    NO_DATA_FURNITURE_PRODUCT,
    GET_DATA_FURNITURE_PRODUCT,
} from "../actionTypes";

const initialState = {
    loading: false,
    items: [],
    error: "",
};

export const furnitureReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_FURNITURE_PRODUCT:
            return {
                ...state,
                loading: true,
            };
        case HAS_DATA_FURNITURE_PRODUCT:
            return {
                ...state,
                loading: false,
                items: action.payload,
                error: "",
            };
        case NO_DATA_FURNITURE_PRODUCT:
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
