import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdayComponent } from './weatherday.component';

describe('WeatherdayComponent', () => {
  let component: WeatherdayComponent;
  let fixture: ComponentFixture<WeatherdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
