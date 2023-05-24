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
import Checkbox from '@mui/material/Checkbox';
import SearchPageStyle from "./SearchPageStyle"
import Map from "../components/Map"
import { fetchMacaulayLibraryData, fetchMacaulayLibraryHead, fetchRecords, fetchSpecies, fetchUsers } from "reducers/actions"
import { EXPERT_SURVEYOR } from "variables/common"
import "./ReactTable.scss"
import { Button } from "@material-ui/core";
import ActionBar from "components/ActionBar"
import Paper from '@mui/material/Paper';

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
            tabValue: 0,
            commonName: "",
            obsDttm: "",
            userDisplayName: "",
            location: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { macaulayLibraryHead, macaulayLibraryData } = this.props
        if (!macaulayLibraryHead || !macaulayLibraryData) {
            // this.props.fetchMacaulayLibraryData()
            // this.props.fetchMacaulayLibraryHead()
        }
        this.props.fetchRecords()
        this.props.fetchSpecies()
        this.props.fetchUsers()
    }

    handleChange = (event, newValue) => {
        this.setState({ tabValue: newValue })
    };

    render() {
        const { classes, macaulayLibraryHead, macaulayLibraryData, records, species, users } = this.props
        const { tabValue } = this.state
        var columns = [
            { Header: "", accessor: "preview", id: "preview", value: 128, desc: false },
            { Header: "Name", accessor: "species", id: "species", value: 192, desc: true },
            { Header: "Date", accessor: "dateObserved", id: "dateObserved", value: 128, desc: true },
            { Header: "Observer", accessor: "user", id: "user", value: 128, desc: true },
            { Header: "Location", accessor: "location", id: "location", value: 320, desc: true },
            { Header: "", accessor: "action", id: "action", value: 48, desc: false },
        ]
        if (localStorage.getItem("userType") == EXPERT_SURVEYOR) {
            columns = [{ Header: "", accessor: "checked", id: "checked", value: 48, desc: false }, { Header: "Type", accessor: "type", id: "type", value: 64, desc: false }, ...columns]
        }

        const data = records.length && records?.map((b, i) => {
            b.user = users[b.userID]?.name
            b.species = species[b.speciesID]?.commonName
            b.checked = <Checkbox disabled={false}></Checkbox>
            b.preview = <img src={b.photoUrl + 320} className={classes.previewImg} />
            b.action = <a href={"/survey/item?id=" + b.recordID}><FindInPageIcon /></a>
            b.type = b.recordID < 10 ? <Chip label="PRO" color="primary" /> : ""
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
                            {/* <Button className={classes.button} onClick={() => { alert("All your selections will be exported as xlsx files") }}>
                                <Chip label="Export" color="primary" />
                            </Button> */}
                            <ActionBar data={records} />
                            {
                                localStorage.getItem("userType") == EXPERT_SURVEYOR &&
                                <Button className={classes.button} onClick={() => { alert("Record will be created based on your xlsx file") }}>
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
                                <Paper >
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
                                    <Button className={classes.button} style={{ marginTop: "10%", marginLeft: "20%" }} onClick={() => { alert("Maps will be displayed based on your search information.") }}>
                                        <Chip label="Search" color="primary" />
                                    </Button>
                                    </Paper>
                                </Box>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            <Paper >
                                {
                                    columns.map((c) => {
                                        if (!c.Header) {
                                            return null
                                        }
                                        return <FormControl style={{ marginLeft: "2%", width: "15%", marginBottom: "2%" }}>
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
                            </Paper>
                            <div className={classes.images}>
                                {data.map((d, i) => {
                                    return <ButtonBase
                                        key={d.commonName}
                                        className={classes.imageWrapper}
                                        style={{
                                            width: "33%",
                                            backgroundImage: `url(${d.photoUrl + 320})`,
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
                                                {d.species}
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
        // macaulayLibraryHead: state.common.macaulayLibraryHead,
        // macaulayLibraryData: state.common.macaulayLibraryData,
        records: state.common.records || [],
        species: state.common.species?.length && state.common.species.reduce((o, s) => { o[s.speciesID] = s; return o }, {}) || {},
        users: state.common.users?.length && state.common.users.reduce((o, s) => { o[s.userID] = s; return o }, {}) || {},
    }
}

const mapDispatchToProps = {
    // fetchMacaulayLibraryData,
    // fetchMacaulayLibraryHead,
    fetchRecords,
    fetchSpecies,
    fetchUsers,
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(SearchPageStyle)(SearchPage));