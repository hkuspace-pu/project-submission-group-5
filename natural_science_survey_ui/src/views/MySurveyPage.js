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
import { fetchMacaulayLibraryData, fetchMacaulayLibraryHead } from "reducers/actions"
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
            this.props.fetchMacaulayLibraryData()
            this.props.fetchMacaulayLibraryHead()
        }
    }

    render() {
        const { classes, macaulayLibraryHead, macaulayLibraryData } = this.props
        const { userId } = this.state
        const columns = macaulayLibraryHead ? [{ Header: "", accessor: "checked", id: "checked", value: 48, desc: false }, ...macaulayLibraryHead, { Header: "Approved", accessor: "status", id: "status", value: 128, desc: false }] : []
        const data = macaulayLibraryData?.results.content.filter(c => c.userId == userId).map((b, i) => {
            b.checked = <Checkbox disabled={false}></Checkbox>
            b.preview = <img src={b.previewUrl + 320} className={classes.previewImg} />
            b.action = <a href={"/survey/submit?assetId=" + b.assetId}><EditIcon /></a>
            b.status = i % 2 ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />
            return b
        }) || []
        return (
            <div className={classes.container}>
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
        macaulayLibraryHead: state.common.macaulayLibraryHead,
        macaulayLibraryData: state.common.macaulayLibraryData,
    }
}

const mapDispatchToProps = {
    fetchMacaulayLibraryData,
    fetchMacaulayLibraryHead
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SearchPageStyle)(MySurveyPage));