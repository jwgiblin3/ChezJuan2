import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMasonryComponent } from './blog-masonry.component';

describe('BlogMasonryComponent', () => {
  let component: BlogMasonryComponent;
  let fixture: ComponentFixture<BlogMasonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogMasonryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
