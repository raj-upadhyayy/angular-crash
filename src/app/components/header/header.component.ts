import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  input,
} from '@angular/core';
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
  @Input() isAddSectionEnabled: boolean | undefined;
  @Output() onToggle = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  OnClick() {
    this.onToggle.emit();
  }
}
