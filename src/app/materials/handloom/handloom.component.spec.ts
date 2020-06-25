import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandloomComponent } from './handloom.component';

describe('HandloomComponent', () => {
  let component: HandloomComponent;
  let fixture: ComponentFixture<HandloomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandloomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandloomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
