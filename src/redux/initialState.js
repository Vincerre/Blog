const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-24-2022'),
      author: 'John Doe',
      categoryId: '3',
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content:
        'Main content of the article.Main content of the article.Main content of the article.Main content of the article.Main content of the article.Main content of the article.Main content of the article.Main content of the article.Main content of the article.',
      publishedDate: new Date('12-09-2023'),
      author: 'John Doe',
      categoryId: '2',
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('10-02-2022'),
      author: 'John Doe',
      categoryId: '2',
    },
    {
      id: '4',
      title: 'Article title 4',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'John Doe',
      categoryId: '1',
    },
  ],
  categories: [
    {
      id: '1',
      category: 'Sport',
    },
    {
      id: '2',
      category: 'News',
    },
    {
      id: '3',
      category: 'Movies',
    },
  ],
};

export default initialState;
