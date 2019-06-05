import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top20PeliculasComponent } from './top20-peliculas.component';

describe('Top20PeliculasComponent', () => {
  let component: Top20PeliculasComponent;
  let fixture: ComponentFixture<Top20PeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top20PeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top20PeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
