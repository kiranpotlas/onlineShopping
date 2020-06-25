import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoolComponent } from './wool.component';

describe('WoolComponent', () => {
  let component: WoolComponent;
  let fixture: ComponentFixture<WoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
