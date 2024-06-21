import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastsContainer } from './components/toasts-container/toasts-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastsContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';
}
