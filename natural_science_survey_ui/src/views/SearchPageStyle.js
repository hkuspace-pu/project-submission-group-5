const SearchPageStyle = theme => ({
    container: {
        backgroundColor: "white",
        opacity: "0.8",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        minHeight: "750px",
        paddingTop: "6%",
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
    previewImg: {
        top: "0px",
        position: "relative",
        marginRight: "6px",
        width: "128px",
        height: "128px",
        verticalAlign: "middle",
        color: "inherit",
        display: "inline-block"
    },
    button: {
        marginBottom: "20px",
        right: "0px",
    },
})

export default SearchPageStyle