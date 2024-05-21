export class Comment {
  id: number;
  user: string;
  title: string;
  createdOn: Date;
  constructor(props?: Partial<Comment>) {
    this.id = 0;
    this.user = '';
    this.title = '';
    this.createdOn = new Date();
    Object.assign(this, props);
  }
}
