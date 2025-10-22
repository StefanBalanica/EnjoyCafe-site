import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkSubject = new BehaviorSubject<boolean>(false);
  public isDark$ = this.isDarkSubject.asObservable();

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const saved = localStorage.getItem('theme');
    if (saved) {
      const isDark = saved === 'dark';
      this.isDarkSubject.next(isDark);
    } else {
      // default: light
      this.isDarkSubject.next(false);
      localStorage.setItem('theme', 'light');
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkSubject.value;
    this.isDarkSubject.next(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    this.applyTheme();
  }

  get isDark(): boolean {
    return this.isDarkSubject.value;
  }

  private applyTheme(): void {
    const el = document.documentElement;
    if (this.isDarkSubject.value) {
      el.classList.remove('light');
      el.classList.add('dark');
    } else {
      el.classList.remove('dark');
      el.classList.add('light');
    }
  }
}
