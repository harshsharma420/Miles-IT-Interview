import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherStandAloneComponent } from './another-stand-alone.component';

describe('AnotherStandAloneComponent', () => {
  let component: AnotherStandAloneComponent;
  let fixture: ComponentFixture<AnotherStandAloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnotherStandAloneComponent]
    });
    fixture = TestBed.createComponent(AnotherStandAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
