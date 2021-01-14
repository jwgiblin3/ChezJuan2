import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Header4Component } from './header4.component';

describe('Header4Component', () => {
  let component: Header4Component;
  let fixture: ComponentFixture<Header4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
