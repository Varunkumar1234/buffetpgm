import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbuffetComponent } from './bookbuffet.component';

describe('BookbuffetComponent', () => {
  let component: BookbuffetComponent;
  let fixture: ComponentFixture<BookbuffetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookbuffetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbuffetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
