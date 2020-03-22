import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPageComponent } from './users-page.component';

describe('UsersPageComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersPageComponent]
    })
      .compileComponents();
  }));

  function setup() {
    const fixture: ComponentFixture<UsersPageComponent> = TestBed.createComponent(UsersPageComponent);
    const component: UsersPageComponent = fixture.componentInstance;
    fixture.detectChanges();

    return { fixture, component };
  }

  it('should create', () => {
    const { component } = setup();

    expect(component).toBeTruthy();
  });
});
