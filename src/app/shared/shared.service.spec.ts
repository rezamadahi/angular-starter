import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';
import { MOCK_AUTHORS, AUTHORS_PER_PAGE } from './mock-data';
import { Author, AuthorSortType } from './models/author.model';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return authors from local storage', () => {
    const authors = service.getAuthors(1);
    expect(authors).toEqual(MOCK_AUTHORS.slice(0, AUTHORS_PER_PAGE));
  });

  it('should return total number of authors', () => {
    const totalAuthors = service.getTotalAuthors();
    expect(totalAuthors).toEqual(MOCK_AUTHORS.length);
  });

  it('should filter and sort authors', () => {
    const searchText = 'John';
    const sortType = AuthorSortType.totalPosts;
    const currentPage = 1;
    const filteredAuthors = service.filteredAuthors(searchText, sortType, currentPage);
    const expectedAuthors = MOCK_AUTHORS.filter(author =>
      author.name.toLowerCase().includes(searchText.toLowerCase())
    ).sort((a, b) => a.totalPosts - b.totalPosts).slice(0, AUTHORS_PER_PAGE);
    expect(filteredAuthors).toEqual(expectedAuthors);
  });

  it('should add a new author', () => {
    const newAuthor: Author = {
      id: 4,
      name: 'New Author',
      imageUrl: '',
      totalPosts: 10,
      totalComments: 5,
      articles: [],
      comments: []
    };
    service.addNewAuthor(newAuthor);
    const authors = service.getAuthors(1);
    expect(authors.length).toEqual(MOCK_AUTHORS.length + 1);
    expect(authors[28]).toEqual(newAuthor);
  });
});
