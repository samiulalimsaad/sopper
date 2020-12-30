import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cart from "../utils/Cart";
import { getKidsPage } from "../redux";
import { Error, Loading } from "../utils/ErrorOrLoading";

const Kids = ({ data, getData }) => {
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
                <Cart items={data.items} name="Kids" />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.kids,
});

const mapDispatchToProps = (dispatch) => ({
    getData: () => {
        dispatch(getKidsPage());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Kids);
