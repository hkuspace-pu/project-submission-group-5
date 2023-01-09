import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from "react-table";
import Grid from "@material-ui/core/Grid";
import ButtonBase from '@material-ui/core/ButtonBase';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import Chip from '@mui/material/Chip';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import SearchPageStyle from "./SearchPageStyle"
import Map from "../components/Map"
import { fetchMacaulayLibraryData, fetchMacaulayLibraryHead } from "reducers/actions"
import { EXPERT_SURVEYOR } from "variables/common"
import "./ReactTable.scss"
import { Button } from "@material-ui/core";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabValue: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { macaulayLibraryHead, macaulayLibraryData } = this.props
        if (!macaulayLibraryHead || !macaulayLibraryData) {
            this.props.fetchMacaulayLibraryData()
            this.props.fetchMacaulayLibraryHead()
        }
    }

    handleChange = (event, newValue) => {
        console.log(event, newValue)
        this.setState({ tabValue: newValue })
    };

    render() {
        const { classes, macaulayLibraryHead, macaulayLibraryData } = this.props
        const { tabValue } = this.state
        var columns = macaulayLibraryHead || []
        if (localStorage.getItem("userType") == EXPERT_SURVEYOR) {
            columns = [{ Header: "Type", accessor: "type", id: "type", value: 64, desc: false }, ...columns]
        }

        const data = macaulayLibraryData?.results.content.map((b, i) => {
            b.preview = <img src={b.previewUrl + 320} className={classes.previewImg} />
            b.action = <a href={"/survey/item?id=" + i}><FindInPageIcon /></a>
            b.type = i < 10 ? <Chip label="PRO" color="primary" /> : ""
            return b
        }) || []
        return (
            <div className={classes.container}>
                <Grid container>
                    <Box sx={{ width: '100%', marginBottom: "2%" }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={tabValue} onChange={this.handleChange} aria-label="basic tabs example">
                                <Tab label="List View" {...a11yProps(0)} />
                                <Tab label="Map View" {...a11yProps(1)} />
                                <Tab label="Photo Thumbnails View" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={tabValue} index={0}>
                            <Button className={classes.button} onClick={() => { alert("This is still a work in progress.") }}>
                                <Chip label="Export" color="primary" />
                            </Button>
                            {
                                localStorage.getItem("userType") == EXPERT_SURVEYOR &&
                                <Button className={classes.button} onClick={() => { alert("This is still a work in progress.") }}>
                                    <Chip label="Import" color="primary" />
                                </Button>
                            }
                            <Table
                                style={{ width: "100%" }}
                                data={data}
                                filterable
                                columns={columns}
                                defaultPageSize={10}
                                showPaginationTop
                                showPaginationBottom={false}
                                resized={columns}
                                sorted={columns}
                                className="-striped -highlight"
                            />
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <Grid container style={{ width: '1000px', height: '1000px' }}>
                                <Box sx={{ width: '80%', height: '80%' }}><Map /></Box>
                                <Box sx={{ width: '20%', height: '20%' }}>
                                    <Typography
                                        component="h3"
                                        variant="h6"
                                        color="inherit"
                                        style={{ marginLeft: "10%" }}
                                    >
                                        Search
                                    </Typography>
                                    {
                                        columns.map((c) => {
                                            if (!c.Header) {
                                                return null
                                            }
                                            return <FormControl style={{ marginLeft: "10%", width: "80%" }}>
                                                <InputLabel>
                                                    {c.Header}
                                                </InputLabel>
                                                <Input
                                                    value={this.state[c.id]}
                                                    onChange={(event) => { this.setState({ [c.id]: event.target.value }) }}
                                                />
                                            </FormControl>
                                        })
                                    }
                                </Box>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            <div className={classes.images}>
                                {data.map((d, i) => {
                                    return <ButtonBase
                                        key={d.commonName}
                                        className={classes.imageWrapper}
                                        style={{
                                            width: "33%",
                                            backgroundImage: `url(${d.previewUrl + 320})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",

                                        }}
                                        href={"/survey/item?id=" + i}
                                    >
                                        <div className={classes.imageBackdrop} />
                                        <div className={classes.imageButton}>
                                            <Typography
                                                component="h3"
                                                variant="h6"
                                                color="inherit"
                                                className={classes.imageTitle}
                                            >
                                                {d.commonName}
                                                <div className={classes.imageMarked} />
                                            </Typography>
                                        </div>
                                    </ButtonBase>
                                })}
                            </div>
                        </TabPanel>
                    </Box>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        macaulayLibraryHead: state.common.macaulayLibraryHead,
        macaulayLibraryData: state.common.macaulayLibraryData,
    }
}

const mapDispatchToProps = {
    fetchMacaulayLibraryData,
    fetchMacaulayLibraryHead
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SearchPageStyle)(SearchPage));