import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBCol, MDBRow, MDBMedia, MDBBtn } from "mdbreact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CART_INCREMENT } from "../redux/actionTypes";
import { addCart } from "../redux";

import ReactImageMagnify from "react-image-magnify";

const ProductDetails = ({ data, getData, addData }) => {
    const [state, setState] = useState({});
    useEffect(() => {
        setState(data.view);
    }, []);
    const { src, product, price, discount } = state;
    const imageProps = src && {
        smallImage: {
            isFluidWidth: true,
            src: require(`../../../public${src}`),
            width: 1000,
            height: 500,
        },
        largeImage: {
            src: require(`../../../public${src}`),
            width: 2000,
            height: 1800,
        },
        enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
    };
    return (
        <div
            className="bg-light py-5"
            onLoad={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
        >
            {src && (
                <MDBContainer className="card card-body">
                    <MDBRow>
                        <MDBCol md="12">
                            <MDBMedia>
                                <MDBMedia left middle className="mr-3">
                                    <div
                                        style={{
                                            height: 500,
                                            width: 500,
                                        }}
                                    >
                                        <ReactImageMagnify {...imageProps} />
                                    </div>
                                </MDBMedia>
                                <MDBMedia body>
                                    <MDBMedia heading className="pt-5 pb-4">
                                        {product}
                                    </MDBMedia>
                                    <div className="ml-auto d-flex">
                                        {!discount ? (
                                            <p className="lead pr-3 text-danger">
                                                {price}{" "}
                                                <span
                                                    style={{ fontSize: "20px" }}
                                                >
                                                    ৳
                                                </span>
                                            </p>
                                        ) : (
                                            <>
                                                <del className="lead pr-3 text-danger">
                                                    {price}{" "}
                                                    <span
                                                        style={{
                                                            fontSize: "20px",
                                                        }}
                                                    >
                                                        ৳
                                                    </span>
                                                </del>
                                                <p className="lead pr-3 ml-5 text-success">
                                                    <sup
                                                        className="lead mr-2 badge-primary px-2 rounded"
                                                        style={{
                                                            fontSize: "12px",
                                                        }}
                                                    >
                                                        Now
                                                    </sup>
                                                    {Math.round(
                                                        price -
                                                            price *
                                                                (discount / 100)
                                                    )}{" "}
                                                    <span
                                                        style={{
                                                            fontSize: "20px",
                                                        }}
                                                    >
                                                        ৳
                                                    </span>
                                                </p>
                                                <p className="lead pr-3 ml-5 text-warning">
                                                    - {discount}%
                                                </p>
                                            </>
                                        )}
                                        <MDBBtn
                                            color="danger"
                                            className="mx-2 ml-auto"
                                            style={{ fontSize: "10px" }}
                                            onClick={() => {
                                                getData();
                                                addData(state);
                                                toast.error(
                                                    "Your Item is in cart"
                                                );
                                            }}
                                        >
                                            Add to Cart
                                        </MDBBtn>
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
                                            consectetur adipisicing elit. Magnam
                                            blanditiis quidem qui, eos
                                            consequatur tempore vero aperiam
                                            vitae quo inventore reprehenderit
                                            facere molestias, impedit
                                            exercitationem dignissimos expedita
                                            ratione voluptatem iusto labore
                                            veritatis laborum? Ducimus nesciunt
                                            veritatis reprehenderit dolor nemo
                                            earum sapiente laborum, maiores non
                                            nulla eos quasi distinctio quo quis
                                            itaque facere vitae adipisci aliquam
                                            modi sit excepturi velit.
                                            Consequuntur porro voluptate
                                            deleniti quas voluptas voluptates
                                            ipsum deserunt eos, accusantium,
                                            quasi fugiat. Nihil sunt illo hic
                                            atque repudiandae laboriosam quod
                                            est possimus voluptatibus accusamus
                                            corporis, cupiditate suscipit.
                                            Iusto, alias fugit culpa beatae quae
                                            eos fugiat modi dolorum, nihil sunt
                                            quasi assumenda dolor nulla sed
                                            adipisci, libero voluptatum laborum
                                            laudantium? Temporibus, sapiente.
                                        </p>
                                    </div>
                                </MDBMedia>
                            </MDBMedia>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            )}
            <ToastContainer />
        </div>
    );
};

const mapStateToProps = (state) => ({ data: state.view });
const mapDispatchToProps = (dispatch) => ({
    getData: () => {
        dispatch({ type: CART_INCREMENT });
    },
    addData: (v) => {
        addCart(v);
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
