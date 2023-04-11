import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesDiretorComponent } from './grades-diretor.component';

describe('GradesDiretorComponent', () => {
  let component: GradesDiretorComponent;
  let fixture: ComponentFixture<GradesDiretorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradesDiretorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesDiretorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
