import axios from "axios";
import { GET_DATA_CARTS, HAS_DATA_CARTS, NO_DATA_CARTS } from "../actionTypes";

const getData = () => {
    return {
        type: GET_DATA_CARTS,
    };
};

const hasData = (users) => {
    return {
        type: HAS_DATA_CARTS,
        payload: users,
    };
};

const noData = (error) => {
    return {
        type: NO_DATA_CARTS,
        payload: error,
    };
};

export const getCartPage = () => {
    return async (dispatch) => {
        dispatch(getData());
        try {
            const { data } = await axios.get("http://localhost:4000/carts");
            console.log("data", data);
            dispatch(hasData(data));
        } catch (error) {
            dispatch(noData(error.message));
        }
    };
};
export const addCart = async (v) => {
    try {
        await axios.post("http://localhost:4000/carts", v);
    } catch (error) {
        console.log(error);
    }
};
export const removeCart = async (v) => {
    try {
        await axios.patch("http://localhost:4000/carts", v);
    } catch (error) {
        console.log(error);
    }
};
