import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
} from '@angular/core';
import { mockTasks } from '../../app.mock';
import { TaskItemComponent } from '../task-item/task-item.component';
import { BaseService } from '../../services/base-service.service';
import { Product, Task } from '../../app.types';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-task-section',
  standalone: true,
  imports: [CommonModule, TaskItemComponent], // Only CommonModule needs to be imported here
  templateUrl: './task-section.component.html',
  styleUrls: ['./task-section.component.css'], // Corrected property name and array notation
})
export class TaskSectionComponent implements OnInit {
  @Input() loading: boolean | undefined;
  @Input() products: Product[] | undefined; // Assuming 'tasks' will be filled with data
  @Input() itemDeletingId: number | null | undefined;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();


  constructor() {}

  ngOnInit(): void {}

  onDeleteClick(product: Product) {
    this.onDelete.emit(product);
  }

  onEditClick(productId: string) {
    this.onEdit.emit(productId);
  }
}
