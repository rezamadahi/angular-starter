// mock-data.ts
import {Article, ArticleType} from "./models/article.model";
import {Author} from "./models/author.model";
import {CommentModel} from "./models/comment.model";

export const MOCK_ARTICLES: Article[] = [
  new Article({ id: 1, type: ArticleType.Article, title: 'Article 1', createdOn: new Date() }),
  new Article({ id: 2, type: ArticleType.Book, title: 'Book 1', createdOn: new Date() }),
];

export const MOCK_AUTHORS: Author[] = [
  new Author({
    id: 1,
    name: 'John Doe',
    imageUrl: 'assets/images/demian.jpg',
    totalPosts: 2,
    totalComments: 5,
    comments: [
      new CommentModel({ id: 1, user: 'User 1', title: 'Comment 1', createdOn: new Date() }),
      new CommentModel({ id: 2, user: 'User 2', title: 'Comment 2', createdOn: new Date() }),
      new CommentModel({ id: 3, user: 'User 3', title: 'Comment 3', createdOn: new Date() }),
      new CommentModel({ id: 4, user: 'User 2', title: 'Comment 4', createdOn: new Date() }),
      new CommentModel({ id: 5, user: 'User 4', title: 'Comment 5', createdOn: new Date() }),
    ],
    articles: [
      new Article({ id: 1, type: ArticleType.Article, title: 'Article 1', createdOn: new Date() }),
      new Article({ id: 2, type: ArticleType.Book, title: 'Book 1', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 2,
    name: 'Jane Smith',
    imageUrl: 'assets/images/dixie.png',
    totalPosts: 3,
    totalComments: 8,
    comments: [
      new CommentModel({ id: 1, user: 'User 1', title: 'Comment 1', createdOn: new Date() }),
      new CommentModel({ id: 2, user: 'User 2', title: 'Comment 2', createdOn: new Date() }),
      new CommentModel({ id: 3, user: 'User 2', title: 'Comment 3', createdOn: new Date() }),
      new CommentModel({ id: 4, user: 'User 2', title: 'Comment 4', createdOn: new Date() }),
      new CommentModel({ id: 5, user: 'User 2', title: 'Comment 5', createdOn: new Date() }),
      new CommentModel({ id: 6, user: 'User 2', title: 'Comment 6', createdOn: new Date() }),
      new CommentModel({ id: 7, user: 'User 2', title: 'Comment 7', createdOn: new Date() }),
      new CommentModel({ id: 8, user: 'User 2', title: 'Comment 8', createdOn: new Date() }),
    ],
    articles: [
      new Article({ id: 1, type: ArticleType.Article, title: 'Article 1', createdOn: new Date() }),
      new Article({ id: 2, type: ArticleType.Book, title: 'Book 2', createdOn: new Date() }),
      new Article({ id: 3, type: ArticleType.Book, title: 'Book 3', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 3,
    name: 'Jane Miller',
    imageUrl: 'assets/images/Frankfurt.jpg',
    totalPosts: 3,
    totalComments: 4,
    comments: [
      new CommentModel({ id: 9, user: 'User 1', title: 'Comment 1', createdOn: new Date() }),
      new CommentModel({ id: 10, user: 'User 2', title: 'Comment 2', createdOn: new Date() }),
      new CommentModel({ id: 11, user: 'User 2', title: 'Comment 3', createdOn: new Date() }),
      new CommentModel({ id: 12, user: 'User 2', title: 'Comment 4', createdOn: new Date() }),
    ],
    articles: [
      new Article({ id: 4, type: ArticleType.Article, title: 'Article 4', createdOn: new Date() }),
      new Article({ id: 5, type: ArticleType.Book, title: 'Book 5', createdOn: new Date() }),
      new Article({ id: 6, type: ArticleType.Book, title: 'Book 6', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 4, name: 'Jane Nash',
    imageUrl: 'assets/images/maximize.jpg',
    totalPosts: 4,
    totalComments: 5,
    comments: [
      new CommentModel({ id: 13, user: 'User 1', title: 'Comment 1', createdOn: new Date() }),
      new CommentModel({ id: 14, user: 'User 2', title: 'Comment 2', createdOn: new Date() }),
      new CommentModel({ id: 15, user: 'User 2', title: 'Comment 3', createdOn: new Date() }),
      new CommentModel({ id: 16, user: 'User 2', title: 'Comment 4', createdOn: new Date() }),
      new CommentModel({ id: 17, user: 'User 2', title: 'Comment 5', createdOn: new Date() }),
    ],
    articles: [
      new Article({ id: 7, type: ArticleType.Article, title: 'Article 7', createdOn: new Date() }),
      new Article({ id: 8, type: ArticleType.Book, title: 'Book 8', createdOn: new Date() }),
      new Article({ id: 9, type: ArticleType.Book, title: 'Book 9', createdOn: new Date() }),
      new Article({ id: 10, type: ArticleType.Article, title: 'Article 10', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 5,
    name: 'John Mill',
    imageUrl: 'assets/images/spacerace.jpg',
    totalPosts: 2,
    totalComments: 1,
    comments: [
      new CommentModel({ id: 18, user: 'User 1', title: 'Test comment', createdOn: new Date() }),
    ],
    articles: [
      new Article({ id: 11, type: ArticleType.Article, title: 'Article 11', createdOn: new Date() }),
      new Article({ id: 12, type: ArticleType.Book, title: 'Book 12', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 6,
    name: 'David Pink',
    imageUrl: 'assets/images/step.jpg',
    totalPosts: 1,
    totalComments: 1,
    comments: [
      new CommentModel({ id: 19, user: 'User 1', title: 'Test comment', createdOn: new Date() }),
    ],
    articles: [
      new Article({ id: 13, type: ArticleType.Article, title: 'Article 13', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 7,
    name: 'David Milner',
    imageUrl: 'assets/images/symphone.jpg',
    totalPosts: 1,
    totalComments: 0 ,
    comments: [],
    articles: [
      new Article({ id: 14, type: ArticleType.Article, title: 'Article 14', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 8,
    name: 'Alisha Bin',
    imageUrl: 'assets/images/the-century-of-the-self.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 15, type: ArticleType.Article, title: 'Article 15', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 9,
    name: 'Alisha James',
    imageUrl: 'assets/images/zermatt.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 16, type: ArticleType.Article, title: 'Article 16', createdOn: new Date() }),
    ],
  }),

  new Author({
    id: 10,
    name: 'John Doe',
    imageUrl: 'assets/images/demian.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 17, type: ArticleType.Article, title: 'Article 17', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 11,
    name: 'Jane Smith',
    imageUrl: 'assets/images/dixie.png',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 18, type: ArticleType.Article, title: 'Article 18', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 12,
    name: 'Jane Miller',
    imageUrl: 'assets/images/Frankfurt.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 19, type: ArticleType.Article, title: 'Article 19', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 13,
    name: 'Jane Nash',
    imageUrl: 'assets/images/maximize.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 20, type: ArticleType.Article, title: 'Article 20', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 14,
    name: 'John Mill',
    imageUrl: 'assets/images/spacerace.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 21, type: ArticleType.Article, title: 'Article 21', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 15,
    name: 'David Pink',
    imageUrl: 'assets/images/step.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 22, type: ArticleType.Article, title: 'Article 22', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 16,
    name: 'David Milner',
    imageUrl: 'assets/images/symphone.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 23, type: ArticleType.Article, title: 'Article 23', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 17,
    name: 'Alisha Bin',
    imageUrl: 'assets/images/the-century-of-the-self.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 24, type: ArticleType.Article, title: 'Article 24', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 18,
    name: 'Alisha James',
    imageUrl: 'assets/images/zermatt.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 25, type: ArticleType.Article, title: 'Article 25', createdOn: new Date() }),
    ],
  }),

  new Author({
    id: 19,
    name: 'John Doe',
    imageUrl: 'assets/images/demian.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 26, type: ArticleType.Article, title: 'Article 26', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 20,
    name: 'Jane Smith',
    imageUrl: 'assets/images/dixie.png',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 27, type: ArticleType.Article, title: 'Article 27', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 21,
    name: 'Jane Miller',
    imageUrl: 'assets/images/Frankfurt.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 28, type: ArticleType.Article, title: 'Article 28', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 22,
    name: 'Jane Nash',
    imageUrl: 'assets/images/maximize.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 29, type: ArticleType.Article, title: 'Article 29', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 23,
    name: 'John Mill',
    imageUrl: 'assets/images/spacerace.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 30, type: ArticleType.Article, title: 'Article 30', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 24,
    name: 'David Pink',
    imageUrl: 'assets/images/step.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 31, type: ArticleType.Article, title: 'Article 31', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 25,
    name: 'David Milner',
    imageUrl: 'assets/images/symphone.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 32, type: ArticleType.Article, title: 'Article 32', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 26,
    name: 'Alisha Bin',
    imageUrl: 'assets/images/the-century-of-the-self.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 33, type: ArticleType.Article, title: 'Article 33', createdOn: new Date() }),
    ],
  }),
  new Author({
    id: 27,
    name: 'Alisha James',
    imageUrl: 'assets/images/zermatt.jpg',
    totalPosts: 1,
    totalComments: 0,
    comments: [],
    articles: [
      new Article({ id: 34, type: ArticleType.Article, title: 'Article 34', createdOn: new Date() }),
    ],
  }),
];

export const MOCK_COMMENTS: CommentModel[] = [
  new CommentModel({ id: 1, user: 'User 1', title: 'Comment 1', createdOn: new Date() }),
  new CommentModel({ id: 2, user: 'User 2', title: 'Comment 2', createdOn: new Date() }),
];

export const AUTHORS_PER_PAGE = 9;
export const ARTICLES_PER_PAGE = 9;
export const COMMENTS_PER_PAGE = 9;
