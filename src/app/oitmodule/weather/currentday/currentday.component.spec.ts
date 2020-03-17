import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentdayComponent } from './currentday.component';

describe('CurrentdayComponent', () => {
  let component: CurrentdayComponent;
  let fixture: ComponentFixture<CurrentdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
