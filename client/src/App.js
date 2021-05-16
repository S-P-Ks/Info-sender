import { useEffect } from "react";
import "./App.css";
import { DataGrid } from "@material-ui/core";
import BasicTable from "./components/table";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./action/posts.js";
import Form from "./components/form";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      <div className="App" style={{ width: "100vw" }}>
        <div style={{ width: "100%" }}>
          <BasicTable />
        </div>
      </div>
    </Router>
  );
}

export default App;
