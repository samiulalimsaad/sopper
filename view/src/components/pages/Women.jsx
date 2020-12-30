import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cart from "../utils/Cart";
import { getWomenPage } from "../redux";
import { Error, Loading } from "../utils/ErrorOrLoading";

const Women = ({ data, getData }) => {
    useEffect(() => {
        getData();
    }, [getData]);
    return (
        <div className="bg-light">
            {data.loading ? (
                <Loading />
            ) : data.error ? (
                <Error error={data.error} />
            ) : (
                <Cart items={data.items} name="Women" />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.women,
});

const mapDispatchToProps = (dispatch) => ({
    getData: () => {
        dispatch(getWomenPage());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Women);
