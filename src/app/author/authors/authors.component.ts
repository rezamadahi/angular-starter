import {Component, OnInit} from '@angular/core';
import {Author, AuthorSortType} from "../../shared/models/author.model";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-authors',
  standalone: false,
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent implements OnInit {

  authorsList: Author[] = [];
  currentPage = 1;
  totalAuthors = 0;
  searchText = '';
  sortType: string = 'name';
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorsList = this.sharedService.getAuthors(this.currentPage);
    this.totalAuthors = this.sharedService.getTotalAuthors();
  }

  loadMore(): void {
    this.currentPage++;
    if (this.authorsList.length < this.totalAuthors) {
      const nextPageAuthors = this.sharedService.getAuthors(this.currentPage);
      this.authorsList = [...this.authorsList, ...nextPageAuthors];
    }
  }

  addNewAuthor() {}

  searchAuthors() {}

  sortAuthors() {}

}
