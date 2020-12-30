import {
    HAS_DATA_ABOUT_PAGE,
    NO_DATA_ABOUT_PAGE,
    GET_DATA_ABOUT_PAGE,
} from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_ABOUT_PAGE:
            return {
                ...state,
                loading: true,
            };
        case HAS_DATA_ABOUT_PAGE:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: "",
            };
        case NO_DATA_ABOUT_PAGE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
