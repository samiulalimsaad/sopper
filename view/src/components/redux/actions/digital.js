import axios from "axios";
import {
    GET_DATA_DIGITAL_PRODUCT,
    HAS_DATA_DIGITAL_PRODUCT,
    NO_DATA_DIGITAL_PRODUCT,
} from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_DIGITAL_PRODUCT,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_DIGITAL_PRODUCT,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_DIGITAL_PRODUCT,
        payload: error,
    };
};

export const getDigitalPage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
			const { data } = await axios.get("http://localhost:4000/digital");
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
