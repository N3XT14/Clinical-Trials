import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedicalhistoryPage } from './updatemedicalhistory.page';

describe('UpdatemedicalhistoryPage', () => {
  let component: UpdatemedicalhistoryPage;
  let fixture: ComponentFixture<UpdatemedicalhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemedicalhistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemedicalhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
