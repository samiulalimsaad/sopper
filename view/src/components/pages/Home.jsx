import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getHomePage } from "../redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CART_INCREMENT, VIEW_DETAILS } from "../redux/actionTypes";
import { addCart } from "../redux";

import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBRating,
    MDBMedia,
} from "mdbreact";
import { Error, Loading } from "../utils/ErrorOrLoading";
import { Link } from "react-router-dom";

const Home = ({ data, getData, cartCount, viewItem,addData }) => {
    useEffect(() => {
        getData();
    }, [getData]);
    const { latest, items, features, feedback, partners } = data.data;
    return (
        <div className="bg-light">
            {data.loading ? (
                <Loading />
            ) : data.error ? (
                <Error error={data.error} />
            ) : (
                <div>
                    {items && (
                        <div
                            style={{
                                background: "#f7f7f7",
                            }}
                        >
                            <MDBCarousel
                                activeItem={1}
                                length={items.length}
                                showControls={true}
                                showIndicators={false}
                                className="z-depth-1"
                                slide
                            >
                                <MDBCarouselInner>
                                    {items.map((v, index) => (
                                        <MDBCarouselItem
                                            key={index}
                                            itemId={index + 1}
                                        >
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src={require(`../../../public${v.src}`)}
                                                    alt={v.product}
                                                    style={{
                                                        height: "85vh",
                                                    }}
                                                />
                                                <MDBMask overlay="black-strong" />
                                            </MDBView>
                                            <MDBCarouselCaption>
                                                <h3 className="h3-responsive text-light">
                                                    {v.product}
                                                </h3>
                                                <p className="text-light">
                                                    Price {v.price}{" "}
                                                    <span
                                                        style={{
                                                            fontSize: "20px",
                                                        }}
                                                    >
                                                        ৳
                                                    </span>
                                                </p>
                                            </MDBCarouselCaption>
                                        </MDBCarouselItem>
                                    ))}
                                </MDBCarouselInner>
                            </MDBCarousel>
                            <section className="py-5">
                                <div className="container bg-white">
                                    <div className="text-center">
                                        <h2 className="display-4 pt-5">
                                            Latest Products
                                        </h2>
                                        <p className="lead w-50 m-auto">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut et
                                            dolore magna aliqua. Ut enim ad
                                            minim veniam
                                        </p>
                                    </div>
                                    <MDBRow className="p-5">
                                        {latest.length > 0 &&
                                            latest.map((v, i) => (
                                                <MDBCol
                                                    key={i}
                                                    className="m-0 p-0"
                                                    md="2"
                                                >
                                                    <MDBView hover zoom>
                                                        <img
                                                            src={require(`../../../public${v.src}`)}
                                                            alt="Latest"
                                                            className="img-fluid"
                                                            style={{
                                                                height: "150px",
                                                                margin:
                                                                    "0 auto",
                                                            }}
                                                        />
                                                        <MDBMask
                                                            className="flex-center"
                                                            overlay="stylish-strong"
                                                        >
                                                            <span
                                                                className="btn btn-success"
                                                                onClick={() => {
                                                                    cartCount();
																	addData(v)
                                                                    toast.error(
                                                                        "Your Item is in cart"
                                                                    );
                                                                }}
                                                            >
                                                                <i class="fas fa-shopping-cart"></i>
                                                            </span>
                                                            <Link
                                                                to={`/product details/${
                                                                    Math.round(
                                                                        Math.random() *
                                                                            33333
                                                                    ) + 10000
                                                                }`}
                                                                className="btn
                                                                btn-success"
                                                                onClick={() => {
                                                                    viewItem(v);
                                                                    toast.warning(
                                                                        "Work is on progress please try again later"
                                                                    );
                                                                }}
                                                            >
                                                                <i className="fa fa-eye"></i>
                                                            </Link>
                                                            <span
                                                                className="btn btn-success"
                                                                onClick={() => {
                                                                    toast.success(
                                                                        "Work is on progress please try again later"
                                                                    );
                                                                }}
                                                            >
                                                                <i class="fas fa-money-check-alt"></i>
                                                            </span>
                                                        </MDBMask>
                                                    </MDBView>
                                                </MDBCol>
                                            ))}
                                    </MDBRow>
                                </div>
                            </section>
                            <hr />
                            <MDBContainer>
                                <div className="bg-white p-5">
                                    <div className="text-center pb-5">
                                        <h2 className="display-4">Features</h2>
                                        <p className="lead w-50 m-auto">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut et
                                            dolore magna aliqua. Ut enim ad
                                            minim veniam
                                        </p>
                                    </div>
                                    <div className="row">
                                        {features.map((value, i) => (
                                            <div
                                                key={i}
                                                className="col-md-3 col-sm-12 mb-3"
                                            >
                                                <Features
                                                    icon={value.icon}
                                                    title={value.title}
                                                    description={
                                                        value.description
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </MDBContainer>
                            <hr />
                            <MDBContainer>
                                <div className="bg-white p-5">
                                    <div className="text-center">
                                        <h2 className="display-4">
                                            Customers Feedback
                                        </h2>
                                        <hr />
                                    </div>
                                    <div className="">
                                        <MDBCarousel
                                            activeItem={1}
                                            length={feedback.length - 1}
                                            showControls={true}
                                            showIndicators={true}
                                            className="z-depth-1"
                                            slide={true}
                                        >
                                            <MDBCarouselInner>
                                                <MDBRow>
                                                    {feedback.map((v, i) => (
                                                        <MDBCol key={i} md="12">
                                                            <MDBCarouselItem
                                                                itemId={i}
                                                            >
                                                                <MDBMedia>
                                                                    <MDBMedia
                                                                        left
                                                                        middle
                                                                        className="mr-3"
                                                                    >
                                                                        <MDBMedia
                                                                            object
                                                                            className="mx-3"
                                                                            src={require(`../../../public${v}`)}
                                                                            alt="Card image cap"
                                                                            style={{
                                                                                height:
                                                                                    "200px",
                                                                                width:
                                                                                    "auto",
                                                                                borderRadius:
                                                                                    "50%",
                                                                            }}
                                                                        />
                                                                    </MDBMedia>
                                                                    <MDBMedia
                                                                        body
                                                                    >
                                                                        <MDBMedia
                                                                            heading
                                                                            className="pt-5"
                                                                        >
                                                                            {
                                                                                [
                                                                                    "consectetur",
                                                                                    "architecto",
                                                                                    "assumenda",
                                                                                    "numquam",
                                                                                    "voluptates",
                                                                                    "molestias",
                                                                                    "blanditiis",
                                                                                ][
                                                                                    Math.floor(
                                                                                        Math.random() *
                                                                                            6
                                                                                    )
                                                                                ]
                                                                            }
                                                                        </MDBMedia>
                                                                        <p className="p-0 m-0">
                                                                            <MDBRating />
                                                                        </p>
                                                                        <p className="lead pr-3 text-justify">
                                                                            {
                                                                                [
                                                                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus natus tenetur soluta, molestias, laborum, quia itaque sint quas adipisci eligendi sequi saepe ipsam perspiciatis neque odit numquam deserunt. Ad ratione itaque neque!",
                                                                                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolor commodi voluptatum tempora eaque, ad vero placeat dicta adipisci, accusamus accusantium. Officia facilis quod incidunt facere fuga id libero consequatur rem excepturi placeat.",
                                                                                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum provident distinctio aspernatur quidem. Laboriosam ad asperiores, deleniti saepe expedita inventore qui et officiis esse tempora quam soluta a corporis quaerat labore debitis! Accusantium!",
                                                                                ][
                                                                                    Math.floor(
                                                                                        Math.random() *
                                                                                            3
                                                                                    )
                                                                                ]
                                                                            }
                                                                        </p>
                                                                    </MDBMedia>
                                                                </MDBMedia>
                                                            </MDBCarouselItem>
                                                        </MDBCol>
                                                    ))}
                                                </MDBRow>
                                            </MDBCarouselInner>
                                        </MDBCarousel>
                                    </div>
                                </div>
                            </MDBContainer>

                            <section
                                className="py-5"
                                style={{
                                    minHeight: "400px",
                                    background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url(./img/Home/partner-bg.png)`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="text-center text-light">
                                    <h2 className="display-4">Our Partners</h2>
                                    <p className="lead w-50 offset-3 py-3">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit, sed do eiusmod tempor
                                        incididunt ut et dolore magna aliqua. Ut
                                        enim ad minim veniam
                                    </p>
                                </div>
                                <div className="pt-3 text-center" id="partner">
                                    {partners.map((v, i) => (
                                        <img
                                            key={i}
                                            src={require(`../../../public${v}`)}
                                            alt=""
                                            className="img-fluid m-2"
                                        />
                                    ))}
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export const Features = ({ icon, title, description }) => (
    <MDBCard>
        <MDBCardBody
            className="text-left featuresIcon"
            style={{ cursor: "pointer" }}
        >
            <div style={{ fontSize: "50px", color: "tomato" }}>
                <i className={`p-1 ${icon}`}></i>
            </div>
            <div className="py-3">
                <h3>{title}</h3>
                <p className="lead">{description}</p>
            </div>
        </MDBCardBody>
    </MDBCard>
);

const mapStateToProps = (state) => ({ data: state.home });
const mapDispatchToProps = (dispatch) => ({
    getData: () => {
        dispatch(getHomePage());
	},
	addData: (v) => {
        addCart(v);
    },
    viewItem: (v) => {
        dispatch({ type: VIEW_DETAILS, payload: v });
    },
    cartCount: () => {
        dispatch({ type: CART_INCREMENT });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
