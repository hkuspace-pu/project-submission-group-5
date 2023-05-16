import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "react-table";
import Grid from "@material-ui/core/Grid";
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import SearchPageStyle from "./SearchPageStyle"
import { fetchMacaulayLibraryData, fetchMacaulayLibraryHead, fetchRecords } from "reducers/actions"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import "./ReactTable.scss"

class MySurveyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.getItem("userId") || "USER2636335",
        };
    }

    componentDidMount() {
        const { macaulayLibraryHead, macaulayLibraryData } = this.props
        if (!macaulayLibraryHead || !macaulayLibraryData) {
            // this.props.fetchMacaulayLibraryData()
            // this.props.fetchMacaulayLibraryHead()
        }
        this.props.fetchRecords()
    }

    render() {
        const { classes, macaulayLibraryHead, macaulayLibraryData, records } = this.props
        var columns = [
            { Header: "", accessor: "preview", id: "preview", value: 128, desc: false },
            { Header: "Name", accessor: "speciesID", id: "speciesID", value: 192, desc: true },
            { Header: "Date", accessor: "dateObserved", id: "dateObserved", value: 128, desc: true },
            { Header: "Observer", accessor: "userID", id: "userID", value: 128, desc: true },
            { Header: "Location", accessor: "location", id: "location", value: 320, desc: true },
            { Header: "", accessor: "action", id: "action", value: 48, desc: false },
        ]
        const { userId } = this.state
        columns = [...columns, { Header: "Approved", accessor: "status", id: "status", value: 128, desc: false }] 
        const data = records.length && records?.map((b, i) => {
            b.checked = <Checkbox disabled={false}></Checkbox>
            b.preview = <img src={b.previewUrl + 320} className={classes.previewImg} />
            b.action = <a href={"/survey/submit?assetId=" + b.assetId}><EditIcon /></a>
            b.status = i % 2 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />
            return b
        }) || []
        return (
            <div className={classes.container}>
                <Button className={classes.button} style={{marginBottom: "2%"}} onClick={() => { alert("All your selections will be withdrawed") }}>
                    <Chip label="Withdraw" color="primary" />
                </Button>
                <Button className={classes.button} style={{marginBottom: "2%"}} onClick={() => { alert("All your selections will be submitted") }}>
                    <Chip label="Submit" color="primary" />
                </Button>
                <Button className={classes.button} style={{marginBottom: "2%"}} onClick={() => { alert("All your selections will be deleted") }}>
                    <Chip label="Delete" color="primary" />
                </Button>
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
        // macaulayLibraryHead: state.common.macaulayLibraryHead,
        // macaulayLibraryData: state.common.macaulayLibraryData,
        records: state.common.records || []
    }
}

const mapDispatchToProps = {
    // fetchMacaulayLibraryData,
    // fetchMacaulayLibraryHead,
    fetchRecords,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SearchPageStyle)(MySurveyPage));