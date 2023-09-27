import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowlistComponent } from './followlist.component';

describe('FollowlistComponent', () => {
  let component: FollowlistComponent;
  let fixture: ComponentFixture<FollowlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowlistComponent]
    });
    fixture = TestBed.createComponent(FollowlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
