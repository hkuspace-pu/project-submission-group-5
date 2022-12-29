import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "react-table";
import Grid from "@material-ui/core/Grid";

import SearchPageStyle from "./SearchPageStyle"
import { SEARCH_DATA_TEMPLATE, SEARCH_DATA_HEAD_TEMPLATE } from "variables/template"
import "./ReactTable.scss"

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes } = this.props
        const columns = SEARCH_DATA_HEAD_TEMPLATE.map((head) => ({
            Header: head,
            accessor: head,
        }))
        const data = SEARCH_DATA_TEMPLATE.map((row) => {
            return row.reduce((o, v, i) => { if (i < columns.length) { o[columns[i].accessor] = v }; return o }, {})
        })
        return (
            <div className={classes.container}>
                <Grid container>
                    <Table
                        data={data}
                        filterable
                        columns={columns}
                        defaultPageSize={10}
                        showPaginationTop
                        showPaginationBottom={false}
                        className="-striped -highlight"
                    />
                </Grid>
            </div>
        )
    }
}

export default withStyles(SearchPageStyle)(SearchPage);