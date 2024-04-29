import { NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() onClick = new EventEmitter()

  ngOnInit(): void {}

  OnButtonClick(){
    this.onClick.emit();
  }
}
