import axios from "axios";
import {
    GET_DATA_CHECKOUT,
    HAS_DATA_CHECKOUT,
    NO_DATA_CHECKOUT,
} from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_CHECKOUT,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_CHECKOUT,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_CHECKOUT,
        payload: error,
    };
};

export const getCheckOutPage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
            const { data } = await axios.get("http://localhost:4000/checkout");
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
