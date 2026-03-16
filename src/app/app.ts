import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { TaskList } from './components/task-list/task-list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');
}
