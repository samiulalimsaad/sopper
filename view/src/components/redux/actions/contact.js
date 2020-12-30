import axios from "axios";
import {
    GET_DATA_CONTACT_PAGE,
    HAS_DATA_CONTACT_PAGE,
    NO_DATA_CONTACT_PAGE,
} from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_CONTACT_PAGE,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_CONTACT_PAGE,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_CONTACT_PAGE,
        payload: error,
    };
};

export const getContactPage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
            const { data } = await axios.get("http://localhost:4000/contact");
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
