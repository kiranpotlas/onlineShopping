import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceseriesComponent } from './acceseries.component';

describe('AcceseriesComponent', () => {
  let component: AcceseriesComponent;
  let fixture: ComponentFixture<AcceseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
