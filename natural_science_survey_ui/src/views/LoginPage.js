import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { macaulayLibraryData, macaulayLibraryHead } from "variables/template"

import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';

import LoginPageStyle from "./LoginPageStyle"
import { COMPANY_NAME, ADMINISTRATOR, EXPERT_SURVEYOR, MODERATOR, SURVEYOR, GUEST } from "variables/common"

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            useUserHistory: true,
        };
    }
    componentDidMount() {
        localStorage.setItem('userId', "");
        localStorage.setItem('userDisplayName', GUEST);
        localStorage.setItem('userType', GUEST);
    }
    render() {
        const { classes } = this.props
        const { username, password, useUserHistory } = this.state
        const users = macaulayLibraryData.results.content.reduce((o, c) => { o[c.userId] = c; return o }, {})
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
        return (
            <div className={classes.container}>
                <Grid container className={classes.formContainer}>
                    <Grid item xs={8} sm={6} md={4} className={classes.formItem}>
                        {useUserHistory ?
                            <form>
                                <h4 className={classes.title}>Sign in to your {COMPANY_NAME} Account</h4>
                                <List>
                                    {Object.keys(users).slice(0, 4).map((userId, i) => {
                                        return <ListItem>
                                            <ListItemButton onClick={() => {
                                                localStorage.setItem('userId', userId);
                                                localStorage.setItem('userDisplayName', users[userId].userDisplayName);
                                                localStorage.setItem('userType', getUserType(i % 4));
                                                window.location = "/survey/search"
                                            }}>
                                                <List>
                                                    <Typography variant="h6" noWrap component="div">
                                                        {users[userId].userDisplayName}
                                                    </Typography>
                                                    <Typography variant="h8" noWrap component="div">
                                                        {getUserType(i % 4)}
                                                    </Typography>
                                                </List>
                                            </ListItemButton>
                                        </ListItem>
                                    })}
                                </List>
                                <div className={classes.footer}>
                                    <Button className={classes.button} onClick={() => { this.setState({ useUserHistory: !useUserHistory }) }}>
                                        Add another account
                                    </Button>
                                </div>
                            </form>
                            :
                            <form>
                                <h4 className={classes.title}>Sign in to your {COMPANY_NAME} Account</h4>
                                <FormControl>
                                    <InputLabel>
                                        Username
                                    </InputLabel>
                                    <Input
                                        value={username}
                                        endAdornment={(
                                            <InputAdornment position="end">
                                                <PersonIcon />
                                            </InputAdornment>
                                        )}
                                        onChange={(event) => { this.setState({ username: event.target.value }) }}
                                    />
                                    <FormHelperText>
                                        Please enter your username
                                    </FormHelperText>
                                </FormControl>
                                <FormControl>
                                    <InputLabel>
                                        Password
                                    </InputLabel>
                                    <Input
                                        value={password}
                                        endAdornment={(
                                            <InputAdornment position="end">
                                                <PasswordIcon />
                                            </InputAdornment>
                                        )}
                                        onChange={(event) => { this.setState({ password: event.target.value }) }}
                                    />
                                    <FormHelperText>
                                        Please enter your password
                                    </FormHelperText>
                                </FormControl>
                                <div className={classes.footer} style={{ display: "flex" }}>
                                    <Button className={classes.button} onClick={() => {
                                        localStorage.setItem('userId', '');
                                        localStorage.setItem('userDisplayName', '');
                                        localStorage.setItem('userType', GUEST);
                                        window.location = "/survey/search"
                                    }}>
                                        Guest
                                    </Button>
                                    <Button className={classes.button} onClick={() => {
                                        if (username && password) {
                                            localStorage.setItem('userId', '');
                                            localStorage.setItem('userDisplayName', username);
                                            localStorage.setItem('userType', SURVEYOR);
                                            window.location = "/survey/search"
                                        } else {
                                            alert("Please enter your username and password to login.")
                                        }
                                    }}>
                                        Sign in
                                    </Button>
                                </div>
                            </form>
                        }
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(LoginPageStyle)(LoginPage);
