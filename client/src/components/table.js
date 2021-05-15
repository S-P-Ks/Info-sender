import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";

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

  const [sendPosts, setsendPosts] = useState([]);

  const p = posts.map((post) => ({
    id: post._id,
    name: post.name,
    email: post.email,
    hobbies: post.hobbies,
    phoneNumber: post.phoneNumber,
  }));

  console.log(p);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={p}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onSelectionModelChange={({ selectionModel }) => {
          setsendPosts(selectionModel);
          console.log(sendPosts);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log(sendPosts)}
      >
        Send Info
      </Button>
    </div>
  );
}
