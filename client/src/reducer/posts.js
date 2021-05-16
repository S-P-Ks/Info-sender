import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_POST,
  UPDATE,
} from "../constants/actionTypes";

const initialState = [];

const reducer = (posts = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return [...posts, action.payload];
    case FETCH_ALL:
      return action.payload;
    case FETCH_POST:
      return posts;
    case DELETE:
      console.log("DELETE");
      const p = posts.filter((post) => post._id !== action.payload);
      console.log("===>", p);
      return p;
    case UPDATE:
      const pos = posts.filter((p) => p._id !== action.payload._id);
      return [...pos, action.payload];
    default:
      return posts;
  }
};
export default reducer;
