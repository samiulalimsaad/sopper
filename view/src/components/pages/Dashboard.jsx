import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBIcon,
} from "mdbreact";
import { Card } from "react-bootstrap";

export const Dashboard = () => {
    const [dash] = useState([
        {
            name: "profile",
            icon: "user",
            to: "user",
        },
        {
            name: "setting",
            to: "setting",
            icon: "tools",
        },
        {
            name: "notification",
            to: "notification",
            icon: "bell",
        },
    ]);
    return (
        <div>
            <div className="mt-4">
                <div className="text-center my-3">
                    <Link
                        to="/"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                    >
                        <img src="/img/logo.png" alt="LOGO" />
                    </Link>
                </div>
                <hr />
                <MDBNavbarNav className="mt-4">
                    {dash.map((v) => (
                        <MDBNavItem
                            key={v.name}
                            tag={Card.Header}
                            className="bg-light m-0 text-left pl-5"
                        >
                            <MDBNavLink
                                to={`/profile/${v.to}`}
                                tag={Link}
                                className="text-dark"
                            >
                                <MDBIcon fas icon={v.icon} className="pr-3" />
                                {v.name}
                            </MDBNavLink>
                        </MDBNavItem>
                    ))}
                </MDBNavbarNav>
            </div>
        </div>
    );
};
