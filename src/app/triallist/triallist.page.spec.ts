import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriallistPage } from './triallist.page';

describe('TriallistPage', () => {
  let component: TriallistPage;
  let fixture: ComponentFixture<TriallistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriallistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriallistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
