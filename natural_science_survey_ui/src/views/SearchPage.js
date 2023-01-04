import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "react-table";
import Grid from "@material-ui/core/Grid";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SearchPageStyle from "./SearchPageStyle"
import { fetchMacaulayLibraryData, fetchMacaulayLibraryHead } from "reducers/actions"
import "./ReactTable.scss"

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
        const columns = macaulayLibraryHead || []
        const data = macaulayLibraryData?.results.content.map((b, i) => {
            b.preview = <img src={b.previewUrl + 320} className={classes.previewImg} />
            b.action = <a href={"/survey/item?id=" + i}><FindInPageIcon /></a>
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SearchPageStyle)(SearchPage));