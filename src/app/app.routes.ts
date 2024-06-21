import { Routes } from '@angular/router';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { TaskComponent } from './components/task-list/task/task.component';

export default [
  {
    path: 'todo-list',
    component: TodoPageComponent,
    title: 'TODO List',
    children: [
      {
        path: ':id',
        component: TaskComponent
      }
    ]
  },
  {
    //default page
    path: '',
    redirectTo: '/todo-list',
    pathMatch: 'full',
  },
  //on undefined routes
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
] as Routes;
