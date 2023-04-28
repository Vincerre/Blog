import shortid from 'shortid';

//selectors

export const getPosts = (state) => state.posts;
export const getPostsById = ({ posts }, postId) => posts.find((post) => post.id === postId);

// export const getAllPosts = ({ posts, categories }) =>
//   posts.map((post) => ({
//     ...post,
//     category: categories.find((cat) => cat.id === post.categoryId),
//   }));

export const getAllPosts = ({ posts, categories }) =>
  state.posts.map((post) => ({
    ...post,
    category: state.categories.find((cat) => cat.id === post.categoryId),
  }));

// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const ADD_POST = createActionName('ADD_POST');
const REMOVE_POST = createActionName('REMOVE_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators

export const addPost = (payload) => ({
  type: ADD_POST,
  payload,
});

export const removePost = (payload) => ({
  type: REMOVE_POST,
  payload,
});

export const editPost = (payload) => ({
  type: EDIT_POST,
  payload,
});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];
    case REMOVE_POST:
      return [...statePart.filter((post) => post.id !== action.payload)];
    case EDIT_POST:
      return statePart.map((post) => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  }
};

export default postsReducer;
