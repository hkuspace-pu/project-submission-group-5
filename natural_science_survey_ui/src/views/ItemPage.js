import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import ItemPageStyle from "./ItemPageStyle"
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { toTitleCase } from "utils/utils"
import CommentPage from "views/CommentPage"
import CardImageUpload from "components/CardImageUpload";
import { fetchRecordById } from "reducers/actions";

class ItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        let id = new URLSearchParams(window.location.search).get("id")
        this.props.fetchRecordById(id)
    }

    render() {
        const { classes, data } = this.props
        const convert = (d) => {
            if (d.length && d.length > 0) {
                return <List>
                    {d.map((k) => {
                        return convert(k)
                    })}
                </List>
            }
            return <List>
                {Object.keys(d).map((k) => {
                    if (["photoUrl", "recordID", "userID", "status", "reviewerID"].indexOf(k) !== -1) {
                        return null
                    }
                    return (
                        <ListItem>
                            <Grid container>
                                <Grid item xs={2}>
                                    <ListItemText>
                                        <Typography variant="h7" align="left" >
                                            {toTitleCase(k)}
                                        </Typography>
                                    </ListItemText>
                                </Grid>
                                <Grid item xs={8}>
                                    <ListItemText>
                                        {d[k] && typeof d[k] === "object" ? convert(d[k]) : d[k]}
                                    </ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                    )
                })}
            </List>
        }
        return (
            <div className={classes.container}>
                <Grid container >
                    <List style={{ width: "100%" }}>
                        <Typography variant="h4" noWrap component="div">
                            {data.commonName}
                        </Typography>
                        <Typography variant="subtitle1" noWrap component="div">
                            {data.location}
                        </Typography>
                        <CardImageUpload
                            fullWidth
                            disabled
                            id="photo"
                            name="photo"
                            imgSrc={data.photoUrl}
                            title={"photo"}
                        />
                        <Divider />
                        {convert(data)}
                    </List>
                    <CommentPage />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.common.record || {}
    }
}

const mapDispatchToProps = {
    fetchRecordById,
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(ItemPageStyle)(ItemPage));