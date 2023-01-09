const SearchPageStyle = theme => ({
    container: {
        backgroundColor: "white",
        opacity: "0.8",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        minHeight: "750px",
        paddingTop: "5%",
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
    images: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        position: 'relative',
        display: 'block',
        padding: 0,
        borderRadius: 0,
        height: '40vh',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
            height: 100,
        },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15,
        },
        '&:hover $imageMarked': {
            opacity: 0,
        },
        '&:hover $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    button: {
        marginBottom: "20px",
        right: "0px",
    }
})

export default SearchPageStyle