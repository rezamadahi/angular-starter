import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";
import {ActivatedRoute} from "@angular/router";
import {Author} from "../../shared/models/author.model";

@Component({
  selector: 'app-author-details',
  standalone: false,
  templateUrl: './author-details.component.html',
  styleUrl: './author-details.component.css'
})
export class AuthorDetailsComponent implements OnInit {

  authorId:number = 0;
  author: Author;
  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
    this.author = {
      id: 0,
      imageUrl: '',
      comments: [],
      articles: [],
      totalPosts: 0,
      totalComments: 0,
      name: '',
    };
    this.authorId = +this.activatedRoute.snapshot.params['id'];
  }
  authors: Author[] = [];
  private readonly storageKey = 'authors';
  nameEdited = false;

  ngOnInit() {
    this.author = this.getAuthorById(this.authorId);
  }

  getAuthorById(id: number): Author {
    const author: Author = {
      id: 0,
      imageUrl: '',
      comments: [],
      articles: [],
      totalPosts: 0,
      totalComments: 0,
      name: '',
    };
    const authorsFromStorage = localStorage.getItem(this.storageKey);
    this.authors = authorsFromStorage ? JSON.parse(authorsFromStorage) : [];
    return this.authors.find(author => author.id === id) ?? author;
  }

  openImageUploader(): void {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.author.imageUrl = reader.result as string;
        const authorsFromStorage = localStorage.getItem(this.storageKey);
        if (authorsFromStorage) {
          const authors = JSON.parse(authorsFromStorage) as Author[];
          const updatedAuthors = authors.map(author => {
            if (author.id === this.author.id) {
              author.imageUrl = this.author.imageUrl;
            }
            return author;
          });
          localStorage.setItem(this.storageKey, JSON.stringify(updatedAuthors));
        }
      };
    }
  }

  editName(): void {
    const newName = prompt('Enter new name:', this.author?.name);
    if (newName !== null && newName !== '') {
      this.author.name = newName;
      this.updateAuthor(this.author);
    }
  }

  updateAuthor(author: Author) {
    const index = this.authors.findIndex(a => a.id === author.id);
    if (index !== -1) {
      this.authors[index] = author;
      localStorage.setItem(this.storageKey, JSON.stringify(this.authors));
      this.nameEdited = true;
      setTimeout(() => {
        this.nameEdited = false;
      }, 3000);
    }
  }

}
