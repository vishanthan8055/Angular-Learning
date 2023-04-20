import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcentComponent } from './appcent.component';

describe('AppcentComponent', () => {
  let component: AppcentComponent;
  let fixture: ComponentFixture<AppcentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppcentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppcentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
