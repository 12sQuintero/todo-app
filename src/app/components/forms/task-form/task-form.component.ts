import { Component, Input, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITask } from '../../../interfaces/task-interface';
import { NgClass } from '@angular/common';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit {
  task?: ITask;
  private readonly _taskService: TaskService = inject(TaskService);
  private readonly _formBuilder: FormBuilder = inject(FormBuilder);

  form?: FormGroup;

  ngOnInit(): void {
    this.setForm();
    this.subscribeToEdit();
  }

  setForm(): void {
    this.form = this.getFormGroup();
  }
  resetForm(): void {
    this.task = undefined;
    this.setForm();
    console.log('on reset', this.form?.value);
  }

  getFormGroup(): FormGroup {
    const _id: number = Math.random();

    return this._formBuilder.nonNullable.group({
      _id: [this.task?._id ?? _id],
      title: [this.task?.title ?? '', [Validators.required]],
      description: [this.task?.description ?? '', [Validators.required]],
      done: [this.task?.done ?? false, [Validators.required]],
    });
  }

  subscribeToEdit(): void {
    this._taskService.onSelectToEdit$.subscribe((task: ITask) => {
      this.taskToEdit = task;
    });
  }

  set taskToEdit(task: ITask) {
    this.task = task;
    this.setForm();
  }

  onSubmit(): void {
    if (!this.form) return;

    if (this.task) {
      this._taskService.edit(this.form.getRawValue());
      return this.resetForm();
    }
    this._taskService.add(this.form.getRawValue());
    this.resetForm();
  }
}
