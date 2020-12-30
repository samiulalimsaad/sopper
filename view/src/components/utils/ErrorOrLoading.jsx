import React from "react";

export const Loading = () => {
    return (
        <div>
            <div className="container d-flex" style={{ height: "500px" }}>
                <div className="row justify-content-center align-self-center mx-auto">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Error = ({ error }) => {
    return (
        <div>
            <div className="container d-flex" style={{ height: "500px" }}>
                <div className="row justify-content-center align-self-center mx-auto">
                    <h4>{error}</h4>
                </div>
            </div>
        </div>
    );
};
