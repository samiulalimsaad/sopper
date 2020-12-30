import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const company = [
        "About us",
        "We are hiring",
        "Meeting the team",
        "Copyright",
        "Terms of use",
        "Privacy policy",
        "Contact us",
    ];
    const support = [
        "Faq",
        "Blog",
        "Forum",
        "Documentation",
        "Refund policy",
        "Ticket system",
        "Billing system",
    ];
    const developers = [
        "Web Development",
        "SEO Marketing",
        "Theme",
        "Development",
        "Email Marketing",
        "Plugin Development",
        "Article Writing",
    ];
    const Partners = [
        "Adidas",
        "Nike",
        "Puma",
        "Veniam",
        "Ullamco",
        "Laboris",
        "Exercitation",
    ];

    return (
        <div>
            <div className="bg-dark text-warning">
                <div className="container pt-5">
                    <div className="row d-flex justify-content-around">
                        <div className="col-md-2 col-sm-12 pb-4">
                            <div className="py-5">
                                <Link
                                    to="/"
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        })
                                    }
                                >
                                    <img
                                        src="/img/logo.png"
                                        alt="SHOPPER"
                                        width="100"
                                    />
                                </Link>
                                <div className="py-5">
                                    <Link
                                        to="/ajkfsdkl"
                                        className="mx-1 text-warning"
                                        onClick={() =>
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            })
                                        }
                                    >
                                        <i className="fab fa-cc-visa"></i>
                                    </Link>
                                    <Link
                                        to="/ajkfsdkl"
                                        className="mx-1 text-primary"
                                        onClick={() =>
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            })
                                        }
                                    >
                                        <i className="fab fa-cc-paypal"></i>
                                    </Link>
                                    <Link
                                        to="/ajkfsdkl"
                                        className="mx-1 text-danger"
                                        onClick={() =>
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            })
                                        }
                                    >
                                        <i className="fab fa-cc-mastercard"></i>
                                    </Link>
                                    <Link
                                        to="/ajkfsdkl"
                                        className="mx-1 text-success"
                                        onClick={() =>
                                            window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            })
                                        }
                                    >
                                        <i className="fab fa-cc-discover"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 pb-2 ">
                            <h6 className="font-weight-bold">COMPANY</h6>
                            <LiItems data={company} />
                        </div>
                        <div className="col-md-2 col-sm-6 pb-2 ">
                            <h6 className="font-weight-bold">SUPPORT</h6>
                            <LiItems data={support} />
                        </div>
                        <div className="col-md-2 col-sm-6 pb-2 ">
                            <h6 className="font-weight-bold">DEVELOPERS</h6>
                            <LiItems data={developers} />
                        </div>
                        <div className="col-md-2 col-sm-6 pb-2 ">
                            <h6 className="font-weight-bold">PARTNERS</h6>
                            <LiItems data={Partners} />
                        </div>
                    </div>
                </div>
                <div className="text-right pb-3 pr-4">
                    <span
                        className="btn btn-danger sticky-bottom rounded-circle"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                    >
                        <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 16 16"
                            className="bi bi-arrow-up"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                            />
                        </svg>
                    </span>
                </div>
            </div>
            <div
                className="py-3 text-light text-center"
                style={{ backgroundColor: "#000" }}
            >
                <span>&#169; 2020 SHOPPER All right reserved.</span>
            </div>
        </div>
    );
};

export const LiItems = ({ data }) => {
    return (
        <ul className="list-unstyled">
            {data.map((value, index) => (
                <li key={index}>
                    <Link
                        className="text-decoration-none text-light"
                        to={`/${value}`}
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                    >
                        {value}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
export default Footer;
