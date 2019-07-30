import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgLeituraComponent } from './pg-leitura.component';

describe('PgLeituraComponent', () => {
  let component: PgLeituraComponent;
  let fixture: ComponentFixture<PgLeituraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgLeituraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgLeituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
