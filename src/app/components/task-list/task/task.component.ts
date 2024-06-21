import { Component, Input, inject } from '@angular/core';
import { ITask } from '../../../interfaces/task-interface';
import { NgClass } from '@angular/common';
import { ToastService } from '../../../services/toast.service';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  private readonly _toastService: ToastService = inject(ToastService);

  private readonly _taskService: TaskService = inject(TaskService);

  onTaskDondeChange(): void {
    this.task.done = !this.task.done;
    if (this.task.done) this._toastService.showSuccess('Task Done!');
  }

  onClickEditBtn(): void {
    this._taskService.selectToEdit(this.task);
  }
  onClickDeleteBtn(): void {
    this._taskService.delete(this.task);
  }
}
