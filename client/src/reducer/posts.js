import { CREATE, FETCH_ALL } from "../constants/actionTypes";

const initialState = [];

const reducer = (posts = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return [...posts, action.payload];
      break;
    case FETCH_ALL:
      return action.payload;
      break;
    default:
      return posts;
      break;
  }
};
export default reducer;
