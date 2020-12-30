import {
    HAS_DATA_HOME_PAGE,
    NO_DATA_HOME_PAGE,
    GET_DATA_HOME_PAGE,
} from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_HOME_PAGE:
            return {
                ...state,
                loading: true,
            };
        case HAS_DATA_HOME_PAGE:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: "",
            };
        case NO_DATA_HOME_PAGE:
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
