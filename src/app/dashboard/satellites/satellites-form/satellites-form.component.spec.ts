import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatellitesFormComponent } from './satellites-form.component';

describe('SatellitesFormComponent', () => {
  let component: SatellitesFormComponent;
  let fixture: ComponentFixture<SatellitesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatellitesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatellitesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
