import axios from "axios";
import {
    GET_DATA_OTHER_SERVICES_PRODUCT,
    HAS_DATA_OTHER_SERVICES_PRODUCT,
    NO_DATA_OTHER_SERVICES_PRODUCT,
} from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_OTHER_SERVICES_PRODUCT,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_OTHER_SERVICES_PRODUCT,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_OTHER_SERVICES_PRODUCT,
        payload: error,
    };
};

export const getOtherServicePage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
            const { data } = await axios.get(
                "http://localhost:4000/otherservice"
            );
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
