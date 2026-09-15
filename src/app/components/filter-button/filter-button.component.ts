import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  standalone: true,
  templateUrl: './filter-button.component.html',
  styleUrl: './filter-button.component.css'
})
export class FilterButtonComponent {

  @Input() label = '';

  @Output() selected = new EventEmitter<void>();


  onClick(): void {

    this.selected.emit();

  }

}
