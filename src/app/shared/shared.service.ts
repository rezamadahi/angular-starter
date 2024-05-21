import { Injectable } from '@angular/core';
import {Article} from "../models/article.model";
import {MOCK_ARTICLES, MOCK_AUTHORS, MOCK_COMMENTS} from "./mock-data";
import {Author} from "../models/author.model";
import {Comment} from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {}

  getArticles(): Article[] {
    return MOCK_ARTICLES;
  }

  getAuthors(): Author[] {
    return MOCK_AUTHORS;
  }

  getComments(): Comment[] {
    return MOCK_COMMENTS;
  }

}
