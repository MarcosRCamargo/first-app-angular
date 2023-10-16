import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarNav } from './nav-bar.component';

describe('ToolbarNav', () => {
  let component: ToolbarNav;
  let fixture: ComponentFixture<ToolbarNav>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToolbarNav]
    });
    fixture = TestBed.createComponent(ToolbarNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
