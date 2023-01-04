import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import SidebarStyle from "./SidebarStyle";
import PageviewIcon from '@mui/icons-material/Pageview';
import PublishIcon from '@mui/icons-material/Publish';
import VideoStableIcon from '@mui/icons-material/VideoStable';
import PersonIcon from '@mui/icons-material/Person';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import logo from 'assets/logo.svg';
import backgroundImage from "assets/background.jpeg";
import { COMPANY_NAME, COMPANY_SHORT_NAME } from "variables/common"

const drawerWidth = 200;

function Sidebar(props) {
    const { classes } = props;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: "url(" + backgroundImage + ")"
                }} className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        <img src={logo} alt="logo" className={classes.logo} />
                        {COMPANY_NAME}
                    </Typography>
                    <div className={classes.button}>
                        <Typography variant="h8" style={{marginRight: "10px"}}>
                            {"Hi " + localStorage.getItem("userDisplayName")}
                        </Typography>
                        <Button href="/login" style={{ color: "#ffffffde" }}>
                            Sign out
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Search', 'Submit', 'My Survey'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    href={["/survey/search", "/survey/submit", "/survey/mysurvey"][index]}
                                >
                                    <ListItemIcon>
                                        {[<PageviewIcon />, <PublishIcon />, <VideoStableIcon />][index]}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Profile', 'Preferences'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    href={["/survey/profile", "/survey/preferences"][index]}
                                >
                                    <ListItemIcon>
                                        {[<PersonIcon />, <SettingsAccessibilityIcon />][index]}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {props.children}
            </Box>
        </Box>
    );
}

export default withStyles(SidebarStyle)(Sidebar)