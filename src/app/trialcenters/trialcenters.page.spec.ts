import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialcentersPage } from './trialcenters.page';

describe('TrialcentersPage', () => {
  let component: TrialcentersPage;
  let fixture: ComponentFixture<TrialcentersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialcentersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialcentersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
