export const getAllPosts = ({ posts, categories }) =>
  posts.map((post) => ({
    ...post,
    category: categories.find((cat) => cat.id === post.categoryId),
  }));

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
export default categoriesReducer;
