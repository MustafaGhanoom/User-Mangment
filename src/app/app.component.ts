// app.component.ts
import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: any;

  constructor(private localStorageService: LocalStorageService) {
    this.currentUser = this.localStorageService.getCurrentUser();
  }

  logout() {
    this.localStorageService.removeCurrentUser();
    this.currentUser = null;
  }
}
