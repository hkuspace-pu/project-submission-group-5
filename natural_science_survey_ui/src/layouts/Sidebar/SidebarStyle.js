const SidebarStyle = theme => ({
    appBar: {
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    logo: {
        top: "0px",
        position: "relative",
        marginRight: "6px",
        width: "36px",
        height: "36px",
        verticalAlign: "middle",
        color: "inherit",
        display: "inline-block"
    },
    button: {
        color: "#dde1e5",
        textDecoration: "none",
        fontWeight: "300",
        marginTop: "30px",
        marginBottom: "25px",
        minHeight: "32px",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        },
        position: "absolute",
        right: "15px",
    },
})

export default SidebarStyle