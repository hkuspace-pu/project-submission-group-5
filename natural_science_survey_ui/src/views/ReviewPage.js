import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "react-table";
import Grid from "@material-ui/core/Grid";
import EditIcon from '@mui/icons-material/Edit';
import SearchPageStyle from "./SearchPageStyle"
import { fetchMacaulayLibraryData, fetchMacaulayLibraryHead } from "reducers/actions"
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
            this.props.fetchMacaulayLibraryData()
            this.props.fetchMacaulayLibraryHead()
        }
    }

    render() {
        const { classes, macaulayLibraryHead, macaulayLibraryData } = this.props
        const { checked } = this.state
        const columns = macaulayLibraryHead ? [...macaulayLibraryHead, { Header: "Approved", accessor: "status", id: "status", value: 128, desc: false }] : []
        const data = macaulayLibraryData?.results.content.map((b, i) => {
            b.preview = <img src={b.previewUrl + 320} className={classes.previewImg} />
            b.action = <a href={"/survey/submit?assetId=" + b.assetId}><EditIcon /></a>
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
        macaulayLibraryHead: state.common.macaulayLibraryHead,
        macaulayLibraryData: state.common.macaulayLibraryData,
    }
}

const mapDispatchToProps = {
    fetchMacaulayLibraryData,
    fetchMacaulayLibraryHead
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SearchPageStyle)(ReviewPage));