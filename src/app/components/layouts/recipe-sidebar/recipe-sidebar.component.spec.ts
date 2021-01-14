import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSidebarComponent } from './recipe-sidebar.component';

describe('RecipeSidebarComponent', () => {
  let component: RecipeSidebarComponent;
  let fixture: ComponentFixture<RecipeSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
