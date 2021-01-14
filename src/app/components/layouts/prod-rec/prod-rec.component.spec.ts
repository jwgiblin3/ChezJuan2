import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRecComponent } from './prod-rec.component';

describe('Header5Component', () => {
  let component: ProdRecComponent;
  let fixture: ComponentFixture<ProdRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
