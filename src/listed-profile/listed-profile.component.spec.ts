import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedProfileComponent } from './listed-profile.component';

describe('ListedProfileComponent', () => {
  let component: ListedProfileComponent;
  let fixture: ComponentFixture<ListedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
