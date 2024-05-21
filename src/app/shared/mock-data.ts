// mock-data.ts
import {Article, ArticleType} from "./models/article.model";
import {Author} from "./models/author.model";
import {Comment} from "./models/comment.model";

export const MOCK_ARTICLES: Article[] = [
  new Article({ id: 1, type: ArticleType.Article, title: 'Article 1', createdOn: new Date() }),
  new Article({ id: 2, type: ArticleType.Book, title: 'Book 1', createdOn: new Date() }),
];

export const MOCK_AUTHORS: Author[] = [
  new Author({ id: 1, name: 'John Doe', imageUrl: 'assets/images/demian.jpg', totalPosts: 2, totalComments: 5 }),
  new Author({ id: 2, name: 'Jane Smith', imageUrl: 'assets/images/dixie.png', totalPosts: 3, totalComments: 8 }),
  new Author({ id: 3, name: 'Jane Miller', imageUrl: 'assets/images/Frankfurt.jpg', totalPosts: 3, totalComments: 8 }),
  new Author({ id: 4, name: 'Jane Nash', imageUrl: 'assets/images/maximize.jpg', totalPosts: 4, totalComments: 5 }),
  new Author({ id: 5, name: 'John Mill', imageUrl: 'assets/images/spacerace.jpg', totalPosts: 2, totalComments: 7 }),
  new Author({ id: 6, name: 'David Pink', imageUrl: 'assets/images/step.jpg', totalPosts: 2, totalComments: 7 }),
  new Author({ id: 7, name: 'David Milner', imageUrl: 'assets/images/symphone.jpg', totalPosts: 8, totalComments: 12 }),
  new Author({ id: 8, name: 'Alisha Bin', imageUrl: 'assets/images/the-century-of-the-self.jpg', totalPosts: 8, totalComments: 22 }),
  new Author({ id: 9, name: 'Alisha James', imageUrl: 'assets/images/zermatt.jpg', totalPosts: 8, totalComments: 2 }),

  new Author({ id: 1, name: 'John Doe', imageUrl: 'assets/images/demian.jpg', totalPosts: 2, totalComments: 5 }),
  new Author({ id: 2, name: 'Jane Smith', imageUrl: 'assets/images/dixie.png', totalPosts: 3, totalComments: 8 }),
  new Author({ id: 3, name: 'Jane Miller', imageUrl: 'assets/images/Frankfurt.jpg', totalPosts: 3, totalComments: 8 }),
  new Author({ id: 4, name: 'Jane Nash', imageUrl: 'assets/images/maximize.jpg', totalPosts: 4, totalComments: 5 }),
  new Author({ id: 5, name: 'John Mill', imageUrl: 'assets/images/spacerace.jpg', totalPosts: 2, totalComments: 7 }),
  new Author({ id: 6, name: 'David Pink', imageUrl: 'assets/images/step.jpg', totalPosts: 2, totalComments: 7 }),
  new Author({ id: 7, name: 'David Milner', imageUrl: 'assets/images/symphone.jpg', totalPosts: 8, totalComments: 12 }),
  new Author({ id: 8, name: 'Alisha Bin', imageUrl: 'assets/images/the-century-of-the-self.jpg', totalPosts: 8, totalComments: 22 }),
  new Author({ id: 9, name: 'Alisha James', imageUrl: 'assets/images/zermatt.jpg', totalPosts: 8, totalComments: 2 }),

  new Author({ id: 1, name: 'John Doe', imageUrl: 'assets/images/demian.jpg', totalPosts: 2, totalComments: 5 }),
  new Author({ id: 2, name: 'Jane Smith', imageUrl: 'assets/images/dixie.png', totalPosts: 3, totalComments: 8 }),
  new Author({ id: 3, name: 'Jane Miller', imageUrl: 'assets/images/Frankfurt.jpg', totalPosts: 3, totalComments: 8 }),
  new Author({ id: 4, name: 'Jane Nash', imageUrl: 'assets/images/maximize.jpg', totalPosts: 4, totalComments: 5 }),
  new Author({ id: 5, name: 'John Mill', imageUrl: 'assets/images/spacerace.jpg', totalPosts: 2, totalComments: 7 }),
  new Author({ id: 6, name: 'David Pink', imageUrl: 'assets/images/step.jpg', totalPosts: 2, totalComments: 7 }),
  new Author({ id: 7, name: 'David Milner', imageUrl: 'assets/images/symphone.jpg', totalPosts: 8, totalComments: 12 }),
  new Author({ id: 8, name: 'Alisha Bin', imageUrl: 'assets/images/the-century-of-the-self.jpg', totalPosts: 8, totalComments: 22 }),
  new Author({ id: 9, name: 'Alisha James', imageUrl: 'assets/images/zermatt.jpg', totalPosts: 8, totalComments: 2 }),
];

export const MOCK_COMMENTS: Comment[] = [
  new Comment({ id: 1, user: 'User 1', title: 'Comment 1', createdOn: new Date() }),
  new Comment({ id: 2, user: 'User 2', title: 'Comment 2', createdOn: new Date() }),
];

export const AUTHORS_PER_PAGE = 9;
