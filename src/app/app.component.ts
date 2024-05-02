import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskSectionComponent } from './components/task-section/task-section.component';
import { HttpClientModule } from '@angular/common/http';
import { AddSectionComponent } from './components/add-section/add-section.component';
import { CommonModule } from '@angular/common';
import { BaseService } from './services/base-service.service';
import { Product } from './app.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    TaskItemComponent,
    TaskSectionComponent,
    AddSectionComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'Wishlist';
  isAddSectionEnabled: boolean = false;

  loading: boolean = true;
  products: Product[] = [];
  itemDeletingId: number | null = null;

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getProducts().subscribe((response) => {
      this.products = response.products.length > 0 ? response.products : [];
      this.loading = false;
    });
  }

  onToggle() {
    this.isAddSectionEnabled = !this.isAddSectionEnabled;
  }

  onAdd(value: Product) {
    const newProducts = [...this.products];
    newProducts.push({ ...value, id: Math.random() });
    this.products = [...newProducts];
    this.isAddSectionEnabled = !this.isAddSectionEnabled;
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

  onEdit(productId: number) {
    const newProducts = this.products.map((item) =>
      item.id === productId
        ? {
            ...item,
            isBought: item.isBought !== undefined ? !item.isBought : true,
          }
        : item
    );
    this.products = [...newProducts];
  }
}
