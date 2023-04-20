import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmComponent } from './frm.component';

describe('FrmComponent', () => {
  let component: FrmComponent;
  let fixture: ComponentFixture<FrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
