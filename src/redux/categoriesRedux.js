// selectors

export const getAllCategories = (state) => state.categories;

export const getAllPosts = ({ posts, categories }) =>
  posts.map((post) => ({
    ...post,
    category: categories.find((cat) => cat.id === post.categoryId),
  }));

export const getPostsByCategories = ({ posts, categories }, catTitle) => {
  const postsCat = posts.map((post) => ({
    ...post,
    category: categories.find((cat) => cat.id === post.categoryId),
  }));
  return postsCat.filter((post) => post.category.title === catTitle);
};

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
export default categoriesReducer;
