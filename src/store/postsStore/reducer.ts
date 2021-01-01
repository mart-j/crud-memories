/* eslint-disable no-underscore-dangle */
import {
  CREATE,
  AllActions,
  FETCH_ALL,
  Post,
  UPDATE,
  DELETE,
  LIKE,
} from './types';

const initaialState: Post[] = [];

export const postsReducer = (
  state = initaialState,
  action: AllActions,
): Post[] => {
  switch (action.type) {
    case FETCH_ALL: {
      return action.posts;
    }
    case CREATE: {
      return [...state, action.post];
    }
    case UPDATE: {
      return state.map((post) =>
        post._id === action.post._id ? action.post : post,
      );
    }
    case DELETE: {
      return state.filter((post) => post._id !== action.postId);
    }
    case LIKE: {
      return state.map((post) =>
        post._id === action.postId
          ? { ...post, likeCount: post.likeCount! + 1 }
          : post,
      );
    }
    default:
      return state;
  }
};
