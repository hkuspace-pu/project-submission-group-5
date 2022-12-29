const LoginPageStyle = theme => ({
    title: {
        color: "#3C4858",
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
    container: {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        minHeight: "750px",
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
        zIndex: "4",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "100px"
        },
    },
    formContainer: {
        paddingTop: "20%",
    },
    formItem: {
        margin: "auto",
        textAlign: "center",
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        width: "100%",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem"
    },
    footer: {
        padding: "10%",
    },
    button: {
        width: "100%"
    }
})

export default LoginPageStyle