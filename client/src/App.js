import { useEffect } from "react";
import "./App.css";
import { DataGrid } from "@material-ui/core";
import BasicTable from "./components/table";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./action/posts.js";
import Form from "./components/form";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <div style={{ width: "100%" }}>
        <BasicTable />
      </div>
      <div style={{ width: "100%" }}>
        <Form />
      </div>
    </div>
  );
}

export default App;
