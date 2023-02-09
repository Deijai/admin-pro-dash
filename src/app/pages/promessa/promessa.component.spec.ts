import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromessaComponent } from './promessa.component';

describe('PromessaComponent', () => {
  let component: PromessaComponent;
  let fixture: ComponentFixture<PromessaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromessaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
