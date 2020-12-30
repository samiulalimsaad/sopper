import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cart from "../utils/Cart";
import { getDigitalPage } from "../redux";
import { Error, Loading } from "../utils/ErrorOrLoading";

const Digital = ({ data, getData }) => {
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
                <Cart items={data.items} name="Electronics" />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.digital,
});

const mapDispatchToProps = (dispatch) => ({
    getData: () => {
        dispatch(getDigitalPage());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Digital);
