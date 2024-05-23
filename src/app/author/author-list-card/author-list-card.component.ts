import {Component, Input} from '@angular/core';
import {Author} from "../../shared/models/author.model";

@Component({
  selector: 'app-author-list-card',
  templateUrl: './author-list-card.component.html',
  styleUrl: './author-list-card.component.css'
})
export class AuthorListCardComponent {

  @Input() author: Author;

  constructor() {
    this.author = {
      id: 0,
      comments: [],
      articles: [],
      totalComments: 0,
      totalPosts: 0,
      name: '',
      imageUrl: '',
    };
  }

}
