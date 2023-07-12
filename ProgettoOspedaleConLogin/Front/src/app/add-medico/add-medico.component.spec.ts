import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMEdicoComponent } from './add-medico.component';

describe('AddMEdicoComponent', () => {
  let component: AddMEdicoComponent;
  let fixture: ComponentFixture<AddMEdicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMEdicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMEdicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
