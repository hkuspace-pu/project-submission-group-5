
import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import ItemPageStyle from "./ItemPageStyle"
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                userId: localStorage.getItem("userId"),
                userDisplayName: localStorage.getItem("userDisplayName"),
                userType: localStorage.getItem("userType"),
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
                                <Grid item xs={2}>
                                    <ListItemText>
                                        <Typography variant="h7" align="left" >
                                            {toTitleCase(k)}
                                        </Typography>
                                    </ListItemText>
                                </Grid>
                                <Grid item xs={8}>
                                    {d[k] && typeof d[k] === "object" ?
                                        convert(d[k]) :
                                        <FormControl style={{ width: "100%" }}>
                                            <InputLabel>
                                                {toTitleCase(k)}
                                            </InputLabel>
                                            <Input
                                                value={d[k]}
                                                onChange={(event) => { d[k] = event.target.value; this.setState({}) }}
                                            />
                                        </FormControl>
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
                <Button onClick={() => { console.log(this.state) }} className={classes.button}>
                    <NavLink to={"/survey/profile"} >
                        Save Change
                    </NavLink>
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(ItemPageStyle)(ProfilePage));