import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlikesComponent } from './viewlikes.component';

describe('ViewlikesComponent', () => {
  let component: ViewlikesComponent;
  let fixture: ComponentFixture<ViewlikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewlikesComponent]
    });
    fixture = TestBed.createComponent(ViewlikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
