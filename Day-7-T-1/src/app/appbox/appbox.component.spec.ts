import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppboxComponent } from './appbox.component';

describe('AppboxComponent', () => {
  let component: AppboxComponent;
  let fixture: ComponentFixture<AppboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
