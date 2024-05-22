// I changed the name of model because of name

export class CommentModel {
  id: number;
  user: string;
  title: string;
  createdOn: Date;
  constructor(props?: Partial<CommentModel>) {
    this.id = 0;
    this.user = '';
    this.title = '';
    this.createdOn = new Date();
    Object.assign(this, props);
  }
}
