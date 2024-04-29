import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSectionComponent } from './task-section.component';

describe('TaskSectionComponent', () => {
  let component: TaskSectionComponent;
  let fixture: ComponentFixture<TaskSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
