import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlygraphComponent } from './monthlygraph.component';

describe('MonthlygraphComponent', () => {
  let component: MonthlygraphComponent;
  let fixture: ComponentFixture<MonthlygraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlygraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlygraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
