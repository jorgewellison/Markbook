import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheslivroComponent } from './detalheslivro.component';

describe('DetalheslivroComponent', () => {
  let component: DetalheslivroComponent;
  let fixture: ComponentFixture<DetalheslivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheslivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheslivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
