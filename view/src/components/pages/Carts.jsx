import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBCol, MDBRow, MDBMedia, MDBBtn } from "mdbreact";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { getCartPage } from "../redux";
import { Error, Loading } from "../utils/ErrorOrLoading";
import { CART_DECREMENT, VIEW_DETAILS } from "../redux/actionTypes";
import { removeCart } from "../redux";

const Carts = ({ data, getData, removeData, viewItem }) => {
    useEffect(() => {
        getData();
    }, [getData]);
    return (
        <MDBContainer className="bg-light py-5">
            {data.loading ? (
                <Loading />
            ) : data.error ? (
                <Error error={data.error} />
            ) : (
                data.data && (
                    <MDBRow>
                        {data.data.map((v, i) => (
                            <MDBCol md="12">
                                <MDBMedia className="border border-black p-3 my-2">
                                    <MDBMedia left middle className="mr-3">
                                        <MDBMedia
                                            object
                                            hover
                                            zoom
                                            className="mx-3"
                                            src={require(`../../../public${v.src}`)}
                                            alt="Card image cap"
                                            style={{
                                                height: "auto",
                                                width: "300px",
                                            }}
                                        />
                                    </MDBMedia>
                                    <MDBMedia body>
                                        <MDBMedia heading className="pt-5 pb-4">
                                            {v.product}
                                        </MDBMedia>
                                        <div className="ml-auto d-flex">
                                            {!v.discount ? (
                                                <p className="lead pr-3 text-danger">
                                                    {v.price}{" "}
                                                    <span
                                                        style={{
                                                            fontSize: "20px",
                                                        }}
                                                    >
                                                        ৳
                                                    </span>
                                                </p>
                                            ) : (
                                                <>
                                                    <del className="lead pr-3 text-danger">
                                                        {v.price}{" "}
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "20px",
                                                            }}
                                                        >
                                                            ৳
                                                        </span>
                                                    </del>
                                                    <p className="lead pr-3 ml-5 text-success">
                                                        <sup
                                                            className="lead mr-2 badge-primary px-2 rounded"
                                                            style={{
                                                                fontSize:
                                                                    "12px",
                                                            }}
                                                        >
                                                            Now
                                                        </sup>
                                                        {Math.round(
                                                            v.price -
                                                                v.price *
                                                                    (v.discount /
                                                                        100)
                                                        )}{" "}
                                                        <span
                                                            style={{
                                                                fontSize:
                                                                    "20px",
                                                            }}
                                                        >
                                                            ৳
                                                        </span>
                                                    </p>
                                                    <p className="lead pr-3 ml-5 text-warning">
                                                        - {v.discount}%
                                                    </p>
                                                </>
                                            )}
                                            <MDBBtn
                                                color="danger"
                                                className="mx-2 ml-auto"
                                                style={{ fontSize: "10px" }}
                                                onClick={() => {
                                                    removeData(v);
                                                    toast.error(
                                                        "Item removed from cart"
                                                    );
                                                }}
                                            >
                                                Remove from Cart
                                            </MDBBtn>
                                            <Link
                                                to={`/product details/${
                                                    Math.round(
                                                        Math.random() * 33333
                                                    ) + 10000
                                                }`}
                                            >
                                                <MDBBtn
                                                    color="warning"
                                                    className="px-2 text-dark"
                                                    onClick={() => {
                                                        viewItem(v);
                                                    }}
                                                >
                                                    view Details
                                                </MDBBtn>
                                            </Link>
                                            <MDBBtn
                                                color="success"
                                                className="mx-2"
                                                style={{ fontSize: "10px" }}
                                                onClick={() => {
                                                    toast.success(
                                                        "Work is on progress please try again later"
                                                    );
                                                }}
                                            >
                                                Order Now
                                            </MDBBtn>
                                        </div>
                                        <div className="pt-4">
                                            <p className="lead text-justify">
                                                Lorem ipsum dolor, sit amet
                                                consectetur adipisicing elit.
                                                Magnam blanditiis quidem qui,
                                                eos consequatur tempore vero
                                                aperiam vitae quo inventore
                                                reprehenderit facere molestias,
                                                impedit exercitationem
                                                dignissimos expedita ratione
                                                voluptatem iusto labore
                                                veritatis laborum? Ducimus
                                                nesciunt veritatis reprehenderit
                                                dolor nemo earum sapiente
                                                laborum, maiores non
                                            </p>
                                        </div>
                                    </MDBMedia>
                                </MDBMedia>
                            </MDBCol>
                        ))}
                    </MDBRow>
                )
            )}
            <ToastContainer />
        </MDBContainer>
    );
};

const mapStateToProps = (state) => ({
    data: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
    getData: () => {
        dispatch(getCartPage());
    },
    removeData: (v) => {
        dispatch({ type: CART_DECREMENT });
        removeCart(v);
    },
    viewItem: (v) => {
        dispatch({ type: VIEW_DETAILS, payload: v });
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Carts);
