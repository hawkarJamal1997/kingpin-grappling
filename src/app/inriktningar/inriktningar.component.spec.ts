import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InriktningarComponent } from './inriktningar.component';

describe('InriktningarComponent', () => {
  let component: InriktningarComponent;
  let fixture: ComponentFixture<InriktningarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InriktningarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InriktningarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
