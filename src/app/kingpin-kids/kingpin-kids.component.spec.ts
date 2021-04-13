import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingpinKidsComponent } from './kingpin-kids.component';

describe('KingpinKidsComponent', () => {
  let component: KingpinKidsComponent;
  let fixture: ComponentFixture<KingpinKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingpinKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingpinKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
