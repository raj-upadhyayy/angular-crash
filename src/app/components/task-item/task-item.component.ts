import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Product, Task } from '../../app.types';
import { faClose, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() product: Product | undefined;
  @Input() isLoading: boolean | undefined;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  closeIcon = faClose;

  onDeleteClick(product?: Product) {
    console.log('hit 2')
    this.onDelete.emit(product);
  }

  onEditClick(product?: Product) {
    console.log('hit')
    this.onEdit.emit(product?.id);
  }

}
