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
import EmailIcon from '@mui/icons-material/Email';

import LoginPageStyle from "./LoginPageStyle"
import { COMPANY_NAME } from "variables/common"

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            firstname: "",
            lastname: "",
            email: "",
        };
    }
    render() {
        const { classes } = this.props
        const { firstname, lastname, username, password, email } = this.state
        return (
            <div className={classes.container}>
                <Grid container className={classes.formContainer}>
                    <Grid item xs={8} sm={6} md={4} className={classes.formItem}>
                        <form >
                            <h4 className={classes.title}>Register your {COMPANY_NAME} Account</h4>
                            <FormControl>
                                <InputLabel>
                                    First Name
                                </InputLabel>
                                <Input
                                    value={firstname}
                                    onChange={(event) => { this.setState({ firstname: event.target.value }) }}
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel>
                                    Last Name
                                </InputLabel>
                                <Input
                                    value={lastname}
                                    onChange={(event) => { this.setState({ lastname: event.target.value }) }}
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel>
                                    Choose a username
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
                            </FormControl>
                            <FormControl>
                                <InputLabel>
                                    Choose a password
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
                                    At least 8 characters are required
                                </FormHelperText>
                            </FormControl>
                            <FormControl>
                                <InputLabel>
                                    Email address
                                </InputLabel>
                                <Input
                                    value={email}
                                    endAdornment={(
                                        <InputAdornment position="end">
                                            <EmailIcon />
                                        </InputAdornment>
                                    )}
                                    onChange={(event) => { this.setState({ email: event.target.value }) }}
                                />
                            </FormControl>
                            <div className={classes.footer}>
                                <Button className={classes.button} onClick={() => { console.log(this.state) }}>
                                    Register
                                </Button>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(LoginPageStyle)(RegisterPage);
