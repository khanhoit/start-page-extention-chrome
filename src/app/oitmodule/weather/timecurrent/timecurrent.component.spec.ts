import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecurrentComponent } from './timecurrent.component';

describe('TimecurrentComponent', () => {
  let component: TimecurrentComponent;
  let fixture: ComponentFixture<TimecurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
