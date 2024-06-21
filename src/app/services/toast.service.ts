import { Injectable } from '@angular/core';

export interface Toast {
  message: string;
  classname?: string;
  delay?: number;
}
@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = [];

  private show(toast: Toast) {
    this.toasts.push(toast);
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  showStandard(message: string) {
    this.show({ message });
  }

  showSuccess(message: string) {
    this.show({ message, classname: 'bg-success text-light', delay: 10000 });
  }

  showDanger(message: string) {
    this.show({ message, classname: 'bg-danger text-light', delay: 15000 });
  }
}
