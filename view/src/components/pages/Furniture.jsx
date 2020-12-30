import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cart from "../utils/Cart";
import { getFurniturePage } from "../redux";
import { Error, Loading } from "../utils/ErrorOrLoading";

const Furniture = ({ data, getData }) => {
    useEffect(() => {
        getData();
    }, [getData]);
    return (
        <div className="bg-light">
            {data.loading ? (
                <Loading/>
            ) : data.error ? (
                <Error error={data.error} />
            ) : (
                <Cart items={data.items} name="Furniture" />
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.furniture,
});

const mapDispatchToProps = (dispatch) => ({
    getData: () => {
        dispatch(getFurniturePage());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Furniture);
