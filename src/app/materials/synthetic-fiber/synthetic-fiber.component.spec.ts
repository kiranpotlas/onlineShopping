import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntheticFiberComponent } from './synthetic-fiber.component';

describe('SyntheticFiberComponent', () => {
  let component: SyntheticFiberComponent;
  let fixture: ComponentFixture<SyntheticFiberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntheticFiberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntheticFiberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
