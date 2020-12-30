import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cart from "../utils/Cart";
import { getMenPage } from "../redux";
import { Error, Loading } from "../utils/ErrorOrLoading";

const Man = ({ data, getData }) => {
    useEffect(() => {
        getData();
    },[getData]);
    return (
        <div className="bg-light">
            {data.loading ? (
                <Loading />
            ) : data.error ? (
                <Error error={data.error} />
            ) : (
                <Cart items={data.items} name="men" />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.men,
});

const mapDispatchToProps = (dispatch) => ({
    getData: () => {
        dispatch(getMenPage());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Man);
