import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-section.component.html',
  styleUrl: './add-section.component.css',
})
export class AddSectionComponent implements OnInit {
  @Output() onAdd = new EventEmitter();
  title: string = '';
  price: string = '';
  isBought: boolean = false;
  ngOnInit(): void {}
  onSubmit() {
    this.onAdd.emit({
      title: this.title,
      price: this.price,
      isBought: this.isBought,
    });
  }
}
