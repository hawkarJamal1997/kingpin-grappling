import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingpinKidsSidaComponent } from './kingpin-kids-sida.component';

describe('KingpinKidsSidaComponent', () => {
  let component: KingpinKidsSidaComponent;
  let fixture: ComponentFixture<KingpinKidsSidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingpinKidsSidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingpinKidsSidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
