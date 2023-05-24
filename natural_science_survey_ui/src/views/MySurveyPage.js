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
import { fetchMacaulayLibraryData, fetchMacaulayLibraryHead, fetchRecords, fetchSpecies } from "reducers/actions"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import "./ReactTable.scss"

class MySurveyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: localStorage.getItem("userId"),
        };
    }

    componentDidMount() {
        const { macaulayLibraryHead, macaulayLibraryData } = this.props
        if (!macaulayLibraryHead || !macaulayLibraryData) {
            // this.props.fetchMacaulayLibraryData()
            // this.props.fetchMacaulayLibraryHead()
        }
        this.props.fetchRecords()
        this.props.fetchSpecies()
    }

    render() {
        const { classes, macaulayLibraryHead, macaulayLibraryData, records, species } = this.props
        var columns = [
            { Header: "", accessor: "preview", id: "preview", value: 128, desc: false },
            { Header: "Name", accessor: "species", id: "species", value: 192, desc: true },
            { Header: "Date", accessor: "dateObserved", id: "dateObserved", value: 128, desc: true },
            { Header: "Location", accessor: "location", id: "location", value: 320, desc: true },
            { Header: "", accessor: "action", id: "action", value: 48, desc: false },
        ]
        const { userId } = this.state
        columns = [...columns, { Header: "Approved", accessor: "checked", id: "checked", value: 128, desc: false }]
        const data = records.length && records?.filter(r => r.userID == userId).map((b, i) => {
            b.species = species[b.speciesID]?.commonName
            b.checked = <Checkbox disabled={false}></Checkbox>
            b.preview = <img src={b.photoUrl + 320} className={classes.previewImg} />
            b.action = <a href={"/survey/submit?assetId=" + b.assetId}><EditIcon /></a>
            b.checked = b.status == 1 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />
            return b
        }) || []
        return (
            <div className={classes.container}>
                <Button className={classes.button} style={{ marginBottom: "2%" }} onClick={() => { alert("All your selections will be withdrawed") }}>
                    <Chip label="Withdraw" color="primary" />
                </Button>
                <Button className={classes.button} style={{ marginBottom: "2%" }} onClick={() => { alert("All your selections will be submitted") }}>
                    <Chip label="Submit" color="primary" />
                </Button>
                <Button className={classes.button} style={{ marginBottom: "2%" }} onClick={() => { alert("All your selections will be deleted") }}>
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
        records: state.common.records || [],
        species: state.common.species?.length && state.common.species.reduce((o, s) => { o[s.speciesID] = s; return o }, {}) || []
    }
}

const mapDispatchToProps = {
    // fetchMacaulayLibraryData,
    // fetchMacaulayLibraryHead,
    fetchRecords,
    fetchSpecies,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SearchPageStyle)(MySurveyPage));