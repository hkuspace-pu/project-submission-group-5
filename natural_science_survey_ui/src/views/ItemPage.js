import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import ItemPageStyle from "./ItemPageStyle"
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { macaulayLibraryData, macaulayLibraryHead } from "variables/template"

class ItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentDidMount() {
        let id = new URLSearchParams(window.location.search).get("id")
        let data = macaulayLibraryData.results.content[id]
        if (data) {
            this.setState({ data })
        } else {
            window.location = "/survey/search"
        }
    }
    render() {
        const { classes } = this.props
        const { data } = this.state
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
                    return (
                        <ListItem>
                            <ListItemText>
                                <Typography variant="h7" align="left" >
                                    {k}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                {d[k] && typeof d[k] === "object" ? convert(d[k]) : JSON.stringify(d[k])}
                            </ListItemText>
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
                        <img src={data.previewUrl} />
                        <Divider />
                        {convert(data)}
                    </List>
                </Grid>
            </div>
        )
    }
}

export default withStyles(ItemPageStyle)(ItemPage);