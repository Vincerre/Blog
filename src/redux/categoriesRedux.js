// selectors

export const getAllCategories = (state) => state.categories;

export const getAllPosts = ({ posts, categories }) =>
  posts.map((post) => ({
    ...post,
    category: categories.find((cat) => cat.id === post.categoryId),
  }));

export const getPostsByCategories = ({ posts, categories }, catTitle) => {
  const postsByCat = posts.map((post) => ({
    ...post,
    category: categories.find((cat) => cat.id === post.categoryId),
  }));
  if (!postsByCat) return undefined;
  else {
    return postsByCat.filter((post) => post.category.title === catTitle);
  }
};

const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
export default categoriesReducer;
