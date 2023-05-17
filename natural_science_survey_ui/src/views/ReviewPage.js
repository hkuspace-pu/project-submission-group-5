import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "react-table";
import Grid from "@material-ui/core/Grid";
import EditIcon from '@mui/icons-material/Edit';
import SearchPageStyle from "./SearchPageStyle"
import { fetchMacaulayLibraryData, fetchMacaulayLibraryHead, fetchRecords } from "reducers/actions"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import "./ReactTable.scss"
import Button from "@material-ui/core/Button";

class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: []
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
        const { checked } = this.state
        var columns = [
            { Header: "", accessor: "preview", id: "preview", value: 128, desc: false },
            { Header: "Name", accessor: "speciesID", id: "speciesID", value: 192, desc: true },
            { Header: "Date", accessor: "dateObserved", id: "dateObserved", value: 128, desc: true },
            { Header: "Observer", accessor: "userID", id: "userID", value: 128, desc: true },
            { Header: "Location", accessor: "location", id: "location", value: 320, desc: true },
            { Header: "", accessor: "action", id: "action", value: 48, desc: false },
            { Header: "Approved", accessor: "status", id: "status", value: 128, desc: false }
        ]
        const data = records.length && records?.map((b, i) => {
            b.preview = <img src={b.photoUrl + 320} className={classes.previewImg} />
            b.action = <a href={"/survey/item?id=" + b.recordID}><EditIcon /></a>
            b.status = <Button onClick={() => { checked[i] = !checked[i]; this.setState({ checked }) }}>{checked[i] ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}</Button>
            return b
        }) || []
        return (
            <div className={classes.container}>
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SearchPageStyle)(ReviewPage));