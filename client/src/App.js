import { useEffect } from "react";
import "./App.css";
import { DataGrid } from "@material-ui/core";
import BasicTable from "./components/table";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./action/posts.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <BasicTable />
    </div>
  );
}

export default App;
