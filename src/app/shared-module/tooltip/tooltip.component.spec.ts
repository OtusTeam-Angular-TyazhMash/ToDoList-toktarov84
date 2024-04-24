import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipComponentComponent } from './tooltip.component';

describe('TooltipComponentComponent', () => {
  let component: TooltipComponentComponent;
  let fixture: ComponentFixture<TooltipComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipComponentComponent]
    });
    fixture = TestBed.createComponent(TooltipComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
