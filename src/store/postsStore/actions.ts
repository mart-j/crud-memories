import { Dispatch } from 'redux';
import * as api from '../../api';
import { FETCH_ALL, CREATE, Post, UPDATE, DELETE, LIKE } from './types';

export const getAllPosts = () => {
  return async (dispatch: Dispatch) => {
    const { data }: { data: Post[] } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, posts: data });
  };
};

export const createPostAction = (post: Post) => async (dispatch: Dispatch) => {
  try {
    const { data }: { data: Post[] } = await api.createPost(post);

    dispatch({ type: CREATE, post: data });
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line max-len
export const updatePostAction = (id: string, post: Post) => async (
  dispatch: Dispatch,
) => {
  try {
    const { data }: { data: Post[] } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, post: data });
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line max-len
export const deletePostAction = (id: string) => async (dispatch: Dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, postId: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePostAction = (id: string) => async (dispatch: Dispatch) => {
  try {
    await api.likePost(id);

    dispatch({ type: LIKE, postId: id });
  } catch (error) {
    console.log(error);
  }
};
