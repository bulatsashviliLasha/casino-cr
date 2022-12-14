import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticCategoriesComponent } from './static-categories.component';

describe('StaticCategoriesComponent', () => {
  let component: StaticCategoriesComponent;
  let fixture: ComponentFixture<StaticCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
