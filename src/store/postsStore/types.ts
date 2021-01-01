export const CREATE = 'CREATE';
export const FETCH_ALL = 'FETCH_ALL';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const LIKE = 'LIKE';

export interface AllActions {
  type: typeof CREATE | typeof FETCH_ALL | typeof UPDATE | typeof DELETE | typeof LIKE;
  posts: Post[];
  post: Post;
  postId: string;
}

export type Post = {
  creator: string;
  title: string;
  messege: string;
  tags: string;
  selectedFile: string;
  __v?: number;
  _id?: string;
  likeCount?: number;
  createdAt?: string;
};
