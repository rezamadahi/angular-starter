export class Article {
  id: number;
  type: ArticleType;
  title: string;
  createdOn: Date;
  constructor(props?: Partial<Article>) {
    this.id = 0;
    this.type = ArticleType.Article;
    this.title = '';
    this.createdOn = new Date();
    Object.assign(this, props);
  }
}

export enum ArticleType {
  Article = 'ARTICLE',
  Book = 'BOOK'
}
