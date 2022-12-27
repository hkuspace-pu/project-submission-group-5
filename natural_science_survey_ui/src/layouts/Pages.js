import React from "react";
import { connect } from "react-redux";
import App from "views/App"

class Pages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <App/>
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);