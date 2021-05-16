import {
  CREATE,
  FETCH_ALL,
  FETCH_POST,
  DELETE,
  UPDATE,
} from "../constants/actionTypes";

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

export const getPost = (id) => async (dispatch) => {
  try {
    const post = await api.getPost(id);
    console.log(post);
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

export const deletePosts = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  console.log(id, post);
  try {
    const { data } = await api.updatePost(id, post);
    console.log(data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const sendPosts = (post) => async (dispatch) => {
  console.log(post);
  try {
    await api.sendPost(post);
  } catch (error) {
    console.log(error.message);
  }
};
