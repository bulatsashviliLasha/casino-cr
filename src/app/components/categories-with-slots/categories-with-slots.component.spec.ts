import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesWithSlotsComponent } from './categories-with-slots.component';

describe('FilterComponent', () => {
  let component: CategoriesWithSlotsComponent;
  let fixture: ComponentFixture<CategoriesWithSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesWithSlotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesWithSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
