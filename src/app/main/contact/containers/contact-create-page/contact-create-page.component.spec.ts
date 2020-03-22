import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCreatePageComponent } from './users-page.component';

describe('ContactCreatePageComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactCreatePageComponent]
    })
      .compileComponents();
  }));

  function setup() {
    const fixture: ComponentFixture<ContactCreatePageComponent> = TestBed.createComponent(ContactCreatePageComponent);
    const component: ContactCreatePageComponent = fixture.componentInstance;
    fixture.detectChanges();

    return { fixture, component };
  }

  it('should create', () => {
    const { component } = setup();

    expect(component).toBeTruthy();
  });
});
