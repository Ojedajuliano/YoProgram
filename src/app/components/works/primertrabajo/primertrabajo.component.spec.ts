import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimertrabajoComponent } from './primertrabajo.component';

describe('PrimertrabajoComponent', () => {
  let component: PrimertrabajoComponent;
  let fixture: ComponentFixture<PrimertrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimertrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimertrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
