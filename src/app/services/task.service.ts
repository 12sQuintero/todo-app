import { EventEmitter, Injectable, inject } from '@angular/core';
import { ITask } from '../interfaces/task-interface';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _list: ITask[] = [
    {
      _id: 1,
      title: 'Taskt title',
      description: 'Task description',
      done: false,
    },
  ];

  private readonly _toastService: ToastService = inject(ToastService);
  readonly onSelectToEdit$: EventEmitter<ITask> = new EventEmitter<ITask>();

  get list(): ITask[] {
    return this._list;
  }

  findIndex(task: ITask): number {
    return this._list.findIndex((_task: ITask) => _task._id === task._id);
  }

  selectToEdit(task: ITask): void {
    this.onSelectToEdit$.emit(task);
  }
  add(task: ITask): void {
    this._list.unshift(task);
    this._toastService.showSuccess('Task Added!');
    console.log('list updated', this.list);
  }
  edit(task: ITask): void {
    const indexToEdit: number = this.findIndex(task);
    this._list[indexToEdit] = task;
    this._toastService.showStandard('Task Edited!');
  }

  delete(task: ITask): void {
    const indexToDelete: number = this.findIndex(task);
    if (indexToDelete === -1) return;
    this._list.splice(indexToDelete, 1);
    this._toastService.showStandard('Task deleted!');
  }
}
