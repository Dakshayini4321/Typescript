import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOperationsComponent } from './array-operations.component';

describe('ArrayOperationsComponent', () => {
  let component: ArrayOperationsComponent;
  let fixture: ComponentFixture<ArrayOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
