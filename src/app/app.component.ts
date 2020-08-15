import { Component } from '@angular/core';
import { Task } from './task';
import { FormStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  taskName = 'Sugested: Cleaning';
  taskDate = '';
  config: { [key: string]: string | Date } = null;
  title = 'Tasker';
  tasks: Task[] = [
    {
      name: 'Learn english',
      deadline: '2020-12-12',
      done: false,
    },
    {
      name: 'Buy milk',
      deadline: '2020-11-11',
      done: true,
    },
    {
      name: 'Learn spanish',
      deadline: '2020-12-12',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Tasker',
        footer: '© Tasker',
        date: new Date(),
      };
    }, 500);
    this.sortTasks();
  }

  get footer(): string {
    return '© Tasker';
  }

  getDate(): Date {
    return new Date();
  }

  clearTasks(): void {
    this.tasks = [];
  }

  onKeyUp(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
  }

  createTask(): void {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }

  switchedEditMode(): void {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task): void {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter((e) => e !== task);
    this.sortTasks();
  }

  private sortTasks(): void {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }
}
