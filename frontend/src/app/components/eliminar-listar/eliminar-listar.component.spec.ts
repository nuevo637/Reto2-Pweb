import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarListarComponent } from './eliminar-listar.component';

describe('EliminarListarComponent', () => {
  let component: EliminarListarComponent;
  let fixture: ComponentFixture<EliminarListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
