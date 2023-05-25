import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { postUserLogin } from "reducers/actions";

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
        localStorage.removeItem('token');
        localStorage.removeItem('userDisplayName');
        localStorage.removeItem('userType');
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
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
                            <FormControl style={{ width: "80%" }}>
                                <InputLabel>
                                    Email
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
                                    Please enter your email
                                </FormHelperText>
                            </FormControl>
                            <FormControl style={{ width: "80%" }}>
                                <InputLabel>
                                    Password
                                </InputLabel>
                                <Input
                                    value={password}
                                    type="password"
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
                                <a href="/login">Forgot password?</a>
                                <div style={{ display: "flex", marginTop: "20px" }}>
                                    <Button className={classes.button} onClick={() => {
                                        window.location = "/survey/search"
                                    }}>
                                        Guest
                                    </Button>
                                    <Button className={classes.button} onClick={() => {
                                        if (username && password) {
                                            this.props.postUserLogin(username, password)
                                        } else {
                                            alert("Please enter your username and password to login.")
                                        }
                                    }}>
                                        Sign in
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        login: state.common.login,
    }
}

const mapDispatchToProps = {
    postUserLogin,
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(LoginPageStyle)(LoginPage));