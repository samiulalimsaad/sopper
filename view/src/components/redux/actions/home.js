import axios from "axios";
import {
    HAS_DATA_HOME_PAGE,
    NO_DATA_HOME_PAGE,
    GET_DATA_HOME_PAGE,
} from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_HOME_PAGE,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_HOME_PAGE,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_HOME_PAGE,
        payload: error,
    };
};

export const getHomePage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
            const { data } = await axios.get("http://localhost:4000/");
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
