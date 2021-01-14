import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleV3Component } from './blog-single-v3.component';

describe('BlogSingleV3Component', () => {
  let component: BlogSingleV3Component;
  let fixture: ComponentFixture<BlogSingleV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSingleV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingleV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
