import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockedRouteComponent } from './unlocked-route.component';

describe('UnlockedRouteComponent', () => {
  let component: UnlockedRouteComponent;
  let fixture: ComponentFixture<UnlockedRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnlockedRouteComponent]
    });
    fixture = TestBed.createComponent(UnlockedRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
