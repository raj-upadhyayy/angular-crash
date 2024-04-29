import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mockTasks } from '../../app.mock';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-section',
  standalone: true,
  imports: [CommonModule, TaskItemComponent], // Only CommonModule needs to be imported here
  templateUrl: './task-section.component.html',
  styleUrls: ['./task-section.component.css'], // Corrected property name and array notation
})
export class TaskSectionComponent {
  tasks = mockTasks; // Assuming 'tasks' will be filled with data
}
