
import React from "react";
import { connect } from "react-redux";
import { createItem } from "reducers/actions";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import ItemPageStyle from "./ItemPageStyle"
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import ListItemText from '@mui/material/ListItemText';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import { macaulayLibraryData, macaulayLibraryHead } from "variables/template"
import { SURVEYOR } from "variables/common"
import { toTitleCase } from "utils/utils"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CardImageUpload from "components/CardImageUpload";
import { postRecordCreate, fetchSpecies } from "reducers/actions";

class CreatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "recordID": 1,
                "userID": 1,
                "speciesID": 1,
                "longitude": 0,
                "latitude": 0,
                "dateObserved": new Date().toISOString(),
                "age": 0,
                "sex": 0,
                "location": "",
                "photoUrl": "",
                "width": 0,
                "height": 0,
                "status": 1,
                "reviewerID": 3
            },
        };
    }
    componentDidMount() {
        // let assetId = new URLSearchParams(window.location.search).get("assetId") || 0
        // let data = macaulayLibraryData.results?.content.filter(c => c.assetId == assetId)?.[0] || macaulayLibraryData.results?.content[0]
        // if (data) {
        //     this.setState({ data })
        // } else {
        //     window.location = "/survey/search"
        // }
        this.props.fetchSpecies()
    }
    render() {
        const { classes, createItem, species } = this.props
        const { data } = this.state
        const convert = (d) => {
            if (d.length && d.length > 0) {
                return <List>
                    {d.map((k) => {
                        return convert(k)
                    })}
                </List>
            }
            return <List>
                {Object.keys(d).map((k) => {
                    if (["photoUrl", "recordID", "userID", "status", "reviewerID"].indexOf(k) !== -1) {
                        return null
                    }
                    if (k == "speciesID") {
                        return <ListItem>
                            <Grid container>
                                <Grid item xs={2}>
                                    <ListItemText>
                                        <Typography variant="h7" align="left" >
                                            {toTitleCase(k)}
                                        </Typography>
                                    </ListItemText>
                                </Grid>
                                <Grid item xs={8}>
                                    <FormControl >
                                        <Select
                                            MenuProps={{
                                                PaperProps: {
                                                    style: {
                                                        maxHeight: 224,
                                                        width: 250,
                                                    },
                                                }
                                            }}
                                            sx={{ width: 300 }}
                                            value={species[d[k]]}
                                            onChange={(event) => { d[k] = event.target.value; this.setState({}) }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {Object.keys(species).map((s) => <MenuItem value={species[s].speciesID}>{species[s].commonName}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </ListItem>
                    }
                    return (
                        <ListItem>
                            <Grid container>
                                <Grid item xs={2}>
                                    <ListItemText>
                                        <Typography variant="h7" align="left" >
                                            {toTitleCase(k)}
                                        </Typography>
                                    </ListItemText>
                                </Grid>
                                <Grid item xs={8}>
                                    {d[k] && typeof d[k] === "object" ?
                                        convert(d[k]) :
                                        <FormControl style={{ width: "100%" }}>
                                            <InputLabel>
                                                {toTitleCase(k)}
                                            </InputLabel>
                                            <Input
                                                value={d[k]}
                                                onChange={(event) => { d[k] = event.target.value; this.setState({}) }}
                                            />
                                        </FormControl>
                                    }
                                </Grid>
                            </Grid>
                        </ListItem>
                    )
                })}
            </List>
        }

        return (
            <div className={classes.container}>
                <Grid container >
                    <List style={{ width: "100%" }}>
                        <Typography variant="h10" noWrap component="div">
                            Preview
                        </Typography>
                        <Typography variant="h4" noWrap component="div">
                            {data.commonName}
                        </Typography>
                        <Typography variant="subtitle1" noWrap component="div">
                            {data.location}
                        </Typography>
                        <CardImageUpload
                            fullWidth
                            id="photo"
                            name="photo"
                            imgSrc={data.photoUrl}
                            imgHandler={
                                event => {
                                    console.log(event)
                                    data.photoUrl = URL.createObjectURL(event.target.files[0])
                                    this.setState({ ...data })
                                }
                            }
                            title={"photo"}
                            imageSpec={"Image spec: 1920 x 1080"}
                            imageFormat={"Format: gif, jpg and png"}
                        />
                        <Divider />
                        {convert(data)}
                    </List>
                </Grid>
                {
                    new URLSearchParams(window.location.search).get("assetId") ?
                        <div style={{ display: "flex" }}>
                            <Button onClick={() => { alert("Survey record will be deleted."); window.location = "/survey/mysurvey" }} className={classes.button}>
                                Delete
                            </Button>
                            <Button onClick={() => { alert("Survey record updated successfully.") }} className={classes.button}>
                                Update
                            </Button>
                        </div>
                        :
                        <Button onClick={() => {
                            console.log(data);
                            this.props.postRecordCreate(data)
                            localStorage.getItem("userType") == SURVEYOR ? alert("Your survey record has been successfully created. Will wait for moderator approval.") : alert("Survey record created successfully.")
                        }} className={classes.button}>
                            <NavLink to={"/survey/search"} >
                                Submit
                            </NavLink>
                        </Button>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.common.record,
        species: state.common.species?.length && state.common.species.reduce((o, s) => { o[s.speciesID] = s; return o }, {}) || {},
    }
}

const mapDispatchToProps = {
    postRecordCreate,
    fetchSpecies,
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(ItemPageStyle)(CreatePage));