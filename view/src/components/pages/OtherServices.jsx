import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cart from "../utils/Cart";
import { getOtherServicePage } from "../redux";
import { Error, Loading } from "../utils/ErrorOrLoading";

const OtherServices = ({ data, getData }) => {
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
                <Cart items={data.items} name="Other Services" />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.otherService,
});

const mapDispatchToProps = (dispatch) => ({
    getData: () => {
        dispatch(getOtherServicePage());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(OtherServices);
