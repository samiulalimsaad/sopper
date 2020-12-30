import axios from "axios";
import {
    GET_DATA_KIDS_PRODUCT,
    HAS_DATA_KIDS_PRODUCT,
    NO_DATA_KIDS_PRODUCT,
} from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_KIDS_PRODUCT,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_KIDS_PRODUCT,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_KIDS_PRODUCT,
        payload: error,
    };
};

export const getKidsPage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
            const { data } = await axios.get("http://localhost:4000/kids");
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
