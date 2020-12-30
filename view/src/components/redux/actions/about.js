import axios from "axios";
import {
    GET_DATA_ABOUT_PAGE,
    HAS_DATA_ABOUT_PAGE,
    NO_DATA_ABOUT_PAGE,
} from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_ABOUT_PAGE,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_ABOUT_PAGE,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_ABOUT_PAGE,
        payload: error,
    };
};

export const getAboutPage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
            const { data } = await axios.get("http://localhost:4000/about");
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
