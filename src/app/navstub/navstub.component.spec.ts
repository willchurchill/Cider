import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavstubComponent } from './navstub.component';

describe('NavstubComponent', () => {
  let component: NavstubComponent;
  let fixture: ComponentFixture<NavstubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavstubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavstubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
