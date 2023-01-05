import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "react-table";
import Grid from "@material-ui/core/Grid";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import Chip from '@mui/material/Chip';
import SearchPageStyle from "./SearchPageStyle"
import { fetchMacaulayLibraryData, fetchMacaulayLibraryHead } from "reducers/actions"
import { EXPERT_SURVEYOR } from "variables/common"
import "./ReactTable.scss"
import { Button } from "@material-ui/core";

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        const { macaulayLibraryHead, macaulayLibraryData } = this.props
        if (!macaulayLibraryHead || !macaulayLibraryData) {
            this.props.fetchMacaulayLibraryData()
            this.props.fetchMacaulayLibraryHead()
        }
    }

    render() {
        const { classes, macaulayLibraryHead, macaulayLibraryData } = this.props
        var columns = macaulayLibraryHead || []
        if (localStorage.getItem("userType") == EXPERT_SURVEYOR) {
            columns = [{ Header: "Type", accessor: "type", id: "type", value: 64, desc: false }, ...columns]
        }

        const data = macaulayLibraryData?.results.content.map((b, i) => {
            b.preview = <img src={b.previewUrl + 320} className={classes.previewImg} />
            b.action = <a href={"/survey/item?id=" + i}><FindInPageIcon /></a>
            b.type = i < 10 ? <Chip label="PRO" color="primary" /> : ""
            return b
        }) || []
        return (
            <div className={classes.container}>
                <Button className={classes.button} onClick={() => { alert("This is still a work in progress.") }}>
                    <Chip label="Export" color="primary" />
                </Button>
                {
                    localStorage.getItem("userType") == EXPERT_SURVEYOR &&
                    <Button className={classes.button} onClick={() => { alert("This is still a work in progress.") }}>
                        <Chip label="Import" color="primary" />
                    </Button>
                }
                <Grid container>
                    <Table
                        style={{ width: "100%" }}
                        data={data}
                        filterable
                        columns={columns}
                        defaultPageSize={10}
                        showPaginationTop
                        showPaginationBottom={false}
                        resized={columns}
                        sorted={columns}
                        className="-striped -highlight"
                    />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        macaulayLibraryHead: state.common.macaulayLibraryHead,
        macaulayLibraryData: state.common.macaulayLibraryData,
    }
}

const mapDispatchToProps = {
    fetchMacaulayLibraryData,
    fetchMacaulayLibraryHead
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SearchPageStyle)(SearchPage));