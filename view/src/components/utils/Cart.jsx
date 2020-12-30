import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CART_INCREMENT, VIEW_DETAILS } from "../redux/actionTypes";
import { addCart } from "../redux";
import {
    MDBPagination,
    MDBPageItem,
    MDBPageNav,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
} from "mdbreact";

import { Sidebar } from "./Sidebar";

const Cart = ({ items, name, getData, addData, viewItem }) => {
    return (
        <div className="d-flex container-fluid bg-light">
            <Sidebar />
            <section className="container py-5">
                <MDBCol>
                    <div className="border-left">
                        <MDBCardBody>
                            <MDBCardTitle className="text-capitalize text-center">
                                {name.toUpperCase()}
                            </MDBCardTitle>
                            <hr />
                            <MDBRow>
                                {items.map((v, i) => (
                                    <MDBCol
                                        key={i}
                                        style={{
                                            minWidth: "33%",
                                            maxWidth: "33%",
                                        }}
                                    >
                                        <MDBCard
                                            className="border-black my-2"
                                            id="cart"
                                        >
                                            <MDBCardImage
                                                hover
                                                zoom
                                                className="img-fluid border-bottom"
                                                src={require(`../../../public${v.src}`)}
                                                // src={`${v.src}`}
                                                alt="Card cap"
                                                style={{
                                                    height: "250px",
                                                    width: "100%",
                                                }}
                                            />
                                            <MDBCardBody
                                                style={{
                                                    height: "130px",
                                                }}
                                            >
                                                <MDBCardTitle>
                                                    <p className="h4">
                                                        {v.product}
                                                    </p>
                                                    <div className="d-flex">
                                                        <MDBCardText className="text-success">
                                                            {v.price}{" "}
                                                            <span
                                                                style={{
                                                                    fontSize:
                                                                        "20px",
                                                                }}
                                                            >
                                                                ৳
                                                            </span>
                                                        </MDBCardText>
                                                        {v.discount && (
                                                            <MDBCardText className="ml-auto text-danger">
                                                                - {v.discount}%
                                                            </MDBCardText>
                                                        )}
                                                    </div>
                                                    <MDBCardText>
                                                        Lorem ipsum dolor sit
                                                        amet consectetur elit.
                                                        Praesentium corrupti
                                                    </MDBCardText>
                                                </MDBCardTitle>
                                            </MDBCardBody>
                                            <div className="cart text-center pb-3">
                                                <MDBBtn
                                                    color="danger"
                                                    className="px-2"
                                                    onClick={() => {
                                                        getData();
                                                        addData(v);
                                                    }}
                                                >
                                                    Add to Cart
                                                </MDBBtn>
                                                <Link
                                                    to={`/product details/${
                                                        Math.round(
                                                            Math.random() *
                                                                33333
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
                                                    className="px-2"
                                                    onClick={() => {
                                                        toast.success(
                                                            "Work is on progress please try again later"
                                                        );
                                                    }}
                                                >
                                                    Order Now
                                                </MDBBtn>
                                            </div>
                                        </MDBCard>
                                    </MDBCol>
                                ))}
                            </MDBRow>
                        </MDBCardBody>
                    </div>
                </MDBCol>
                <div className="pt-3 text-center">
                    <MDBRow>
                        <MDBCol>
                            <MDBPagination circle>
                                <MDBPageItem disabled>
                                    <MDBPageNav className="page-link">
                                        <span>First</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem disabled>
                                    <MDBPageNav
                                        className="page-link"
                                        aria-label="Previous"
                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">
                                            Previous
                                        </span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem active>
                                    <MDBPageNav className="page-link">
                                        1{" "}
                                        <span className="sr-only">
                                            (current)
                                        </span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav className="page-link">
                                        2
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav className="page-link">
                                        3
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav className="page-link">
                                        4
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav className="page-link">
                                        5
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav className="page-link">
                                        &raquo;
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav className="page-link">
                                        Last
                                    </MDBPageNav>
                                </MDBPageItem>
                            </MDBPagination>
                        </MDBCol>
                    </MDBRow>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    getData: () => {
        dispatch({ type: CART_INCREMENT });
    },
    addData: (v) => {
        addCart(v);
    },
    viewItem: (v) => {
        dispatch({ type: VIEW_DETAILS, payload: v });
    },
});

export default connect(null, mapDispatchToProps)(Cart);
