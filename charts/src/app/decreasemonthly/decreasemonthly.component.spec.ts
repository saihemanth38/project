import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreasemonthlyComponent } from './decreasemonthly.component';

describe('DecreasemonthlyComponent', () => {
  let component: DecreasemonthlyComponent;
  let fixture: ComponentFixture<DecreasemonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecreasemonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecreasemonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
