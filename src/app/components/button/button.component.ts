import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'my-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() variant: 'text' | 'primary' | 'secondary' | 'icon' = 'text';
  @Input() options: any;
  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  onClick(event: any): void {
    this.click.emit(event);
  }

}
