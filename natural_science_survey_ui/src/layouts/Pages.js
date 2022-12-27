import React from "react";
import { connect } from "react-redux";
import App from "views/App"
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Header/>
                <App/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);