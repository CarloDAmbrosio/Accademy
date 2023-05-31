import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformazioneComponent } from './informazione.component';

describe('InformazioneComponent', () => {
  let component: InformazioneComponent;
  let fixture: ComponentFixture<InformazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformazioneComponent]
    });
    fixture = TestBed.createComponent(InformazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
