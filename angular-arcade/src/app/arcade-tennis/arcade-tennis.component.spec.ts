import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeTennisComponent } from './arcade-tennis.component';

describe('ArcadeTennisComponent', () => {
  let component: ArcadeTennisComponent;
  let fixture: ComponentFixture<ArcadeTennisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadeTennisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadeTennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
