import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaPaginaComponent } from './seconda-pagina.component';

describe('SecondaPaginaComponent', () => {
  let component: SecondaPaginaComponent;
  let fixture: ComponentFixture<SecondaPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
