import axios from "axios";
import {
    GET_DATA_FURNITURE_PRODUCT,
    HAS_DATA_FURNITURE_PRODUCT,
    NO_DATA_FURNITURE_PRODUCT,
} from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_FURNITURE_PRODUCT,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_FURNITURE_PRODUCT,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_FURNITURE_PRODUCT,
        payload: error,
    };
};

export const getFurniturePage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
            const { data } = await axios.get("http://localhost:4000/furniture");
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
