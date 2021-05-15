import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import {
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import { SUBMIT_FILTER_STROKE_TIME } from "@material-ui/data-grid";
import { useDispatch } from "react-redux";
import { createPosts } from "../action/posts";

const Form = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  const dispatch = useDispatch();

  const [post, setpost] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    hobbies: [],
  });

  const submit = (e) => {
    e.preventDefault();
    if (post.hobbies.length != 0) {
      const hobby = post.hobbies.split(",");
      setpost({ ...post, hobbies: hobby });
      console.log(hobby);
    }
    dispatch(createPosts(post));
    clear();
  };

  const clear = () => {
    setpost({ name: "", email: "", phoneNumber: "", hobbies: [] });
  };

  console.log(post);
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>InFo Form</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to add an Info...
          </Typography>
        </Grid>
        <form action="#">
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            style={{ marginTop: "20px" }}
            value={post.name}
            onChange={(e) => {
              setpost({ ...post, name: e.target.value });
              console.log(post);
            }}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            style={{ marginTop: "20px" }}
            value={post.email}
            onChange={(e) => {
              setpost({ ...post, email: e.target.value });
              console.log(post);
            }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
            style={{ marginTop: "20px" }}
            value={post.phoneNumber}
            onChange={(e) => {
              setpost({ ...post, phoneNumber: e.target.value });
              console.log(post);
            }}
          />
          <TextField
            fullWidth
            label="Hobbies"
            placeholder="Enter your hobbies Here ..."
            style={{ marginTop: "20px" }}
            value={post.hobbies}
            onChange={(e) => {
              setpost({
                ...post,
                hobbies: e.target.value,
              });
              console.log(post);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
            onClick={submit}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Form;
