import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSingleV2Component } from './blog-single-v2.component';

describe('BlogSingleV2Component', () => {
  let component: BlogSingleV2Component;
  let fixture: ComponentFixture<BlogSingleV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSingleV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSingleV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
