import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';

import LoginPageStyle from "./LoginPageStyle"
import { COMPANY_NAME } from "variables/common"

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }
    render() {
        const { classes } = this.props
        const { username, password } = this.state
        return (
            <div className={classes.container}>
                <Grid container className={classes.formContainer}>
                    <Grid item xs={8} sm={6} md={4} className={classes.formItem}>
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
                            <div className={classes.footer}>
                                <Button className={classes.button} onClick={() => { console.log(this.state); window.location = "/survey/search" }}>
                                    Sign in
                                </Button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(LoginPageStyle)(LoginPage);
