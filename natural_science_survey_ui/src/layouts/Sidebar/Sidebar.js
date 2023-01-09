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
import logo from 'assets/logo.svg';
import backgroundImage from "assets/background.jpeg";
import EmailIcon from '@mui/icons-material/Email';
import { COMPANY_NAME, GUEST } from "variables/common"
import pagesRoutes from "routes/pages"

const drawerWidth = 200;

function Sidebar(props) {
    const { classes } = props;
    const userType = localStorage.getItem("userType") || GUEST
    const group1 = pagesRoutes.filter((page) => page.group == 1 && page.permission?.indexOf(userType) > -1)
    const group1Title = group1.map((page) => page.name)
    const group1Path = group1.map((page) => page.path)
    const group1Icon = group1.map((page) => page.icon)
    const group2 = pagesRoutes.filter((page) => page.group == 2 && page.permission?.indexOf(userType) > -1)
    const group2Title = group2.map((page) => page.name)
    const group2Path = group2.map((page) => page.path)
    const group2Icon = group2.map((page) => page.icon)
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
                        <Typography variant="h8" style={{ marginRight: "10px" }}>
                            {"Hi " + userType + " " + localStorage.getItem("userDisplayName")}
                        </Typography>
                        {userType != GUEST &&
                            <Button onClick={() => { alert("Check your chat messages here!") }} style={{ color: "#ffffffde" }}>
                                <EmailIcon />
                            </Button>
                        }
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
                        {group1Title.map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    href={group1Path[index]}
                                >
                                    <ListItemIcon>
                                        {group1Icon[index]}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {group2Title.map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    href={group2Path[index]}
                                >
                                    <ListItemIcon>
                                        {group2Icon[index]}
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