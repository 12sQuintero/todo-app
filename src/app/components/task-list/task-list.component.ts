import { Component, Input, OnInit, inject } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { ITask } from '../../interfaces/task-interface';
import { TaskService } from '../../services/task.service';
import { TaskFormComponent } from '../forms/task-form/task-form.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent, TaskFormComponent, NgbAlertModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  tasktList: ITask[] = [];

  private readonly _taskService: TaskService = inject(TaskService);

  ngOnInit(): void {
    this.tasktList = this._taskService.list;
  }

  add(task: ITask): void {}
  edit(task: ITask): void {}

  delete(task: ITask): void {}
}
