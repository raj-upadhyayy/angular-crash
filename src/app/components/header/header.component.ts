import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  @Input() title: string | undefined;
  ngOnInit(): void {}
  OnClick() {
    console.log('test')
  }
}
