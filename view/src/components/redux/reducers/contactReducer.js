import {
    HAS_DATA_CONTACT_PAGE,
    NO_DATA_CONTACT_PAGE,
    GET_DATA_CONTACT_PAGE,
} from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_CONTACT_PAGE:
            return {
                ...state,
                loading: true,
            };
        case HAS_DATA_CONTACT_PAGE:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: "",
            };
        case NO_DATA_CONTACT_PAGE:
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
