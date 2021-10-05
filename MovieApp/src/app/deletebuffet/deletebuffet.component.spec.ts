import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletebuffetComponent } from './deletebuffet.component';

describe('DeletebuffetComponent', () => {
  let component: DeletebuffetComponent;
  let fixture: ComponentFixture<DeletebuffetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletebuffetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletebuffetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
