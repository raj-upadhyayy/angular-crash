import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  loading: boolean = true;
  products: Product[] = []; // Assuming 'tasks' will be filled with data
  itemDeletingId: number | null = null;

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getProducts().subscribe((response) => {
      this.products = response.products.length > 0 ? response.products : [];
      this.loading = false;
    });
  }

  onDelete(product: Product) {
    this.itemDeletingId = product.id;
    this.baseService.deleteProduct(product.id).subscribe((response) => {
      if (response.id === product.id) {
        this.products = this.products.filter((item) => item.id !== product.id);
      } else {
        alert('Something went wrong');
      }
      this.itemDeletingId = null;
    });
  }
}
