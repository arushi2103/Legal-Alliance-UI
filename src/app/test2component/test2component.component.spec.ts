import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2componentComponent } from './test2component.component';

describe('Test2componentComponent', () => {
  let component: Test2componentComponent;
  let fixture: ComponentFixture<Test2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test2componentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Test2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
