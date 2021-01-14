import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Header5Component } from './header5.component';

describe('Header5Component', () => {
  let component: Header5Component;
  let fixture: ComponentFixture<Header5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Header5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Header5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
