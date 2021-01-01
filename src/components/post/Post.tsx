/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  deletePostAction,
  updatePostAction,
  likePostAction,
} from '../../store/postsStore/actions';
import loadingGif from '../../assets/loading.gif';

const Post = () => {
  const posts = useSelector((store: RootState) => {
    return store.postsStore;
  });

  const dispatch = useDispatch();

  const updateHandler = (id: string) => {
    const found = posts.find((post) => post._id === id)!;
    const newPost = { ...found, creator: 'jezups' };
    dispatch(updatePostAction(id, newPost));
    console.log(newPost);
  };

  const deleteHandler = (id: string) => {
    dispatch(deletePostAction(id));
  };
  const likeHandler = (id: string) => {
    dispatch(likePostAction(id));
  };

  return (
    <div>
      <div>
        {posts.length ? (
          posts.map((item, i) => {
            return (
              <div key={JSON.stringify(i)}>
                <h4>{item.creator}</h4>
                <div>{item.messege}</div>
                <img src={item.selectedFile} alt="bilde" width={100} />
                <h3>Likes: {item.likeCount}</h3>
                <button
                  onClick={() => {
                    likeHandler(item._id!);
                  }}
                >
                  Like
                </button>
                <button
                  onClick={() => {
                    updateHandler(item._id!);
                  }}
                >
                  edit post
                </button>
                <button
                  onClick={() => {
                    deleteHandler(item._id!);
                  }}
                >
                  DELETE POST
                </button>
                <hr />
              </div>
            );
          })
        ) : (
          <img src={loadingGif} alt="" />
        )}
      </div>
    </div>
  );
};
export default Post;
