import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylikesComponent } from './mylikes.component';

describe('MylikesComponent', () => {
  let component: MylikesComponent;
  let fixture: ComponentFixture<MylikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MylikesComponent]
    });
    fixture = TestBed.createComponent(MylikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
