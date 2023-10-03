import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProfileComponent } from './e-profile.component';

describe('EProfileComponent', () => {
  let component: EProfileComponent;
  let fixture: ComponentFixture<EProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EProfileComponent]
    });
    fixture = TestBed.createComponent(EProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
