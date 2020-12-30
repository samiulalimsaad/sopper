import React from "react";
import { Dashboard } from "../pages/Dashboard";

export const Notification = () => {
    return (
        <div className="d-flex bg-light" style={{ minHeight: "600px" }}>
            <div className="w-25">
                <Dashboard />
            </div>
            <div className="row w-75 bg-light border border-black"></div>
        </div>
    );
};
