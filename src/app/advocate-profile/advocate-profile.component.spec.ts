import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvocateProfileComponent } from './advocate-profile.component';

describe('AdvocateProfileComponent', () => {
  let component: AdvocateProfileComponent;
  let fixture: ComponentFixture<AdvocateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvocateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvocateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
