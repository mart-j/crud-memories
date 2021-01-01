import { combineReducers } from 'redux';
import postsStore from './postsStore';

const rootReducer = combineReducers({ postsStore });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
