import {Article} from "./article.model";
import {CommentModel} from "./comment.model";

export class Author {
  id: number;
  name: string;
  imageUrl: string;
  totalPosts: number;
  totalComments: number;
  articles: Article[];
  comments: CommentModel[];
  constructor(props?: Partial<Author>) {
    this.id = 0;
    this.name = '';
    this.imageUrl = '';
    this.totalPosts = 0;
    this.totalComments = 0;
    this.articles = [];
    this.comments = [];
    Object.assign(this, props);
  }
}

export enum AuthorSortType {
  Name = 'name',
  totalPosts = 'total-posts',
  totalComments = 'total-comments',
}
