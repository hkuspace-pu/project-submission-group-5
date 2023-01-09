import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

import pagesRoutes from "routes/pages"
import backgroundImage from "assets/background.jpeg";

class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const getComponent = (prop) => {
            return () => (
                <prop.component
                    {...this.props}
                />)
        }
        return window.location.pathname.indexOf("survey") != -1 ?
            (
                <Sidebar>
                    <Switch>
                        {pagesRoutes.map((prop, key) => {
                            if (prop.redirect) {
                                return (
                                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                                );
                            }
                            return (
                                <Route
                                    path={prop.path}
                                    render={getComponent(prop)}
                                    key={key}
                                />
                            );
                        })}
                    </Switch>
                </Sidebar>
            ) : (
                <div style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(" + backgroundImage + ")"
                }}>
                    <Header />
                    <Switch>
                        {pagesRoutes.map((prop, key) => {
                            if (prop.redirect) {
                                return (
                                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                                );
                            }
                            return (
                                <Route
                                    path={prop.path}
                                    render={getComponent(prop)}
                                    key={key}
                                />
                            );
                        })}
                    </Switch>
                    <Footer />
                </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);