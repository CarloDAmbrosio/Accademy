import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandiereComponent } from './bandiere.component';

describe('BandiereComponent', () => {
  let component: BandiereComponent;
  let fixture: ComponentFixture<BandiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandiereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
