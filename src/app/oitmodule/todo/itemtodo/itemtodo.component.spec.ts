import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtodoComponent } from './itemtodo.component';

describe('ItemtodoComponent', () => {
  let component: ItemtodoComponent;
  let fixture: ComponentFixture<ItemtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemtodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
