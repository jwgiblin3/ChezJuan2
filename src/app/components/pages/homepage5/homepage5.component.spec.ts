import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage5Component } from './homepage5.component';

describe('Homepage5Component', () => {
  let component: Homepage5Component;
  let fixture: ComponentFixture<Homepage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homepage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
