import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Footer(props) {
  return (
    <AppBar position="static" elevation={0} component="footer" color="default">
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="caption">© 2023 COMP2003HK Computing Group Project - Group 5</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
