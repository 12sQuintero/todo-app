import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { ITask } from '../../interfaces/task-interface';
import { TaskFormComponent } from '../../components/forms/task-form/task-form.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {

}
