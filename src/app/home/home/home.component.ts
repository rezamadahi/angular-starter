import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";
import {Author} from "../../shared/models/author.model";

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  authorsList: Author[] = [];
  currentPage = 1;
  totalAuthors = 0;
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

}
