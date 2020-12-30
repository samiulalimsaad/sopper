import { HAS_DATA_MY_ACCOUNT, NO_DATA_MY_ACCOUNT, GET_DATA_MY_ACCOUNT } from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

export const myAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_MY_ACCOUNT:
            return {
                ...state,
                loading: true,
            };
        case HAS_DATA_MY_ACCOUNT:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: "",
            };
        case NO_DATA_MY_ACCOUNT:
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
