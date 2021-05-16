import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import mailSender from "./mailSender";

import Form from "./form";

import { deletePosts } from "../action/posts";
import UpdateForm from "./updateForm";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "name", headerName: "Full Name", width: 200 },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    type: "Number",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    type: "String",
    width: 150,
  },
  {
    field: "hobbies",
    headerName: "Hobbies",
    type: "String",
    width: 300,
  },
];

export default function DataTable() {
  const posts = useSelector((state) => state.Posts);
  console.log(posts);

  const [update, setupdate] = useState(false);

  const DeletePosts = () => {
    post.map((p) => dispatch(deletePosts(p)));
  };

  const dispatch = useDispatch();

  const [post, setPost] = useState([]);

  const p = posts.map((post) => ({
    id: post._id,
    name: post.name,
    email: post.email,
    hobbies: post.hobbies,
    phoneNumber: post.phoneNumber,
  }));

  console.log(p);
  console.log(post);

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        display: "grid",
        gridTemplateColumns: "auto auto",
      }}
    >
      <div>
        <DataGrid
          rows={p}
          columns={columns}
          pageSize={5}
          checkboxSelection
          onSelectionModelChange={({ selectionModel }) => {
            setPost(selectionModel);
          }}
        />

        <Button variant="contained" color="secondary" onClick={DeletePosts}>
          Delete
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log(post)}
        >
          Send Info
        </Button>

        {post.length === 1 ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              console.log(update);
              setupdate(!update);
            }}
          >
            {!update ? "Update" : "Cancel Update"}
          </Button>
        ) : (
          <Button variant="contained" color="secondary" disabled>
            Update
          </Button>
        )}
      </div>

      <div>{!update ? <Form /> : <UpdateForm post={post} />}</div>
    </div>
  );
}
