import { Injectable } from '@angular/core';
import {AUTHORS_PER_PAGE, MOCK_AUTHORS} from "./mock-data";
import {Author, AuthorSortType} from "./models/author.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly storageKey = 'authors';
  private authors: Author[] = [];
  authorList = new BehaviorSubject<Author[]>([]);

  constructor() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(MOCK_AUTHORS));
    }
  }


  getAuthors(page: number): Author[] {

    const authorsFromStorage = localStorage.getItem(this.storageKey);
    this.authors = authorsFromStorage ? JSON.parse(authorsFromStorage) : [];
    const startIndex = (page - 1) * AUTHORS_PER_PAGE;
    const endIndex = startIndex + AUTHORS_PER_PAGE;
    this.authorList.next(this.authors);
    return this.authors.slice(startIndex, endIndex);
  }

  getTotalAuthors(): number {
    const authorsFromStorage = localStorage.getItem(this.storageKey);
    return authorsFromStorage ? JSON.parse(authorsFromStorage).length : 0;
  }

  filteredAuthors(searchText: string, sortType: string, currentPage: number): Author[] {
    const filtered = this.authors.filter(author =>
      author.name.toLowerCase().includes(searchText.toLowerCase())
    ).sort((a, b) => {
      switch (sortType) {
        case AuthorSortType.Name:
          return a.name.localeCompare(b.name);
        case AuthorSortType.totalPosts:
          return a.totalPosts - b.totalPosts;
        case AuthorSortType.totalComments:
          return a.totalComments - b.totalComments;
        default:
          return 0;
      }
    });

    const startIndex = (currentPage - 1) * AUTHORS_PER_PAGE;
    const endIndex = startIndex + AUTHORS_PER_PAGE;
    return filtered.slice(startIndex, endIndex);
  }

  addNewAuthor(newAuthor: Author): void {
    const authorToAdd: Author = {
      id: this.authors.length + 1,
      name: newAuthor.name || 'New Author',
      imageUrl: newAuthor.imageUrl || '',
      totalPosts: newAuthor.totalPosts || 0,
      totalComments: newAuthor.totalComments || 0,
      articles: [],
      comments: [],
    };
    this.authors.push(authorToAdd);
    this.authorList.next(this.authors);
    localStorage.setItem(this.storageKey, JSON.stringify(this.authors));
  }

}
