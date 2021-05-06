import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedlemskapComponent } from './medlemskap.component';

describe('MedlemskapComponent', () => {
  let component: MedlemskapComponent;
  let fixture: ComponentFixture<MedlemskapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedlemskapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedlemskapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
