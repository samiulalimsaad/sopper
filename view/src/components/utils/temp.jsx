<div className="card card-body px-5" style={{ backgroundColor: "#f7f7f7" }}>
    <div className="text-center py-5 container text-dark">
        <h2 className="display-4 text-capitalize">{name}</h2>
        <hr />
    </div>
    <div className="row">
        <MDBCol>
            {items.map((v) => (
                <div className=" p-0 m-0" id="cart">
                    <MDBCard
                        className="m-0 p-0 border-0 overflow-hidden"
                        style={{
                            width: "32%",
                        }}
                    >
                        <MDBCardImage
                            className="img-fluid"
                            src={require(`../../../public${v.src}`)}
                            alt="Card cap"
                            style={{
                                maxHeight: "250px",
                                minHeight: "250px",
                                width: "100%",
                                overflow: "hidden",
                            }}
                        />
                    </MDBCard>
                    <MDBCardBody className="ml-auto d-flex card-body">
                        <MDBCardTitle className="mr-auto">
                            <h4>{v.product}</h4>
                            <div className="d-flex">
                                <MDBCardText className="text-danger">
                                    {v.discount}
                                </MDBCardText>
                                <MDBCardText className="ml-auto text-success">
                                    {v.price}
                                </MDBCardText>
                            </div>
                            <MDBCardText
                                className="lead"
                                style={{ fontSize: "16px" }}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Praesentium corrupti
                            </MDBCardText>
                        </MDBCardTitle>
                    </MDBCardBody>
                    <div className="cart text-center pb-3">
                        <MDBBtn className="btn btn-danger my-1 px-2">
                            Add to Cart
                        </MDBBtn>
                        <MDBBtn className="btn btn-warning my-1 mx-3 px-2 text-light">
                            view Details
                        </MDBBtn>
                        <MDBBtn className="btn btn-success my-1 px-2">
                            Order Now
                        </MDBBtn>
                    </div>
                </div>
            ))}
        </MDBCol>
    </div>
</div>;
