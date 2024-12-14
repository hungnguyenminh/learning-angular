import { Component } from '@angular/core';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [TodoItemComponent, FormsModule, NgForOf],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasks: string[] = [];
  newTask: string = '';
  fullName: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  removeTask(task: string) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log('Giá trị hiện tại:', input.value);
  }
}
