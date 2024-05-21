// mock-data.ts
import {Article, ArticleType} from "../models/article.model";
import {Author} from "../models/author.model";
import {Comment} from "../models/comment.model";

export const MOCK_ARTICLES: Article[] = [
  new Article({ id: 1, type: ArticleType.Article, title: 'Article 1', createdOn: new Date() }),
  new Article({ id: 2, type: ArticleType.Book, title: 'Book 1', createdOn: new Date() }),
];

export const MOCK_AUTHORS: Author[] = [
  new Author({ id: 1, name: 'John Doe', imageUrl: 'https://example.com/image.jpg', totalPosts: 2, totalComments: 5 }),
  new Author({ id: 2, name: 'Jane Smith', imageUrl: 'https://example.com/image.jpg', totalPosts: 3, totalComments: 8 }),
];

export const MOCK_COMMENTS: Comment[] = [
  new Comment({ id: 1, user: 'User 1', title: 'Comment 1', createdOn: new Date() }),
  new Comment({ id: 2, user: 'User 2', title: 'Comment 2', createdOn: new Date() }),
];
