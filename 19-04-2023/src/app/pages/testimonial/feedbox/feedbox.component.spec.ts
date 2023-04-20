import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedboxComponent } from './feedbox.component';

describe('FeedboxComponent', () => {
  let component: FeedboxComponent;
  let fixture: ComponentFixture<FeedboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
