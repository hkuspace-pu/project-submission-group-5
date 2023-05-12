import React from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { macaulayLibraryData } from "variables/template";
import Button from "@material-ui/core/Button";
import { fetchCommentByRecordId, postCommentCreate } from "reducers/actions";

class CommentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            userComment: {
                commentID: 3,
                userID: 3,
                recordID: parseInt(new URLSearchParams(window.location.search).get("id")),
                content: "",
                rating: 5,
                updatedAt: "2023-05-12T07:45:14.806Z",
                createdAt: "2023-05-12T07:45:14.806Z",
            }
        };
    }

    componentDidMount() {
        let id = new URLSearchParams(window.location.search).get("id")
        this.props.fetchCommentByRecordId(id)
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.comment) != JSON.stringify(this.props.comment)) {
            this.props.fetchCommentByRecordId(new URLSearchParams(window.location.search).get("id"))
        }
    }

    render() {
        const { comments } = this.props
        const { userComment } = this.state
        const getRating = (rating) => {
            var c = []
            for (let i = 0; i < rating; i++) {
                c = [...c, <StarIcon />]
            }
            for (let i = 0; i < 5 - rating; i++) {
                c = [...c, <StarOutlineIcon />]
            }
            return <div>
                {c}
            </div>
        }
        return <Grid container>
            <Typography variant="h5">
                {comments.length} Comments
            </Typography>
            <List style={{ width: "100%" }}>
                {
                    comments.map((comment) => {
                        return <List>
                            <ListItem>{getRating(comment.rating)} &nbsp; {comment.userDisplayName}</ListItem>
                            <ListItem>{comment.obsDttm}</ListItem>
                            <ListItem>{comment.content}</ListItem>
                            <Divider />
                        </List>
                    })
                }
            </List>
            <Grid container>
                <FormControl style={{ marginTop: "2%", width: "100%" }}>
                    <InputLabel style={{ marginBottom: "2%" }}>
                        Comment this survey
                    </InputLabel>
                    <div>{Array(5).fill(0).map((_, i) => <StarIcon />)}</div>
                    <Input
                        value={userComment.content}
                        onChange={(event) => { userComment.content = event.target.value; this.setState({ userComment }) }}
                    />
                </FormControl>
                <Button style={{ marginTop: "2%", backgroundColor: "#c6c6c6de" }} onClick={() => { this.props.postCommentCreate(userComment) }}>Submit</Button>
            </Grid>
        </Grid>
    }
}

const mapStateToProps = (state) => {
    return {
        comment: state.common.comment,
        comments: state.common.comments?.length && state.common.comments || []
    }
}

const mapDispatchToProps = {
    fetchCommentByRecordId,
    postCommentCreate
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentPage);