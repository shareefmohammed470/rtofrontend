import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVehicleDetailsComponent } from './get-vehicle-details.component';

describe('GetVehicleDetailsComponent', () => {
  let component: GetVehicleDetailsComponent;
  let fixture: ComponentFixture<GetVehicleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetVehicleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
