import axios from "axios";

const url = "http://localhost:5000/posts";

// const sendMail = "http://localhost:5000/send";

export const getPosts = () => axios.get(url);
export const getPost = (id) => axios.get(url + `${id}`);
export const createPost = (body) => axios.post(url, body);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
