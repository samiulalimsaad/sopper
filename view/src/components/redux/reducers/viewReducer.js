import { VIEW_DETAILS } from "../actionTypes";

const initialState = {
    view: {},
};

export const view = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_DETAILS:
            return {
                view: action.payload,
            };
        default:
            return state;
    }
};
