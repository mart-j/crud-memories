import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../store/postsStore/actions';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    messege: '',
    tags: '',
    selectedFile: '',
  });

  const fileInput = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const submitHandler = () => {
    fileInput.current!.value = '';
    dispatch(createPostAction(postData));
    setPostData({
      creator: '',
      title: '',
      messege: '',
      tags: '',
      selectedFile: '',
    });
  };

  const convertImg = (file: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const result = () => {
      setPostData({ ...postData, selectedFile: reader.result as string });
    };
    reader.onload = result;
  };
  return (
    <div>
      <form
        autoComplete="off"
        style={{ display: 'inline-flex', flexDirection: 'column' }}
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <h6>Creating a memory</h6>

        <input
          placeholder="Creator"
          onChange={(e) => {
            setPostData({ ...postData, creator: e.target.value });
          }}
          value={postData.creator}
          id="name"
          type="text"
          required
        />

        <input
          placeholder="Title"
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
          value={postData.title}
          id="title"
          type="text"
          required
        />

        <input
          placeholder="message"
          onChange={(e) => {
            setPostData({ ...postData, messege: e.target.value });
          }}
          value={postData.messege}
          id="messege"
          type="text"
          required
        />

        <input
          placeholder="tags"
          onChange={(e) => {
            setPostData({
              ...postData,
              tags: e.target.value,
              selectedFile: '',
            });
          }}
          value={postData.tags}
          id="tags"
          type="text"
          required
        />
        <br />
        <br />

        <input
          ref={fileInput}
          onChange={(e) => {
            convertImg(e.target.files![0]);
            setPostData({
              ...postData,
              selectedFile: 'converImg(e.target.value)',
            });
          }}
          id="file"
          type="file"
          required
        />
        <br />
        <br />

        <button type="submit">Sumbmit</button>
      </form>
    </div>
  );
};
export default Form;
