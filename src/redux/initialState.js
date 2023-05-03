const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title 1',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-24-2022'),
      author: 'John Doe',
      categoryId: '1',
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article...',
      content:
        'Main content of the article.Main content of the article.Main content of the article.Main content of the article.Main content of the article.Main content of the article.Main content of the article.Main content of the article.Main content of the article.',
      publishedDate: new Date('12-09-2023'),
      author: 'John Doe',
      categoryId: '1',
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('10-02-2022'),
      author: 'John Doe',
      categoryId: '3',
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
    {
      id: '5',
      title: 'Article title 5',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-24-2022'),
      author: 'John Doe',
      categoryId: '2',
    },
    {
      id: '6',
      title: 'Article title 6',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-24-2022'),
      author: 'John Doe',
      categoryId: '1',
    },
    {
      id: '7',
      title: 'Article title 7',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-24-2022'),
      author: 'John Doe',
      categoryId: '2',
    },
  ],
  categories: [
    {
      id: '1',
      title: 'Sport',
    },
    {
      id: '2',
      title: 'News',
    },
    {
      id: '3',
      title: 'Movies',
    },
  ],
};

export default initialState;
