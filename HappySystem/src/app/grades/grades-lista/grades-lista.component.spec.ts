import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesListaComponent } from './grades-lista.component';

describe('GradesListaComponent', () => {
  let component: GradesListaComponent;
  let fixture: ComponentFixture<GradesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
