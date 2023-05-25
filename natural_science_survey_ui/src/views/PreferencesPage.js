
import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import ItemPageStyle from "./ItemPageStyle"
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import ListItemText from '@mui/material/ListItemText';
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { toTitleCase } from "utils/utils"

class PreferencesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "Language": "English (en)",
                "Notification": {
                    "Email notification": true,
                },
                "Species name display": {
                    "Common name translated to English": true,
                    "Scientific name": false,
                    "Both, Common names translated to English": false,
                },
                "Public name display": localStorage.getItem("userDisplayName"),
                "Data privacy": {
                    "Hide my data from Recent Visits": false,
                    "Hide my data from the Top 100": false,
                    "Hide my checklist comments": false,
                },
                "Checklist sharing notifications": {
                    "Send me an email notification when someone shares a checklist with me": false,
                }
            }
        };
    }

    render() {
        const { classes, createItem } = this.props
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
                            <Grid container>
                                <Grid item xs={typeof d[k] === "boolean" ? 10 : 4}>
                                    <ListItemText>
                                        <Typography variant="h8" align="left" >
                                            {toTitleCase(k)}
                                        </Typography>
                                    </ListItemText>
                                </Grid>
                                <Grid item xs={typeof d[k] === "boolean" ? 2 : 8}>
                                    {d[k] && typeof d[k] === "object" ?
                                        convert(d[k]) :
                                        (typeof d[k] === "boolean" ?
                                            <Checkbox defaultChecked={d[k]} />
                                            :
                                            <FormControl style={{ width: "100%" }}>
                                                <InputLabel>
                                                    {toTitleCase(k)}
                                                </InputLabel>
                                                <Input
                                                    disabled
                                                    value={d[k]}
                                                    onChange={(event) => { d[k] = event.target.value; this.setState({}) }}
                                                />
                                            </FormControl>)
                                    }
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
                        {convert(data)}
                    </List>
                </Grid>
                <NavLink to={"/survey/search"} >
                    <Button onClick={() => { console.log(this.state) }} className={classes.button}>
                        Save Change
                    </Button>
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(ItemPageStyle)(PreferencesPage));