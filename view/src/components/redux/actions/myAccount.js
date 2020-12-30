import axios from "axios";
import {
    GET_DATA_MY_ACCOUNT,
    HAS_DATA_MY_ACCOUNT,
    NO_DATA_MY_ACCOUNT,
} from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_MY_ACCOUNT,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_MY_ACCOUNT,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_MY_ACCOUNT,
        payload: error,
    };
};

export const getMyAccountPage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
            const { data } = await axios.get("http://localhost:4000/myAccount");
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
