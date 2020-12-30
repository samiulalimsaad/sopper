import React from "react";
import { Dashboard } from "../pages/Dashboard";

export const Settings = () => {
    return (
        <div className="d-flex bg-light" style={{ minHeight: "600px" }}>
            <div className="w-25">
                <Dashboard />
            </div>
            <div class="w-75 text-left p-5 border border-black">
                <h1>Name : AAAA</h1>
                <h1>Email : AAA@gmail.com</h1>
                <h1>Password : ********</h1>
            </div>
        </div>
    );
};
