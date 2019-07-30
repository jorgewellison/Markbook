import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselLivrosComponent } from './carrossel-livros.component';

describe('CarrosselLivrosComponent', () => {
  let component: CarrosselLivrosComponent;
  let fixture: ComponentFixture<CarrosselLivrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosselLivrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosselLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
