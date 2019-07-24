import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeLivrosComponent } from './exibe-livros.component';

describe('ExibeLivrosComponent', () => {
  let component: ExibeLivrosComponent;
  let fixture: ComponentFixture<ExibeLivrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibeLivrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
