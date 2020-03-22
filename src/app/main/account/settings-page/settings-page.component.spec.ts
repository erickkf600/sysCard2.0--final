import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageComponent } from './settings-page.component';

describe('SettingsPageComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsPageComponent]
    })
      .compileComponents();
  }));

  function setup() {
    const fixture: ComponentFixture<SettingsPageComponent> = TestBed.createComponent(SettingsPageComponent);
    const component: SettingsPageComponent = fixture.componentInstance;
    fixture.detectChanges();

    return { fixture, component };
  }

  it('should create', () => {
    const { component } = setup();

    expect(component).toBeTruthy();
  });
});
