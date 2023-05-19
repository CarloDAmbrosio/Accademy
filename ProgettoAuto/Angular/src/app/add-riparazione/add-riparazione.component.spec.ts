import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiparazioneComponent } from './add-riparazione.component';

describe('AddRiparazioneComponent', () => {
  let component: AddRiparazioneComponent;
  let fixture: ComponentFixture<AddRiparazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRiparazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRiparazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
