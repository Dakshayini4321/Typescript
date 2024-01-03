import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudArrayComponent } from './crud-array.component';

describe('CrudArrayComponent', () => {
  let component: CrudArrayComponent;
  let fixture: ComponentFixture<CrudArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
