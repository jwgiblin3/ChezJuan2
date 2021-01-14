import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleV1Component } from './blog-single-v1.component';

describe('BlogSingleV1Component', () => {
  let component: BlogSingleV1Component;
  let fixture: ComponentFixture<BlogSingleV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSingleV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingleV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
