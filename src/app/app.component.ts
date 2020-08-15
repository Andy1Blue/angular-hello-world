import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Tasker',
        footer: '© Tasker',
        date: new Date(),
      };
    }, 500);
  }

  get footer(): string {
    return '© Tasker';
  }

  getDate(): Date {
    return new Date();
  }
}
