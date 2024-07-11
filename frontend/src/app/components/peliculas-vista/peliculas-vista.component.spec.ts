import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasVistaComponent } from './peliculas-vista.component';

describe('PeliculasVistaComponent', () => {
  let component: PeliculasVistaComponent;
  let fixture: ComponentFixture<PeliculasVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasVistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
