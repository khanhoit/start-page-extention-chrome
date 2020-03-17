import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultisearchComponent } from './multisearch.component';

describe('MultisearchComponent', () => {
  let component: MultisearchComponent;
  let fixture: ComponentFixture<MultisearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultisearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
