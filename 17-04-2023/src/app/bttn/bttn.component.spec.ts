import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BttnComponent } from './bttn.component';

describe('BttnComponent', () => {
  let component: BttnComponent;
  let fixture: ComponentFixture<BttnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BttnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BttnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
