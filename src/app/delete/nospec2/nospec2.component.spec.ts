import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nospec2Component } from './nospec2.component';

describe('Nospec2Component', () => {
  let component: Nospec2Component;
  let fixture: ComponentFixture<Nospec2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nospec2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nospec2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
