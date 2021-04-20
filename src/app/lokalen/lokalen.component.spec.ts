import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokalenComponent } from './lokalen.component';

describe('LokalenComponent', () => {
  let component: LokalenComponent;
  let fixture: ComponentFixture<LokalenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LokalenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LokalenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
