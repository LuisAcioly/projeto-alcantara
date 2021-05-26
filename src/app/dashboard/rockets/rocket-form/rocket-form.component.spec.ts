import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketFormComponent } from './rocket-form.component';

describe('RocketFormComponent', () => {
  let component: RocketFormComponent;
  let fixture: ComponentFixture<RocketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
