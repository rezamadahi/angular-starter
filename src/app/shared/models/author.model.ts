export class Author {
  id: number;
  name: string;
  imageUrl: string;
  totalPosts: number;
  totalComments: number;
  constructor(props?: Partial<Author>) {
    this.id = 0;
    this.name = '';
    this.imageUrl = '';
    this.totalPosts = 0;
    this.totalComments = 0;
    Object.assign(this, props);
  }
}

export enum AuthorSortType {
  Name = 'name',
  totalPosts = 'total-posts',
  totalComments = 'total-comments',
}
