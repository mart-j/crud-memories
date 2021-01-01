import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import { getAllPosts } from './store/postsStore/actions';

const memories =
  'https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  
  }, [dispatch]);
  return (
    <div style={{ textAlign: 'center' }} className="container">
      <h1>Memories</h1>
      <img src={memories} alt="memories" width={200} />
      <div>
        <div>
          <Posts />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};
export default App;
