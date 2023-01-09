
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
import { fetchMacaulayLibraryData, fetchMacaulayLibraryHead } from "reducers/actions"
import { COMPANY_NAME, ADMINISTRATOR, EXPERT_SURVEYOR, MODERATOR, SURVEYOR, GUEST } from "variables/common"

class UserPermissionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
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
        const { classes, macaulayLibraryData } = this.props
        const { search } = this.state
        const getUserType = (i) => {
            switch (i) {
                case 0:
                    return ADMINISTRATOR
                case 1:
                    return EXPERT_SURVEYOR
                case 2:
                    return MODERATOR
                default:
                    return SURVEYOR
            }
        }
        const data = macaulayLibraryData?.results.content.filter((c) => (c.userId + c.userDisplayName).indexOf(search) > -1).reduce((o, c, i) => { o["(" + c.userId + ") " + c.userDisplayName] = getUserType(i % 4); return o }, {}) || []
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
                                            <Checkbox disabled checked={d[k]} />
                                            :
                                            <FormControl style={{ width: "100%" }}>
                                                <InputLabel>
                                                    {toTitleCase(k)}
                                                </InputLabel>
                                                <Input
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
                <FormControl style={{ width: "100%" }}>
                    <InputLabel>
                        User Search
                    </InputLabel>
                    <Input
                        value={search}
                        onChange={(event) => { this.setState({ search: event.target.value }) }}
                    />
                </FormControl>
                <Grid container >
                    <List style={{ width: "100%" }}>
                        {convert(data)}
                    </List>
                </Grid>
                <Button onClick={() => { console.log(this.state) }} className={classes.button}>
                    <NavLink to={"/survey/preferences"} >
                        Save Change
                    </NavLink>
                </Button>
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


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(ItemPageStyle)(UserPermissionPage));