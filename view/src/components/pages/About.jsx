import React from "react";
import { Link } from "react-router-dom";
import { Progress } from "reactstrap";

const About = () => {
    const teams = [
        {
            name: "Jeffery Poole",
            title: "CEO",
        },
        {
            name: "Isabelle Dean",
            title: "Co-CEO",
        },
        {
            name: "Mike Kennedy",
            title: "Marketing Manager",
        },
        {
            name: "Edwin Gross",
            title: "Developer",
        },
        {
			name: "Mable Schwartz",
			title: "Developer",
        },
        {
            name: "Adele Washington",
            title: "UI/UX Designer",
        },
    ];
    return (
        <div>
            <div
                style={{
                    minHeight: "500px",
                    background: `url(./img/About/background.jpg)`,
                    backgroundSize: "cover",
                }}
            >
                <h1
                    className="text-center text-light display-2"
                    style={{
                        paddingTop: "350px",
                    }}
                >
                    About Us
                </h1>
            </div>
            <section className="py-5">
                <div className="container card card-body p-0">
                    <div className="row">
                        <div
                            className="col-md-6 col-sm-12 rounded"
                            style={{
                                minHeight: "500px",
                                background: `url(./img/About/about-img.png)`,
                                backgroundSize: "cover",
                            }}
                        ></div>
                        <div className="col-md-6 col-sm-12 text-center pt-5 mt-5">
                            <h2 className="display-3">Who we are</h2>
                            <p className="lead text-left px-5 mt-4">
                                Photographs are a way of preserving a moment in
                                our lives for the rest of our lives. Many of us
                                have at least been tempted at the flashy array
                                of photo printers which seemingly leap off the
                                shelves at even the least tech-savvy. It surely
                                seems old fashioned to talk about 35mm film and
                                non-digital cameras in today’s day and age.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="bg-danger"
                style={{
                    minHeight: "700px",
                    background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url(./img/About/blog2.png)`,
                    backgroundSize: "cover",
                }}
            >
                <div className="container">
                    <h1
                        className="text-center text-light display-2"
                        style={{
                            paddingTop: "150px",
                        }}
                    >
                        Our Skills
                    </h1>
                    <p className="py-4 px-5 mx-5 text-center text-light">
                        All users on MySpace will know that there are millions
                        of people out there. Every day besides so many people
                        joining this community.
                    </p>
                    <div className="row py-5 text-light">
                        <div className="col-md-6">
                            <p className="lead mb-2">Shipping</p>
                            <Progress color="info" value="85">
                                85%
                            </Progress>
                        </div>
                        <div className="col-md-6">
                            <p className="lead mb-2">Refund & Return</p>
                            <Progress color="warning" value="80">
                                80%
                            </Progress>
                        </div>
                    </div>
                    <div className="row py-5 text-light">
                        <div className="col-md-6">
                            <p className="lead mb-2">Customer Care</p>
                            <Progress color="success" value="85">
                                95%
                            </Progress>
                        </div>
                        <div className="col-md-6">
                            <p className="lead mb-2">Customer Satisfaction</p>
                            <Progress color="danger" value="90">
                                90%
                            </Progress>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light">
                <div className="container bg-light">
                    <div className="">
                        <h2 className="display-4 text-center d-block">
                            Our Team
                        </h2>
                        <p className="lead py-4 text-center px-5 mx-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut et dolore
                            magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div className="row">
                        {teams.map((value, index) => (
                            <div key={index} className="col-md-4 col-sm-6">
                                <Team
                                    src={index + 1}
                                    name={value.name}
                                    title={value.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export const Team = ({ src = 1, name = "aaa", title = "bbb" }) => (
    <div className="card text-center my-5">
        <img
            src={`./img/About/team${src}.png`}
            alt={name}
            className="img-fluid"
        />
        <div className="card-body">
            <h3>{name}</h3>
            <p className="lead">{title}</p>
            <div className="d-flex justify-content-around px-5 social">
                <Link to='#' style={{ color: "#333" }}>
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to='#' style={{ color: "#333" }}>
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to='#' style={{ color: "#333" }}>
                    <i className="fab fa-linkedin"></i>
                </Link>
                <Link to='#' style={{ color: "#333" }}>
                    <i className="fab fa-youtube"></i>
                </Link>
            </div>
        </div>
    </div>
);

export default About;
