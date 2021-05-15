import { CREATE, FETCH_ALL } from "../constants/actionTypes";

import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    console.log(data);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
