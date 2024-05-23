import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Author, AuthorSortType} from "../../shared/models/author.model";
import {SharedService} from "../../shared/shared.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  authorForm: FormGroup;
  newAuthorForm: FormGroup;
  imageUrl: string | null = null;
  authorAdded: boolean = false;
  filterCurrentPage = 1;
  isFilter = false;
  @ViewChild('closeButton') closeButton!: ElementRef;
  constructor(
    private sharedService: SharedService,
    private formBuilder: FormBuilder,)
  {
    this.authorForm = this.formBuilder.group({
      searchText: new FormControl(''),
      sortType: new FormControl(''),
    });
    this.newAuthorForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      imageUrl: new FormControl(''),
    });
  }

  ngOnInit() {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.isFilter = false;
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

  addNewAuthor() {
    const newAuthor: Author = {
      id: 0,
      imageUrl: this.newAuthorForm.value.imageUrl,
      comments: [],
      articles: [],
      totalPosts: 0,
      totalComments: 0,
      name: this.newAuthorForm.value.name,
    };
    this.sharedService.addNewAuthor(newAuthor);
    this.newAuthorForm.reset();
    this.closeButton.nativeElement.click();
    this.authorAdded = true;
    setTimeout(() => {
      this.authorAdded = false;
    }, 5000);
  }

  onSearch() {
    if (this.authorForm.value.searchText || this.authorForm.value.sortType) {
      this.isFilter = true;
    } else {
      this.isFilter = false;
    }
    this.authorsList = [];
    this.authorsList = this.sharedService.filteredAuthors(this.authorForm.value.searchText, this.authorForm.value.sortType, this.filterCurrentPage);
  }

  setImage(imageUrl: string): void {
    this.imageUrl = imageUrl;
    this.newAuthorForm.get('imageUrl')?.setValue(this.imageUrl);
  }

  getTotalAuthors() {
    return this.isFilter ? this.authorsList.length : this.totalAuthors;
  }

}
