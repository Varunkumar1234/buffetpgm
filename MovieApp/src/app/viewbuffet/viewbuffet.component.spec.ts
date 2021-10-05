import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbuffetComponent } from './viewbuffet.component';

describe('ViewbuffetComponent', () => {
  let component: ViewbuffetComponent;
  let fixture: ComponentFixture<ViewbuffetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbuffetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbuffetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
