import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevioustrialsPage } from './previoustrials.page';

describe('PrevioustrialsPage', () => {
  let component: PrevioustrialsPage;
  let fixture: ComponentFixture<PrevioustrialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevioustrialsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevioustrialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
