import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarderingarComponent } from './varderingar.component';

describe('VarderingarComponent', () => {
  let component: VarderingarComponent;
  let fixture: ComponentFixture<VarderingarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarderingarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarderingarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
