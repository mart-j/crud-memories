import axios from 'axios';
import { Post } from '../store/postsStore/types';

const url = 'https://memories4.herokuapp.com/posts';

export const fetchPosts = () => {
  return axios.get(url);
};

export const createPost = (newPost: Post) => {
  return axios.post(url, newPost);
};

export const updatePost = (id: string, updatedPost: Post) => {
  return axios.patch(`${url}/${id}`, updatedPost);
};

export const deletePost = (id: string) => {
  return axios.delete(`${url}/${id}`);
};

export const likePost = (id: string) => {
  return axios.patch(`${url}/${id}/likePost`);
};
