import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../utils/Footer";
import Header from "../utils/Header";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Man from "./Man";
import Women from "./Women";
import Kids from "./Kids";
import Digital from "./Digital";
import Furniture from "./Furniture";
import OtherServices from "./OtherServices";
import PageNotFound from "./PageNotFound";
import { Profile } from "../dashboard/Profile";
import { Settings } from "../dashboard/Settings";
import { Notification } from "../dashboard/Notification";
import ProductDetails  from "./ProductDetails";
import Carts from "./Carts";

const LinkedPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about us" exact component={About} />
                    <Route path="/contact us" exact component={Contact} />
                    <Route path="/men" exact component={Man} />
                    <Route path="/women" exact component={Women} />
                    <Route path="/kids" exact component={Kids} />
                    <Route path="/digital" exact component={Digital} />
                    <Route path="/furniture" exact component={Furniture} />
                    <Route path="/carts" exact component={Carts} />
                    <Route
                        path="/other service"
                        exact
                        component={OtherServices}
                    />
                    <Route path="/profile/user" exact component={Profile} />
                    <Route path="/profile/setting" exact component={Settings} />
                    <Route
                        path="/profile/notification"
                        exact
                        component={Notification}
                    />
                    <Route
                        path="/product details/:id"
                        exact
                        component={ProductDetails}
                    />
                    <Route path="/" component={PageNotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default LinkedPage;
