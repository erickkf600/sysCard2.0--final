import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPageComponent]
    })
      .compileComponents();
  }));

  function setup() {
    const fixture: ComponentFixture<DashboardPageComponent> = TestBed.createComponent(DashboardPageComponent);
    const component: DashboardPageComponent = fixture.componentInstance;
    fixture.detectChanges();

    return { fixture, component };
  }

  it('should create', () => {
    const { component } = setup();

    expect(component).toBeTruthy();
  });
});
