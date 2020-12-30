import React from "react";
import GoogleMapReact from "google-map-react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBIcon,
    MDBInput,
} from "mdbreact";

const Contact = () => {
    return (
        <div className="py-5">
            <div className="container card card-body">
                <h2 className="text-left">Visit Us</h2>
                <hr />
                <div className="row py-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4 px-3 text-left">
                        <h4 className="mb-4">Contact Details</h4>
                        <p className="mb-0 pb-0">18 Fresno, CA 93727, USA</p>
                        <p className="pb-0">
                            <a href="/">info@shopper.com </a>
                        </p>
                        <p className="mb-1">
                            <span className="font-weight-bold">Tel: </span>
                            123-456-6780
                        </p>
                        <p className="mb-1">
                            <span className="font-weight-bold">Fax: </span>
                            123-456-6789
                        </p>
                        <p className="mb-1">
                            <span className="font-weight-bold">web: </span>
                            <a href="/">shopper.com</a>
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 px-3 text-left">
                        <h4 className="mb-4">Opening Hours</h4>
                        <p className="mb-1">Sunday - Thursday</p>
                        <p className="mb-1">09:00am - 09:00pm</p>
                        <p className="mb-1">Friday</p>
                        <p className="mb-1">05:00pm - 9:00pm</p>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 mb-4 px-3 text-left">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="12">
                                    <form>
                                        <p className="h5 text-center mb-4">
                                            Email Us
                                        </p>
                                        <div className="grey-text">
                                            <MDBInput
                                                label="Your name"
                                                icon="user"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Your email"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="Subject"
                                                icon="tag"
                                                group
                                                type="text"
                                                validate
                                                error="wrong"
                                                success="right"
                                            />
                                            <MDBInput
                                                type="textarea"
                                                rows="2"
                                                label="Your message"
                                                icon="pencil-alt"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <MDBBtn outline color="secondary">
                                                Send
                                                <MDBIcon
                                                    far
                                                    icon="paper-plane"
                                                    className="ml-1"
                                                />
                                            </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div style={{ height: "50vh", width: "100%" }}>
                    <GoogleMapReact
                        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                        defaultCenter={{
                            lat: 59.95,
                            lng: 30.33,
                        }}
                        defaultZoom={11}
                    ></GoogleMapReact>
                </div>
            </div>
        </div>
    );
};

export default Contact;
