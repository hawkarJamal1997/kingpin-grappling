import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapplingTypeComponent } from './grapplingtype.component';

describe('GrapplingTypeComponent', () => {
  let component: GrapplingTypeComponent;
  let fixture: ComponentFixture<GrapplingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapplingTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapplingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
