import axios from "axios";
import {
    GET_DATA_MEN_PRODUCT,
    HAS_DATA_MEN_PRODUCT,
    NO_DATA_MEN_PRODUCT,
} from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_MEN_PRODUCT,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_MEN_PRODUCT,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_MEN_PRODUCT,
        payload: error,
    };
};

export const getMenPage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
            const { data } = await axios.get("http://localhost:4000/men");
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
