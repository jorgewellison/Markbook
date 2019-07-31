import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaBibliotecaComponent } from './minha-biblioteca.component';

describe('MinhaBibliotecaComponent', () => {
  let component: MinhaBibliotecaComponent;
  let fixture: ComponentFixture<MinhaBibliotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaBibliotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
