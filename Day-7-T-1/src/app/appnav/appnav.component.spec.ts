import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppnavComponent } from './appnav.component';

describe('AppnavComponent', () => {
  let component: AppnavComponent;
  let fixture: ComponentFixture<AppnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
