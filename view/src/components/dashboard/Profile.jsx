import React from "react";
import { Dashboard } from "../pages/Dashboard";

export const Profile = () => {
    return (
        <div className="d-flex bg-light" style={{ minHeight: "600px" }}>
            <div className="w-25">
                <Dashboard />
            </div>
            <div className="w-75 p-5 border border-black">
                <h1>Name : aaaa</h1>
                <h1>Balance : $10000</h1>
            </div>
        </div>
    );
};
