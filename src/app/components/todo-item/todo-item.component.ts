import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  standalone: true,
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() task!: string;
  @Output() remove = new EventEmitter<string>();
}
