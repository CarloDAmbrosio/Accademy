import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartiComponent } from './reparti.component';

describe('RepartiComponent', () => {
  let component: RepartiComponent;
  let fixture: ComponentFixture<RepartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
