import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecontentPage } from './coursecontent.page';

describe('CoursecontentPage', () => {
  let component: CoursecontentPage;
  let fixture: ComponentFixture<CoursecontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursecontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
