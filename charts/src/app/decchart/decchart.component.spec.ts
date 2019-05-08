import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecchartComponent } from './decchart.component';

describe('DecchartComponent', () => {
  let component: DecchartComponent;
  let fixture: ComponentFixture<DecchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
