import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmypostComponent } from './editmypost.component';

describe('EditmypostComponent', () => {
  let component: EditmypostComponent;
  let fixture: ComponentFixture<EditmypostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditmypostComponent]
    });
    fixture = TestBed.createComponent(EditmypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
