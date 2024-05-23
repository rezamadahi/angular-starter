import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListCardComponent } from './author-list-card.component';

describe('AuthorListCardComponent', () => {
  let component: AuthorListCardComponent;
  let fixture: ComponentFixture<AuthorListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorListCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
