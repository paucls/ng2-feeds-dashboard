/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('Component: Navbar', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent
      ],
    });
  });

  it('should create an instance', () => {
    let component = new NavbarComponent();
    expect(component).toBeTruthy();
  });

  it(`should render the text 'Personal Dashboard' as navbar brand`, async(() => {
    let fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.navbar-brand').textContent).toContain('Personal Dashboard');
  }));

});
