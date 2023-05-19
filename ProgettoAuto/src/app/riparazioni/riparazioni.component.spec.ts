import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiparazioniComponent } from './riparazioni.component';

describe('RiparazioniComponent', () => {
  let component: RiparazioniComponent;
  let fixture: ComponentFixture<RiparazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiparazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiparazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
