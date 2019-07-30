import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarLivroComponent } from './mostrar-livro.component';

describe('MostrarLivroComponent', () => {
  let component: MostrarLivroComponent;
  let fixture: ComponentFixture<MostrarLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
