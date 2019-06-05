import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPelisComponent } from './result-pelis.component';

describe('ResultPelisComponent', () => {
  let component: ResultPelisComponent;
  let fixture: ComponentFixture<ResultPelisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPelisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
