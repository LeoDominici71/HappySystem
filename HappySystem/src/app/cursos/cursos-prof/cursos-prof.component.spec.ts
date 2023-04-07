import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosProfComponent } from './cursos-prof.component';

describe('CursosProfComponent', () => {
  let component: CursosProfComponent;
  let fixture: ComponentFixture<CursosProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosProfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
