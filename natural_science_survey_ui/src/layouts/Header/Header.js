import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";

import logo from 'assets/logo.svg';

import HeaderStyle from "./HeaderStyle";
import {COMPANY_NAME, COMPANY_SHORT_NAME} from "variables/common"

function Header(props) {
    const { classes } = props;
    const buildCompanyLogo = (companyName) => {
        return (
            <Button href="/home" className={classes.title}>
                <img src={logo} alt="logo" className={classes.logo} />
                {companyName}
            </Button>
        )
    }
    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.container}>
                <Hidden smDown>
                    {buildCompanyLogo(COMPANY_NAME)}
                </Hidden>
                <Hidden mdUp>
                    {buildCompanyLogo(COMPANY_SHORT_NAME)}
                </Hidden>
                {
                    window.location.pathname != "/login" && <Button href="/login" className={classes.button}>
                        Sign in
                    </Button>
                    
                }
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(HeaderStyle)(Header)