import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedGradesComponent } from './listed-grades.component';

describe('ListedGradesComponent', () => {
  let component: ListedGradesComponent;
  let fixture: ComponentFixture<ListedGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedGradesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListedGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
