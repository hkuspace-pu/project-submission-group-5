const HeaderStyle = theme => ({
    appBar: {
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "0",
        marginBottom: "0",
        position: "absolute",
        width: "100%",
        paddingTop: "10px",
        zIndex: "1029",
        color: "#555555",
        border: "0",
        borderRadius: "3px",
        padding: "10px 0",
        transition: "all 150ms ease 0s",
        minHeight: "50px",
        display: "block"
    },
    container: {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        "@media (min-width: 768px)": {
            width: "750px"
        },
        "@media (min-width: 992px)": {
            width: "970px"
        },
        "@media (min-width: 1200px)": {
            width: "1170px"
        },
        "&:before,&:after": {
            display: "table",
            content: '" "'
        },
        "&:after": {
            clear: "both"
        },
        minHeight: "50px"
    },
    title: {
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
        }
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
        right: "0px",
    },
})

export default HeaderStyle