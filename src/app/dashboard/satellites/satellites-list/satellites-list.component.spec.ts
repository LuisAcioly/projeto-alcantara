import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatellitesListComponent } from './satellites-list.component';

describe('SatellitesListComponent', () => {
  let component: SatellitesListComponent;
  let fixture: ComponentFixture<SatellitesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatellitesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatellitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
