import React from "react";
import { Link } from "react-router-dom";

import { MDBBtn, MDBInput } from "mdbreact";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Accordion, Card } from "react-bootstrap";

const sideMenu = [
    {
        title: "ELECTRONICS",
        sub: [
            "Cameras",
            "Computers",
            "Tablets & laptop",
            "Mobile Phone",
            "Sound & Vision",
        ],
    },
    {
        title: "CLOTHES",
        sub: [
            "Women's Clothing",
            "Women's Shoes",
            "Women's Hand Bags",
            "Men's Clothings",
            "Men's Shoes",
            "Kids Clothing",
            "Kids Shoes",
        ],
    },
    {
        title: "HEALTH & BEAUTY",
        sub: ["A", "B", "C", "D", "E"],
    },
    {
        title: "SPORTS & LEISURE",
        sub: ["A", "B", "C", "D", "E"],
    },
    {
        title: "BOOKS & ENTERTAINMENTS",
        sub: ["A", "B", "C", "D", "E"],
    },
];

export const Sidebar = () => {
    return (
        <div
            className="my-5 py-5 px-1 d-block bg-white"
            style={{
                width: "300px",
                // backgroundColor: "#f7f7f7",
                height: "100%",
            }}
        >
            <Form className="container">
                <p className="h5 text-center mb-4">Filter Your Product</p>
                <FormGroup>
                    <MDBInput type="text" label="Search" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleRange">Price Range</Label>
                    <div className="d-flex">
                        <span className="font-weight-bold purple-text mr-2 mt-1">
                            {Math.round(Math.random() * 100 + 50)}
                        </span>
                        <MDBInput
                            type="range"
                            min="0"
                            max="100"
                            value={Math.round(Math.random() * 100)}
                        />
                        <span className="font-weight-bold purple-text mr-2 mt-1">
                            {Math.round(Math.random() * 100000 + 50)}
                        </span>
                    </div>
                </FormGroup>
                <FormGroup check>
                    <Label className="d-block">
                        <Input type="checkbox" className="mr-2" />
                        Men
                    </Label>
                    <Label className="d-block">
                        <Input type="checkbox" className="mr-2" />
                        Women
                    </Label>
                    <Label className="d-block">
                        <Input type="checkbox" className="mr-2" />
                        Kids
                    </Label>
                    <Label className="d-block">
                        <Input type="checkbox" className="mr-2" />
                        Technology
                    </Label>
                    <Label className="d-block">
                        <Input type="checkbox" className="mr-2" />
                        Furniture
                    </Label>
                </FormGroup>
                <MDBBtn>Search</MDBBtn>
                <MDBBtn color="warning">Reset</MDBBtn>
            </Form>
            <div className="mt-4 text-dark">
                <Accordion>
                    <Card className="border-0">
                        {sideMenu.map((v, i) => (
                            <div key={v.title}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey={i + 1}
                                    role="button"
                                >
                                    {v.title}
                                </Accordion.Toggle>
                                {v.sub.map((s) => (
                                    <Accordion.Collapse
                                        key={s}
                                        eventKey={i + 1}
                                    >
                                        <Link
                                            to="#"
                                            className="text-decoration-none text-dark"
                                        >
                                            <Card.Body className="border border-black m-0 p-0 pl-4">
                                                <i className="fas fa-chevron-right mr-2"></i>{" "}
                                                {s}
                                            </Card.Body>
                                        </Link>
                                    </Accordion.Collapse>
                                ))}
                            </div>
                        ))}
                    </Card>
                </Accordion>
            </div>
        </div>
    );
};
