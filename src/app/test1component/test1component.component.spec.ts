import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1componentComponent } from './test1component.component';

describe('Test1componentComponent', () => {
  let component: Test1componentComponent;
  let fixture: ComponentFixture<Test1componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test1componentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Test1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
