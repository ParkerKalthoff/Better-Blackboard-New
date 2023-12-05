import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedOrganizationComponent } from './listed-organization.component';

describe('ListedOrganizationComponent', () => {
  let component: ListedOrganizationComponent;
  let fixture: ComponentFixture<ListedOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedOrganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListedOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
