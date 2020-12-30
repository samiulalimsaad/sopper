import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBFormInline,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from "mdbreact";

import { Nav } from "react-bootstrap";
import Login from "./Login";

const Header = ({ data }) => {
    const [state, setState] = useState(false);

    const toggle = () => {
        setState(!state);
    };
    const [otherServices] = useState([
        "Food Delivery",
        "Mobile Banking",
        "Service One",
        "Service Two",
        "Service Three",
    ]);
    const [common] = useState([
        "Casual",
        "Standard",
        "Sports",
        "T-Shirts",
        "Formal",
        "Jeans",
        "Shirts",
        "Trousers",
        "Sarees",
    ]);
    const [digital] = useState([
        "Camera",
        "Mobile",
        "Tablet",
        "Laptop",
        "Television",
        "Fridge",
        "Air Condition",
        "Accessories",
    ]);
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <MDBNavbar dark expand="lg" className="fixed-top bg-dark">
                <MDBNavbarBrand>
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
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink
                                to="/"
                                tag={Link}
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Home
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Men</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    {common.map((v) => (
                                        <MDBDropdownItem
                                            to="/men"
                                            as={Link}
                                            tag={Link}
                                            key={v}
                                            onClick={() =>
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth",
                                                })
                                            }
                                        >
                                            {v}
                                        </MDBDropdownItem>
                                    ))}
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Women</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    {common.map((v) => (
                                        <MDBDropdownItem
                                            to="/women"
                                            tag={Link}
                                            key={v}
                                            onClick={() =>
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth",
                                                })
                                            }
                                        >
                                            {v}
                                        </MDBDropdownItem>
                                    ))}
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Kids</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    {common.map((v) => (
                                        <MDBDropdownItem
                                            to="/kids"
                                            tag={Link}
                                            key={v}
                                            onClick={() =>
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth",
                                                })
                                            }
                                        >
                                            {v}
                                        </MDBDropdownItem>
                                    ))}
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">Digital</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    {digital.map((v) => (
                                        <MDBDropdownItem
                                            to="/digital"
                                            tag={Link}
                                            key={v}
                                            onClick={() =>
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth",
                                                })
                                            }
                                        >
                                            {v}
                                        </MDBDropdownItem>
                                    ))}
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <span className="mr-2">other Services</span>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    {otherServices.map((v) => (
                                        <MDBDropdownItem
                                            to="/other service"
                                            tag={Link}
                                            key={v}
                                            onClick={() =>
                                                window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth",
                                                })
                                            }
                                        >
                                            {v}
                                        </MDBDropdownItem>
                                    ))}
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                                to="/furniture"
                                tag={Link}
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Furniture
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                                to="about us"
                                tag={Link}
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }
                            >
                                About us
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                                to="contact us"
                                tag={Link}
                                onClick={() =>
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    })
                                }
                            >
                                Contact us
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            <MDBNavbar className="bg-light" style={{ marginTop: "65px" }}>
                <Nav className="d-flex flex-row" navbar>
                    <Nav.Item className="border px-3">
                        <Nav.Link
                            as={Link}
                            to="/profile/user"
                            className="text-dark"
                        >
                            My Account
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="border px-3" onClick={toggle}>
                        <Nav.Link className="text-dark" as={Link} to="/carts">
                            My Carts
                            {data.cart > 0 && (
                                <sup className="badge badge-primary">
                                    {data.cart}
                                </sup>
                            )}
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="border px-3" onClick={toggle}>
                        <Nav.Link
                            as={Link}
                            to="/checkout"
                            className="text-dark"
                        >
                            Checkout
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="border px-3" onClick={toggle}>
                        <Nav.Link className="text-dark">Login</Nav.Link>
                    </Nav.Item>
                </Nav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBFormInline waves>
                            <div className="md-form my-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </div>
                        </MDBFormInline>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
            {state && <Login toggle={toggle} state={state} />}
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.cartCount,
});

export default connect(mapStateToProps)(Header);
