import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSComponent } from './articles-s.component';

describe('ArticlesSComponent', () => {
  let component: ArticlesSComponent;
  let fixture: ComponentFixture<ArticlesSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
