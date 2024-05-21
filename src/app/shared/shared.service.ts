import { Injectable } from '@angular/core';
import {Article} from "./models/article.model";
import {AUTHORS_PER_PAGE, MOCK_ARTICLES, MOCK_AUTHORS, MOCK_COMMENTS} from "./mock-data";
import {Author} from "./models/author.model";
import {Comment} from "./models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {}

  getArticles(): Article[] {
    return MOCK_ARTICLES;
  }

  getAuthors(page: number): Author[] {
    const startIndex = (page - 1) * AUTHORS_PER_PAGE;
    const endIndex = startIndex + AUTHORS_PER_PAGE;
    return MOCK_AUTHORS.slice(startIndex, endIndex);
  }

  getTotalAuthors(): number {
    return MOCK_AUTHORS.length;
  }

  getComments(): Comment[] {
    return MOCK_COMMENTS;
  }

}
