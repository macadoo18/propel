import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsQueueComponent } from './goals-queue.component';

describe('GoalsQueueComponent', () => {
  let component: GoalsQueueComponent;
  let fixture: ComponentFixture<GoalsQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
