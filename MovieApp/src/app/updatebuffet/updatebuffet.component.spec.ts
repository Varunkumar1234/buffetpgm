import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebuffetComponent } from './updatebuffet.component';

describe('UpdatebuffetComponent', () => {
  let component: UpdatebuffetComponent;
  let fixture: ComponentFixture<UpdatebuffetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatebuffetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebuffetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
