import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedCoursesComponent } from './listed-courses.component';

describe('ListedCoursesComponent', () => {
  let component: ListedCoursesComponent;
  let fixture: ComponentFixture<ListedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
