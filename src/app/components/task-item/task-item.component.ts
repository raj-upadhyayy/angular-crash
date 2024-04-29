import { Component, Input, input } from '@angular/core';
import { Task } from '../../app.types';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task | undefined;
}
