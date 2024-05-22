import { Injectable } from '@angular/core';
import {Article} from "./models/article.model";
import {AUTHORS_PER_PAGE, MOCK_ARTICLES, MOCK_AUTHORS, MOCK_COMMENTS} from "./mock-data";
import {Author} from "./models/author.model";
import {CommentModel} from "./models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly storageKey = 'authors';

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(MOCK_AUTHORS));
    }
  }

  getArticles(): Article[] {
    return MOCK_ARTICLES;
  }

  getAuthors(page: number): Author[] {

    const authorsFromStorage = localStorage.getItem(this.storageKey);
    const authors = authorsFromStorage ? JSON.parse(authorsFromStorage) : [];
    const startIndex = (page - 1) * AUTHORS_PER_PAGE;
    const endIndex = startIndex + AUTHORS_PER_PAGE;
    return authors.slice(startIndex, endIndex);

    // const startIndex = (page - 1) * AUTHORS_PER_PAGE;
    // const endIndex = startIndex + AUTHORS_PER_PAGE;
    // return MOCK_AUTHORS.slice(startIndex, endIndex);
  }

  getTotalAuthors(): number {
    const authorsFromStorage = localStorage.getItem(this.storageKey);
    return authorsFromStorage ? JSON.parse(authorsFromStorage).length : 0;

    // return MOCK_AUTHORS.length;
  }

  addNewAuthor(newAuthor: Author): void {
    const authorsFromStorage = localStorage.getItem(this.storageKey);
    const authors = authorsFromStorage ? JSON.parse(authorsFromStorage) : [];
    const authorToAdd: Author = {
      id: authors.length + 1,
      name: newAuthor.name || 'New Author',
      imageUrl: newAuthor.imageUrl || '',
      totalPosts: newAuthor.totalPosts || 0,
      totalComments: newAuthor.totalComments || 0,
      articles: [],
      comments: [],
    };
    authors.push(authorToAdd);
    localStorage.setItem(this.storageKey, JSON.stringify(authors));
  }

  getComments(): CommentModel[] {
    return MOCK_COMMENTS;
  }

}
